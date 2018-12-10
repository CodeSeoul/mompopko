const mongoose = require("mongooese");
const Schema = mongoose.Schema;

// Create Schema

const Lv3StorySchema = new Schema({
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
    type: { type: String, required: true }
  },

  createdDate: { type: Date, default: Date.now },

  owner: {
    name: { type: String },
    interview: { type: String, required: true }
  }
});

module.exports = Lv3Story = mongoose.model("lv3story", Lv3StorySchema);
