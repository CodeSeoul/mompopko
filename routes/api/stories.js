const express = require("express");
const router = express.Router();
const Story = require("../../models/Story");
const mongoose = require("mongoose");
const Grid = require("gridfs-stream");
const bodyParser = require("body-parser");

let gfs;
const conn = mongoose.connection;
conn.once("open", () => {
  gfs = Grid(conn.db, mongoose.mongo);
  gfs.collection("images");
});

//body parser middleware

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

//@route GET api/stories/test
//@desc test stories page
//@access Public

router.get("/test", (req, res) => {
  res.json({ msg: "Stories page works" });
});

//@route GET api/stories
//@desc fetch stories page
//@access Public

router.get("/image/:id", (req, res) => {
  let fileId = req.params.id;
  gfs.files
    .find({ _id: mongoose.Types.ObjectId(fileId) })
    .toArray((err, files) => {
      const readStream = gfs.createReadStream({
        _id: files[0]._id
      });
      res.set("Content-Type", files[0].contentType);

      return readStream.pipe(res);
    });
});

//@route GET api/stories
//@desc fetch stories page
//@access Public

router.get("/", async (req, res) => {
  Story.find().then(stories => {
    res.json({ stories });
  });
});

module.exports = router;
