// models/nuestrasEmpresasComponents/videoTecnologiaEmpresas.model.js
const { Schema, model} = require('mongoose')

const tresEquiposNuestraGenteSchema = new Schema(
  {
    mainTitle: {
      type: String,
      required: true
    },
    imgURL: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    info: {
      type: String,
      required: true
    },
  },
  { timestamps: true }
)

module.exports = model('TresEquiposNuestraGente', tresEquiposNuestraGenteSchema)
