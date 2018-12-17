const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");

const admin = require("./routes/api/admin/admin");
const stories = require("./routes/api/stories");
const dataTrends = require("./routes/api/dataTrends");
const about = require("./routes/api/about");

const app = express();

// Body Parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// DB config
const db = require("./config/keys").mongoURI;

// Connect to MongoDB
mongoose
  .connect(db)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

app.get("/", (req, res) => res.send("hello"));

// Passport Middleware

app.use(passport.initialize());

// Passport Config

require("./config/passport")(passport);

// Use Routes
app.use("/api/admin", admin);
app.use("/api/stories", stories);
app.use("/api/dataTrends", dataTrends);
app.use("/api/about", about);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
