// models/nuestrasEmpresasComponents/biocontrolledCarrousel.model.js
const { Schema, model} = require('mongoose')

const biocontrolledCarrouselSchema = new Schema(
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

module.exports = model('BiocontrolledCarrousel', biocontrolledCarrouselSchema)
