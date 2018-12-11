const express = require("express");
const router = express.Router();

//@route GET api/users/test
//@desc test users page
//@access Public

router.get("/test", (req, res) => {
  res.json({ msg: "admin works" });
});

//@route POST api/admin/register
//@desc admin register page
//@access Public for now

router.post("/register", (req, res) => {
  res.json({ msg: "admin register page" });
});

module.exports = router;
