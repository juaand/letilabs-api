// models/portfolio.model.js
const { Schema, model } = require('mongoose')

const portfolioSchema = new Schema(
  {
    superiorTitle: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
  },
  { timestamps: true }
)

module.exports = model('Portfolio', portfolioSchema)
