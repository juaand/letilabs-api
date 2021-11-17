// models/banner.model.js
const { Schema, model} = require('mongoose')

const bannerSchema = new Schema(
  {
    description: {
      type: String,
      required: true
    },
    imgURL: {
      type: String,
      required: true
    },
  },
  { timestamps: true }
)

module.exports = model('Banner', bannerSchema)
