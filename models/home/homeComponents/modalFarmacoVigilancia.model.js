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
    },
    blueDescription: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    surname: {
      type: String,
      required: true
    },
    birthday: {
      type: String,
      required: true
    },
    gender: {
      type: String,
      required: true
    },
    medicament: {
      type: String,
      required: true
    },
    prescrit: {
      type: String,
      required: true
    },
    describe: {
      type: String,
      required: true
    },
  },
  { timestamps: true }
)

module.exports = model('ModalFarmacoVigilancia', modalFarmacoVigilanciaSchema)
