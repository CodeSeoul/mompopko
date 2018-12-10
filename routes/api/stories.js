const express = require("express");
const router = express.Router();
const Lv1Story = require("../../models/Lv1Story");
const Lv2Story = require("../../models/Lv2Story");
const Lv3Story = require("../../models/Lv3Story");

//@route GET api/stories/test
//@desc test stories page
//@access Public

router.get("/test", (req, res) => {
  res.json({ msg: "Stories page works" });
});

//@route POST api/stories/lv1/register
//@desc register lv1 story
//@access Private

router.post("/lv1/register", (req, res) => {
  Lv1Story.findOne({ name: req.body.business.name })
    .then(story => {
      if (story) {
        return res.status(400).json({ story: "The business already exists" });
      } else {
        const newLv1Story = new Lv1Story({
          category: req.body.business.category,
          name: req.body.business.name,
          newAddress: req.body.business.newAddress,
          oldAddress: req.body.business.oldAddress,
          telephone: req.body.business.telephone,
          openingDate: req.body.business.openingDate,
          newZipcode: req.body.business.newZipcode,
          oldZipcode: req.body.business.oldZipcode,
          type: req.body.business.type
        });
        newLv1Story
          .save()
          .then(lv1Story => res.json(lv1Story))
          .catch(err => console.log(err));
      }
    })
    .catch(err => console.log(err));
});

// //@route POST api/stories/lv2/register
// //@desc register lv2 story
// //@access Private

// router.post("/lv2/register", (req, res) => {
//   Lv2Story.findOne({ "business.name": req.body.business.name });
// });

// //@route POST api/stories/lv3/register
// //@desc register lv3 story
// //@access Private

// router.post("/lv3/register", (req, res) => {
//   Lv3Story.findOne({ "business.name": req.body.business.name });
// });

module.exports = router;
