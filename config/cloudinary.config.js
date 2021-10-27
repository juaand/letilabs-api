
const cloudinary = require('cloudinary').v2
const cloudinaryStorage = require('multer-storage-cloudinary')
const multer = require('multer')

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET
})

var storage = new cloudinaryStorage({
  cloudinary,
  params: {
    folder: 'mappet',
    allowedFormats: ['jpg', 'png', 'svg']
  }
  ,
  filename: function (req, file, cb) {
    cb(null, file.originalname.split('.').slice(0, -1).join('.')) // The file on cloudinary would have the same name as the original file name
  }
})

const uploadCloud = multer({storage})

module.exports = uploadCloud
