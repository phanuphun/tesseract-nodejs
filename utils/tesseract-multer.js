const multer = require('multer');
const path = require('path');


const storage = multer.memoryStorage()

const fileFilter = (req, file, cb) => {
  const allowed = ['.jpg', '.jpeg', '.png'];
  const ext = path.extname(file.originalname).toLowerCase();
  if (!allowed.includes(ext)) {
    return cb(new Error('Only .jpg, .jpeg, .png are allowed'), false);
  }
  cb(null, true);
};

const tesseractUpload = multer({
  storage: storage,
  fileFilter: fileFilter,
  limits: {
    fileSize: 1024 * 1024 * 5
  }
});

module.exports = tesseractUpload;