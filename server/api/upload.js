const cloudinary = require("cloudinary").v2;
const { Readable } = require("stream");
const multer = require("multer");
const multerSingle = multer();
const router = require("express").Router();

console.log(process.env.REACT_APP_CLOUDINARY_API_KEY);

cloudinary.config({
  cloud_name: process.env.REACT_APP_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.REACT_APP_CLOUDINARY_API_KEY,
  api_secret: process.env.REACT_APP_CLOUDINARY_API_SECRET,
});

const bufferUpload = async (buffer) => {
  return new Promise((resolve, reject) => {
    const writeStream = cloudinary.uploader.upload_stream((err, result) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(result);
    });
    const readStream = new Readable({
      read() {
        this.push(buffer);
        this.push(null);
      },
    });
    readStream.pipe(writeStream);
  });
};

const uploadImage = async (req, res) => {
  const { buffer } = req.file;
  try {
    const { secure_url } = await bufferUpload(buffer);

    res.status(200).json({ url: secure_url });
  } catch (error) {
    res.status(500).send("Something went wrong, please try again later.");
  }
};

router.post("/", multerSingle.single("image"), uploadImage);
module.exports = router;
