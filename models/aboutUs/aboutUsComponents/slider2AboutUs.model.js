// models/like.model.js
const { Schema, model, ObjectId } = require('mongoose')

const carrouselHomeSchema = new Schema(
  {
    slideTitle: {
      type: Number,
      required: true
    },
    SlideImg: {
      type: String,
      required: true
    },
  },
  { timestamps: true }
)

module.exports = model('CarrouselHome', carrouselHomeSchema)
