const express = require("express");
const router = express.Router();

//@route GET api/users/test
//@desc test users page
//@access Public

router.get("/", (req, res) => {
  res.json({ msg: "users works" });
});

module.exports = router;
