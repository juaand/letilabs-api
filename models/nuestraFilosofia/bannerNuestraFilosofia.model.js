// models/nuestrasEmpresasComponents/bannerTecnologiaEmpresas.model.js
const { Schema, model} = require('mongoose')

const bannerNuestraFilosofiaSchema = new Schema(
  {
    title: {
      type: String,
      required: true
    },
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

module.exports = model('BannerNuestraFilosofia', bannerNuestraFilosofiaSchema)
