const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ImageSchema = new Schema({
  lv1Story: [
    {
      images: [
        {
          type: String,
          data: Buffer
        }
      ],
      story: {
        type: Schema.Types.ObjectId,
        ref: "lv1story"
      }
    }
  ],

  lv2Story: [
    {
      images: [
        {
          type: String,
          data: Buffer
        }
      ],
      story: {
        type: Schema.Types.ObjectId,
        ref: "lv2story"
      }
    }
  ],
  lv3Story: [
    {
      images: [
        {
          type: String,
          data: Buffer
        }
      ],
      story: {
        type: Schema.Types.ObjectId,
        ref: "lv3story"
      }
    }
  ]
});

module.exports = Image = mongoose.model("image", ImageSchema);
