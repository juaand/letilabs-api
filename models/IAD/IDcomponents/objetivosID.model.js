// models/nuestrasEmpresasComponents/letiTimeLine.model.js
const {Schema, model} = require('mongoose')

const objetivosSchema = new Schema(
  {
    title: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    desc: {
      type: String,
      required: true
    }
  },
  {timestamps: true}
)

module.exports = model('Objetivos', objetivosSchema)
