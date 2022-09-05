// models/nuestrasEmpresasComponents/bannerEmpresas.model.js
const { Schema, model} = require('mongoose')

const bannerInfoSchema = new Schema(
  {
    backgroundURL: {
      type: String,
      required: true
    },
    item: {
      iconURL: {
        type: String,
        required: true
      },
      number: {
        type: String,
        required: true
      },
      unity: {
        type: String,
      },
      desc: {
        type: String,
        required: true
      }
    },
  },
  { timestamps: true }
)

module.exports = model('BannerInfo', bannerInfoSchema)