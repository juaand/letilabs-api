// models/carrouselHome.model.js
const { Schema, model } = require('mongoose')

const carrouselHomeSchema = new Schema(
  {
    title: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    img: {
      type: String,
      required: true
    },
    desc: {
      type: String,
      required: true
    },
  },
  { timestamps: true }
)

module.exports = model('CarrouselHome', carrouselHomeSchema)
