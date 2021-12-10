// models/nuestrasEmpresasComponents/bannerEmpresas.model.js
const { Schema, model} = require('mongoose')

const banner3EmpresasSchema = new Schema(
  {
    description: {
      type: String,
      required: true
    },
    description2: {
      type: String,
      required: true
    },
    imgURL: {
      type: String,
      required: true
    },
    img2URL: {
      type: String,
      required: true
    },
    img3URL: {
      type: String,
      required: true
    },
  },
  { timestamps: true }
)

module.exports = model('Banner3Empresas', banner3EmpresasSchema)
