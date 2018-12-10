const express = require("express");
const router = express.Router();

//@route GET api/about/test
//@desc test about page
//@access Public

router.get("/", (req, res) => {
  res.json({ msg: "About page works" });
});

module.exports = router;
