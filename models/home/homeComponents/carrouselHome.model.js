// models/like.model.js
const { Schema, model, ObjectId } = require('mongoose')

const carrouselHomeSchema = new Schema(
  {
    medicamentTitle: {
      type: String,
      required: true
    },
    medicamentImg: {
      type: String,
      required: true
    },
    medicamentDescription: {
      type: String,
      required: true
    },
  },
  { timestamps: true }
)

module.exports = model('CarrouselHome', carrouselHomeSchema)
