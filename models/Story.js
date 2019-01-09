const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema

const StorySchema = new Schema({
  level: { type: Number, required: true },
  business: {
    category: {
      type: String,
      required: true
    },
    name: { type: String, required: true },
    newAddress: { type: String },
    oldAddress: { type: String },
    telephone: { type: String, required: true },
    openingDate: { type: Date },
    newZipcode: { type: String },
    oldZipcode: { type: String },
    type: { type: String, required: true },
    category1: { type: String, required: true },
    category2: { type: String, required: true },
    category3: { type: String, required: true },
    channels: {
      facebook: { type: String },
      instagram: { type: String },
      youtube: { type: String },
      website: { type: String }
    }
  },

  createdDate: { type: Date, default: Date.now },

  image: [],

  owner: {
    name: { type: String },
    interview: { type: String }
  }
});

module.exports = Story = mongoose.model("story", StorySchema);
