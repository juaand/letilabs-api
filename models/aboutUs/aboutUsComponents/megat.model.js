// models/megat.model.js
const { Schema, model} = require('mongoose')

const megatSchema = new Schema(
  {
    title: {
      type: String,
      required: true
    },
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

module.exports = model('Megat', megatSchema)
