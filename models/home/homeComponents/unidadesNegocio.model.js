// models/unidadesNegocio.model.js
const { Schema, model } = require('mongoose')

const unidadesNegocioSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    logo: {
      type: String,
      required: true
    },
    desc: {
      type: String,
      required: true
    },
    url: {
      type: String,
      required: true
    },
  },
  { timestamps: true }
)

module.exports = model('UnidadesNegocio', unidadesNegocioSchema)