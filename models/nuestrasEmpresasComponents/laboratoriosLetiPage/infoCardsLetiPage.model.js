// models/nuestrasEmpresasComponents/bannerEmpresas.model.js
const { Schema, model} = require('mongoose')

const infoCardsLetiPageSchema = new Schema(
  {
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

module.exports = model('InfoCardsLetiPage', infoCardsLetiPageSchema)
