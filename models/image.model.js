const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema(
  {
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