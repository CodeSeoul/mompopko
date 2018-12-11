const express = require("express");
const router = express.Router();
const Admin = require("../../models/Admin");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
const passport = require("passport");

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

//@route POST "/api/admin/login"
//@desc admin login page
//@access Public

router.post("/login", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  // Find admin

  Admin.findOne({ email }).then(admin => {
    if (!admin) {
      return res.status(404).json({ email: "Email Not Found" });
    }

    // Check Password

    bcrypt.compare(password, admin.password).then(isMatch => {
      if (isMatch) {
        // User Matched

        const payload = { id: user.id, email: user.email };

        // Sign Token

        jwt.sign(
          payload,
          keys.secretOrKey,
          { expiresIn: 3600 },
          (err, token) => {
            res.json({
              success: true,
              token: "Bearer " + token
            });
          }
        );
      } else {
        return res.status(400).json({ password: "Password Incorrect" });
      }
    });
  });
});

module.exports = router;
