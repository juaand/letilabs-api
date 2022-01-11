// models/nuestrasEmpresasComponents/unidadesNegocioEmpresas.model.js
const { Schema, model } = require('mongoose')

const unidadesNegocioEmpresasSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    logo: {
      type: String,
      required: true
    },
    url: {
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

module.exports = model('UnidadesNegocioEmpresas', unidadesNegocioEmpresasSchema)