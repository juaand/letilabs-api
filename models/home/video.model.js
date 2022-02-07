// models/video.model.js
const { Schema, model } = require('mongoose')

const videoSchema = new Schema(
  {
    url: {
      type: String,
      required: true
    },
  },
  { timestamps: true }
)

module.exports = model('Video', videoSchema)