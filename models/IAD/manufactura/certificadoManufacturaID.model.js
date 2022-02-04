// models/nuestrasEmpresasComponents/videoTecnologiaEmpresas.model.js
const { Schema, model} = require('mongoose')

const certificadoManufacturaIDSchema = new Schema(
  {
    title: {
      type: String,
      required: true
    },
    desc: {
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

module.exports = model('CertificadoManufacturaID', certificadoManufacturaIDSchema)
