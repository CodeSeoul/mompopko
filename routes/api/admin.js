const express = require("express");
const router = express.Router();
const Admin = require("../../models/Admin");
const bcrypt = require("bcryptjs");

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
  Admin.findOne({ email: req.body.email }).then(admin => {
    if (admin) {
      return res.status(404).json({ email: "The email already exists" });
    } else {
      const newAdmin = new Admin({
        email: req.body.email,
        password: req.body.password
      });

      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newAdmin.password, salt, (err, hash) => {
          if (err) throw err;
          newAdmin.password = hash;
          newAdmin
            .save()
            .then(admin => {
              res.json(admin);
            })
            .catch(err => console.log(err));
        });
      });
    }
  });
});

module.exports = router;
