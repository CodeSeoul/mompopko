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
  Lv1Story.findOne({ name: req.body.name });
});

//@route POST api/stories/lv2/register
//@desc register lv2 story
//@access Private

router.post("/lv2/register", (req, res) => {
  Lv2Story.findOne({ name: req.body.name });
});

//@route POST api/stories/lv3/register
//@desc register lv3 story
//@access Private

router.post("/lv3/register", (req, res) => {
  Lv3Story.findOne({ name: req.body.name });
});

module.exports = router;
