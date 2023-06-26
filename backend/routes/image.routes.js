const router = require("express").Router();
const pictureController = require("../controllers/picture.controller");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./backend/client/public/uploads/pictures");
  },
  filename: (req, file, cb) => {
    const fileName = req.body.posterId + Date.now() + ".jpg";
    cb(null, fileName);
  },
});

const upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    if (
      file.mimetype === "image/jpg" || file.mimetype === "image/png" || file.mimetype === "image/jpeg"
    ) {
      cb(null, true);
    } else {
      cb(null, false);
      return cb(new Error("Seuls les formats .jpg, .png et .jpeg sont acceptés."));
    }
  },
  limits: {
    fileSize: 1024 * 1024 * 5,
  }
})

router.get("/", pictureController.getPictures);

router.post("/", upload.single("image"), pictureController.addPictures);

router.delete("/delete/:id", pictureController.deletePictures);

module.exports = router;