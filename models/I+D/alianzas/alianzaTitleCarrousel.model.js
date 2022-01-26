// models/nuestrasEmpresasComponents/manufacturaCarrousel.model.js
const { Schema, model} = require('mongoose')

const alianzaTitleCarrouselSchema = new Schema(
  {
    title: {
      type: String,
      required: true
    },
  },
  { timestamps: true }
)

module.exports = model('AlianzaTitleCarrousel', alianzaTitleCarrouselSchema)
