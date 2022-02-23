// models/modalFarmacoVigilancia.model.js
const { Schema, model } = require('mongoose')

const modalFarmacoVigilanciaSchema = new Schema(
  {
    title: {
      type: String,
      required: true
    },
    subTitle: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
)

module.exports = model('ModalFarmacoVigilancia', modalFarmacoVigilanciaSchema)
