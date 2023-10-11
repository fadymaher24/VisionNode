const Video = require('../models/Video');
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: 'public/uploads/',
  filename: (req, file, cb) => {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  },
});

exports.upload = multer({ storage });

exports.uploadVideo = async (req, res,next) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }

    const video = new Video({
      title: req.body.title,
      filename: req.file.filename,
    });

    await video.save();
    res.redirect('/');
  } catch (error) {
    res.status(500).send(error.message);
  }
};
