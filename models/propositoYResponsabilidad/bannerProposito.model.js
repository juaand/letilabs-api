// models/nuestrasEmpresasComponents/bannerProposito.model.js
const { Schema, model} = require('mongoose')

const bannerPropositoSchema = new Schema(
  {
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
