const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// create Schema

const AdminSchema = new Schema({
  email: {
    type: String,
    required: true
  },

  password: {
    type: String,
    required: true
  },

  date: {
    type: Date,
    default: Date.now()
  }
});

module.exports = Admin = mongoose.model("admin", AdminSchema);
