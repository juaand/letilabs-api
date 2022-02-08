// models/nuestrasEmpresasComponents/bannerEmpresas.model.js
const { Schema, model} = require('mongoose')

const videoGenvenPageSchema = new Schema(
  {
    videoURL: {
      type: String,
      required: true
    },
  },
  { timestamps: true }
)

module.exports = model('VideoGenvenPage', videoGenvenPageSchema)
