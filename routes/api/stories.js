const express = require("express");
const router = express.Router();
const Story = require("../../models/Story");
const mongoose = require("mongoose");
const Grid = require("gridfs-stream");

let gfs;
const conn = mongoose.connection;
conn.once("open", () => {
  gfs = Grid(conn.db, mongoose.mongo);
  gfs.collection("stories");
});

//@route GET api/stories/test
//@desc test stories page
//@access Public

router.get("/test", (req, res) => {
  res.json({ msg: "Stories page works" });
});

//@route GET api/stories
//@desc fetch stories page
//@access Public

router.get("/", (req, res) => {
  Story.find().then(storiesData => {
    stories = storiesData;
  });
  gfs.files.find().toArray((err, files) => {
    const bufs = [];
    res.setHeader("Content-Type", "image/jpeg");
    res.writeHead(res.statusCode);
    files.map(file => {
      const readstream = gfs.createReadStream(file.filename);
      readstream.on("data", function(chunk) {
        bufs.push(chunk);
      });
      readstream.on("end", function() {
        const fbuf = Buffer.concat(bufs);
        res.write(fbuf);
        res.end();
      });
    });
  });
});

module.exports = router;
