// models/usInfo.model.js
const { Schema, model } = require('mongoose')

const usInfoSchema = new Schema(
  {
    description: {
      type: String,
      required: true
    },
    url: {
      type: String,
      required: true
    },
    buttonTitle: {
      type: String,
      required: true
    },
  },
  { timestamps: true }
)

module.exports = model('UsInfo', usInfoSchema)