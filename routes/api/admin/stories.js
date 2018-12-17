const express = require("express");
const router = express.Router();
const Story = require("../../../models/Story");
const passport = require("passport");
const path = require("path");
const mongoose = require("mongoose");
const multer = require("multer");
const GridFsStorage = require("multer-gridfs-storage");
const Grid = require("gridfs-stream");
const keys = require("../../../config/keys");
const crypto = require("crypto");

let gfs;
const conn = mongoose.connection;
conn.once("open", () => {
  gfs = Grid(conn.db, mongoose.mongo);
  gfs.collection("stories");
});

const storage = new GridFsStorage({
  url: keys.mongoURI,
  file: (req, file) => {
    return new Promise((resolve, reject) => {
      crypto.randomBytes(16, (err, buf) => {
        if (err) {
          return reject(err);
        }
        const fileName = buf.toString("hex") + path.extname(file.originalname);
        const fileInfo = {
          fileName: fileName,
          bucketName: "stories"
        };
        resolve(fileInfo);
      });
    });
  }
});
const upload = multer({ storage });

//@route GET api/stories/test
//@desc test stories page
//@access Public

router.post("/upload", upload.array("file"), (req, res) => {
  res.json({ file: req.files });
});

//@route GET api/stories/test
//@desc test stories page
//@access Public

router.get("/test", (req, res) => {
  res.json({ msg: "Stories page works" });
});

//@route POST api/stories/lv1/register
//@desc create or update a single story
//@access Private

router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  upload.array("file"),
  (req, res) => {
    const storyFields = {};

    if (req.body.level) storyFields.level = req.body.level;

    storyFields.business = {};

    if (req.body.business.category)
      storyFields.business.category = req.body.business.category;
    if (req.body.business.name)
      storyFields.business.name = req.body.business.name;
    if (req.body.business.newAddress)
      storyFields.business.newAddress = req.body.business.newAddress;
    if (req.body.business.oldAddress)
      storyFields.business.oldAddress = req.body.business.oldAddress;
    if (req.body.business.telephone)
      storyFields.business.telephone = req.body.business.telephone;
    if (req.body.business.openingDate)
      storyFields.business.openingDate = req.body.business.openingDate;
    if (req.body.business.newZipcode)
      storyFields.business.newZipcode = req.body.business.newZipcode;
    if (req.body.business.oldZipcode)
      storyFields.business.oldZipcode = req.body.business.oldZipcode;
    if (req.body.business.type)
      storyFields.business.type = req.body.business.type;
    storyFields.business.channels = {};
    if (req.body.business.channels.facebook)
      storyFields.business.channels.facebook =
        req.body.business.channels.facebook;
    if (req.body.business.channels.instagram)
      storyFields.business.channels.instagram =
        req.body.business.channels.instagram;
    if (req.body.business.channels.youtube)
      storyFields.business.channels.youtube =
        req.body.business.channels.youtube;
    if (req.body.business.channels.website)
      storyFields.business.channels.website =
        req.body.business.channels.website;
    if (typeof req.body.files !== "undefined") {
      storyFields.business.images = req.body.files.file;
    }

    if (req.body.createdDate) storyFields.createdDate = req.body.createdDate;

    storyFields.owner = {};

    if (req.body.owner.name) storyFields.owner.name = req.body.owner.name;
    if (req.body.owner.interview)
      storyFields.owner.interview = req.body.owner.interview;
    if (req.body.owner.images) storyFields.owner.images = req.body.owner.images;
    if (typeof req.body.owner.images !== "undefined") {
      storyFields.owner.images = req.body.owner.images;
    }
    Story.findOne({ "business.name": req.body.business.name }).then(story => {
      if (story) {
        //update
        Story.findOneAndUpdate(
          {
            "business.name": req.body.business.name
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
