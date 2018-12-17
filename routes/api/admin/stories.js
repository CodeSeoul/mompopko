const express = require("express");
const router = express.Router();
const Story = require("../../../models/Story");
const passport = require("passport");

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
    if (typeof req.body.business.images !== "undefined") {
      storyFields.business.images = req.body.business.images;
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
