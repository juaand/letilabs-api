// models/like.model.js
const { Schema, model} = require('mongoose')

const dataGallerySchema = new Schema(
  {
    title: {
      type: String,
      required: true
    },
    imgPath: {
      type: String,
      required: true
    },
  },
  { timestamps: true }
)

module.exports = model('DataGallery', dataGallerySchema)
