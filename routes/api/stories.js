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

router.get("/", (req, res) => {
  Story.find().then(storiesData => {
    storiesData.map(storyData => {
      console.log(storyData.image, "story image");
      gfs.files
        .find({ _id: { $in: storyData.image } })
        .toArray((err, files) => {
          console.log(files);
          files.map(file => {
            var readstream = gfs.createReadStream({
              id: file._id
            });
            readstream.pipe(res);
          });
        });
    });
  });
});

module.exports = router;
