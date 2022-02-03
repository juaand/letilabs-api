// models/nuestrasEmpresasComponents/bannerManufacturaEmpresas.model.js
const { Schema, model} = require('mongoose')

const bannerAlianzasIDSchema = new Schema(
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

module.exports = model('BannerAlianzasID', bannerAlianzasIDSchema)
