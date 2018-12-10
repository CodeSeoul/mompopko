const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({ msg: "Stories page works" });
});

module.exports = router;
