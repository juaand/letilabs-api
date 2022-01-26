// models/nuestrasEmpresasComponents/manufacturaCarrousel.model.js
const { Schema, model} = require('mongoose')

const manufacturaCarrouselSchema = new Schema(
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

module.exports = model('ManufacturaCarrousel', manufacturaCarrouselSchema)
