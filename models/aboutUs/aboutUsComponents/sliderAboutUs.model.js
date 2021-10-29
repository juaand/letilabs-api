// models/like.model.js
const { Schema, model, ObjectId } = require('mongoose')

const carrouselHomeSchema = new Schema(
  {
    slideYear: {
      type: Number,
      required: true
    },
    slideImg: {
      type: String,
      required: true
    },
    slideDescription: {
      type: String,
      required: true
    },
  },
  { timestamps: true }
)

module.exports = model('CarrouselHome', carrouselHomeSchema)
