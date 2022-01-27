// models/nuestrasEmpresasComponents/manufacturaCarrousel.model.js
const { Schema, model} = require('mongoose')

const alianzaLogosCarrouselSchema = new Schema(
  {
    picPath: {
      type: String,
      default: 'https://firebasestorage.googleapis.com/v0/b/grupo-leti-fd84e.appspot.com/o/images%2Flogo-aliado.png?alt=media&token=dbf632e0-e1db-4f35-a828-bdd1c69a93f5',
      required: true
    }
  },
  { timestamps: true }
)

module.exports = model('AlianzaLogosCarrousel', alianzaLogosCarrouselSchema)
