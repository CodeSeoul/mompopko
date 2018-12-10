const express = require("express");
const mongoose = require("mongoose");

const users = require("./routes/api/users");
const stories = require("./routes/api/stories");
const dataTrends = require("./routes/api/dataTrends");
const about = require("./routes/api/about");

const app = express();

// DB config
const db = require("./config/keys").mongoURI;

// Connect to MongoDB
mongoose
  .connect(db)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

app.get("/", (req, res) => res.send("hello"));

app.use("/api/users", users);
app.use("/api/stories", stories);
app.use("/api/dataTrends", dataTrends);
app.use("/api/about", about);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
