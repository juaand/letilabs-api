// models/nuestrasEmpresasComponents/equipoEmpresas.model.js
const { Schema, model} = require('mongoose')

const equipoGenvenPageSchema = new Schema(
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
    imgURL: {
      type: String,
      required: true
    },
  },
  { timestamps: true }
)

module.exports = model('EquipoGenvenPage', equipoGenvenPageSchema)
