const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema

const Lv1StorySchema = new Schema({
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
  createdDate: { type: Date, default: Date.now }
});

module.exports = Lv1Story = mongoose.model("lv1story", Lv1StorySchema);
