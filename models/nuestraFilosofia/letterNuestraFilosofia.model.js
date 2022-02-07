// models/nuestrasEmpresasComponents/videoTecnologiaEmpresas.model.js
const {Schema, model} = require('mongoose')

const letterNuestraFilosofiaSchema = new Schema(
  {
    mainTitle: {
      type: String,
      required: true
    },
    imgURL: {
      type: String,
      required: true
    },
    body: {
      type: String,
      required: true
    },
  },
  {timestamps: true}
)

module.exports = model('LetterNuestraFilosofia', letterNuestraFilosofiaSchema)
