// models/like.model.js
const { Schema, model, ObjectId } = require('mongoose')

const bottomCtaNuestraGenteSchema = new Schema(
  {
    title: {
      type: String,
      required: true
    },
    buttonTitle: {
      type: String,
      required: true
    },
    buttonLink: {
      type: String,
      required: true
    },
    img: {
      type: String,
      required: true
    },
  },
  { timestamps: true }
)

module.exports = model('bottomCtaNuestraGente', bottomCtaNuestraGenteSchema)
