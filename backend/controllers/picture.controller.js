const imageModel = require("../models/image.model");

module.exports.addPictures = async (req, res) => {
  const newPicture = new imageModel({
    posterId: req.body.posterId,
    category: req.body.category,
    picture: req.file.filename,
  });

  try {
    const picture = await newPicture.save();
    return res.status(201).json(picture);
  } catch (err) {
    return res.status(400).send(err);
  }
};

module.exports.getPictures = async (req, res) => {
  const images = await imageModel.find();
  res.status(200).json(images);
};

module.exports.deletePictures = async (req, res) => {
  const {
    id
  } = req.params;
  try {
    await imageModel.findByIdAndDelete(id);
    res.status(200).json({
      message: "Image supprimée",
    });
  } catch (err) {
    console.log(err);
  }
};