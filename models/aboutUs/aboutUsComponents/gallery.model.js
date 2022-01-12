// models/gallery.model.js
const { Schema, model} = require('mongoose')

const gallerySchema = new Schema(
  {
    mainTitle: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    desc: {
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

module.exports = model('Gallery', gallerySchema)
