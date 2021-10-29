// models/like.model.js
const { Schema, model, ObjectId } = require('mongoose')

const portfolioTypeHomeSchema = new Schema(
  {
    typeTitle: {
      type: String,
      required: true
    },
    typeDescription: {
      type: String,
      required: true
    },
  },
  { timestamps: true }
)

module.exports = model('portfolioTypeHome', portfolioTypeHomeSchema)
