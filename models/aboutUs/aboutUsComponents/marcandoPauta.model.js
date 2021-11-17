// models/marcandoPauta.model.js
const { Schema, model} = require('mongoose')

const marcandoPautaSchema = new Schema(
  {
    description: {
      type: String,
      required: true
    },
    imgURL: {
      type: String,
      required: true
    },
  },
  { timestamps: true }
)

module.exports = model('MarcandoPauta', marcandoPautaSchema)
