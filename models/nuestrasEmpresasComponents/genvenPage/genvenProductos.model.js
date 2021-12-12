// models/nuestrasEmpresasComponents/biocontrolledCarrousel.model.js
const { Schema, model} = require('mongoose')

const genvenProductosSchema = new Schema(
  {
    description: {
      type: String,
      required: true
    },
    buttonTitle: {
      type: String,
      required: true
    },
    buttonLink: {
      type: String,
      required: true
    },
    img1URL: {
      type: String,
      required: true
    },
    img2URL: {
      type: String,
      required: true
    },
    img3URL: {
      type: String,
      required: true
    },
  },
  { timestamps: true }
)

module.exports = model('GenvenProductos', genvenProductosSchema)
