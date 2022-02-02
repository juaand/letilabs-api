// models/nuestrasEmpresasComponents/bannerEmpresas.model.js
const { Schema, model} = require('mongoose')

const innovarEmpresasSchema = new Schema(
  {
    description: {
      type: String,
      required: true
    },
  },
  { timestamps: true }
)

module.exports = model('InnovarEmpresas', innovarEmpresasSchema)
