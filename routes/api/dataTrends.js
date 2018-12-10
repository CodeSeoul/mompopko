const express = require("express");
const router = express.Router();

//@route GET api/dataTrends/test
//@desc test data trends page
//@access Public

router.get("/", (req, res) => {
  res.json({ msg: "Data trends page works" });
});

module.exports = router;
