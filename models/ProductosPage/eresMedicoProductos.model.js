// models/nuestrasEmpresasComponents/equipoEmpresas.model.js
const { Schema, model} = require('mongoose')

const eresMedicoProductosSchema = new Schema(
  {
    title: {
      type: String,
      required: true
    },
    buttonTitle: {
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

module.exports = model('EresMedicoProductos', eresMedicoProductosSchema)
