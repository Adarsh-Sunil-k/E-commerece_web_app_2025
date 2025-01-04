import multer from 'multer';

const storage = multer.diskStorage({
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({
  storage: storage,
  // limits: { fileSize: 5 * 1024 * 1024 },  // Limit file size to 5MB
});

export default upload;