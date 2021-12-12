// models/nuestrasEmpresasComponents/biocontrolledCarrousel.model.js
const { Schema, model} = require('mongoose')

const biocontrolledCarrouselSchema = new Schema(
  {
    info: {
      type: String,
      required: true
    },
  },
  { timestamps: true }
)

module.exports = model('BiocontrolledCarrousel', biocontrolledCarrouselSchema)
