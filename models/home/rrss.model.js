// models/rrss.model.js
const {Schema, model} = require('mongoose')

const rrssSchema = new Schema(
  {
    facebook: {
      type: String,
      required: true
    },
    linkedin: {
      type: String,
      required: true
    },
    instagram: {
      type: String,
      required: true
    },
  },
  {timestamps: true}
)

module.exports = model('Rrss', rrssSchema)