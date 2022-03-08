// models/rrss.model.js
const {Schema, model} = require('mongoose')

const rrssSchema = new Schema(
  {
    instagram: {
      type: String,
      required: true
    },
    facebook: {
      type: String,
      required: true
    },
    whatsapp: {
      type: String,
      required: true
    },
    linkedin: {
      type: String,
      required: true
    },
  },
  {timestamps: true}
)

module.exports = model('Rrss', rrssSchema)