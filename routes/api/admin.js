const express = require("express");
const router = express.Router();

//@route GET api/users/test
//@desc test users page
//@access Public

router.get("/test", (req, res) => {
  res.json({ msg: "admin works" });
});

module.exports = router;
