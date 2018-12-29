const express = require("express");
const router = express.Router();
const Story = require("../../../models/Story");
const passport = require("passport");
const mongoose = require("mongoose");
const multer = require("multer");
const GridFsStorage = require("multer-gridfs-storage");
const Grid = require("gridfs-stream");
const keys = require("../../../config/keys");

let gfs;
const conn = mongoose.connection;
conn.once("open", () => {
  gfs = Grid(conn.db, mongoose.mongo);
  gfs.collection("stories");
});

const storage = new GridFsStorage({
  url: keys.mongoURI,
  file: (req, file) => {
    return {
      filename: file.originalname,
      bucketName: "images"
    };
  }
});
const upload = multer({ storage });

//@route GET api/stories/test
//@desc test stories page
//@access Public

router.get("/test", (req, res) => {
  res.json({ msg: "Stories page works" });
});

//@route POST api/stories/upload
//@desc upload test files
//@access Private

router.post("/upload", upload.array("images"), (req, res) => {
  res.json({ file: req.files });
});

//@route POST api/stories/
//@desc create or update a single story
//@access Private

router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  upload.array("images"),
  (req, res) => {
    let storyFields = {};

    console.log(req);

    let storyData = JSON.parse(req.body.story);

    console.log(storyData);

    if (storyData.level) storyFields.level = storyData.level;

    storyFields.business = {};

    if (storyData.category) storyFields.business.category = storyData.category;
    if (storyData.businessName)
      storyFields.business.name = storyData.businessName;
    if (storyData.newAddress)
      storyFields.business.newAddress = storyData.newAddress;
    if (storyData.oldAddress)
      storyFields.business.oldAddress = storyData.oldAddress;
    if (storyData.telephone)
      storyFields.business.telephone = storyData.telephone;
    if (storyData.openingDate)
      storyFields.business.openingDate = storyData.openingDate;
    if (storyData.newZipcode)
      storyFields.business.newZipcode = storyData.newZipcode;
    if (storyData.oldZipcode)
      storyFields.business.oldZipcode = storyData.oldZipcode;
    if (storyData.type) storyFields.business.type = storyData.type;
    storyFields.business.channels = {};
    if (storyData.channels.facebook)
      storyFields.business.channels.facebook = storyData.channels.facebook;
    if (storyData.channels.instagram)
      storyFields.business.channels.instagram = storyData.channels.instagram;
    if (storyData.channels.youtube)
      storyFields.business.channels.youtube = storyData.channels.youtube;
    if (storyData.channels.website)
      storyFields.business.channels.website = storyData.channels.website;

    if (req.body.createdDate) storyFields.createdDate = req.body.createdDate;

    if (typeof req.files !== "undefined") {
      storyFields.image = [];
      req.files.map(file => {
        storyFields.image.push(file.id);
      });
    }

    storyFields.owner = {};

    if (storyData.ownerName) storyFields.owner.name = storyData.ownerName;
    if (storyData.interview) storyFields.owner.interview = storyData.interview;

    Story.findOne({ "business.name": storyData.businessName }).then(story => {
      if (story) {
        //update
        Story.findOneAndUpdate(
          {
            "business.name": storyData.businessName
          },
          { $set: storyFields },
          { new: true }
        ).then(story => {
          res.json(story);
        });
      } else {
        //create
        new Story(storyFields).save().then(story => res.json(story));
      }
    });
  }
);

module.exports = router;
