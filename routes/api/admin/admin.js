const express = require("express");
const router = express.Router();
const Admin = require("../../../models/Admin");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../../config/keys");
const passport = require("passport");
const stories = require("./stories");
const bodyParser = require("body-parser");

router.use("/stories", stories);

// router.use(bodyParser.urlencoded({ extended: false }));
// router.use(bodyParser.json());

//@route GET api/admin/test
//@desc test admin page
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

router.post(
  "/login",
  bodyParser.urlencoded({ extended: false }),
  bodyParser.json(),
  (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    console.log(email, password);

    // Find admin

    Admin.findOne({ email }).then(admin => {
      if (!admin) {
        return res.status(404).json({ email: "Email Not Found" });
      }

      // Check Password

      bcrypt.compare(password, admin.password).then(isMatch => {
        if (isMatch) {
          // Admin Matched

          const payload = { id: admin.id, email: admin.email };

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
  }
);

module.exports = router;
