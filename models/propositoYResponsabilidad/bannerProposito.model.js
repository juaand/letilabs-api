// models/nuestrasEmpresasComponents/bannerProposito.model.js
const { Schema, model} = require('mongoose')

const bannerPropositoSchema = new Schema(
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

module.exports = model('BannerProposito', bannerPropositoSchema)
