// models/nuestrasEmpresasComponents/videoTecnologiaEmpresas.model.js
const { Schema, model} = require('mongoose')

const contribucionAlianzasIDSchema = new Schema(
  {
    title: {
      type: String,
      required: true
    },
    desc: {
      type: String,
      required: true
    },   
    phone: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
  },
  { timestamps: true }
)

module.exports = model('ContribucionAlianzasID', contribucionAlianzasIDSchema)
