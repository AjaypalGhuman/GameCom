const multer = require('multer');
const path = require('path');

//Upload Image Controller
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'Images');
    },
    filename: (req,file,cb) => {
      cb(null, Date.now() + path.extname(file.originalname));
    }
  })
  
  const upload = multer({
    storage: storage,
    //limits: {fileSize: '10000000'},
    fileFilter: (req,file,cb) => {
      const fileTypes = /jpeg|jpg|png|gif/;
      const mimeType = fileTypes.test(file.mimetype);
      const extname = fileTypes.test(path.extname(file.originalname));
  
      if(mimeType && extname){
        return cb(null, true)
      }
      cb('Upload only image files')
    }
  }).single('image')

  module.exports = upload;