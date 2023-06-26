const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema(
  {
    posterId: {
      type: String,
      required: true,
    },
    category: {
      type: String,
    },
    picture: {
      type: String,
    }
  },
  {
     timestamps: true 
  }
);

const ImageModel = mongoose.model("image", imageSchema);
module.exports = ImageModel;