// models/nuestrasEmpresasComponents/manufacturaCarrousel.model.js
const { Schema, model} = require('mongoose')

const alianzaLogosCarrouselSchema = new Schema(
  {
    title: {
      type: String,
      required: true
    },
    picPath: {
      type: String,
      default: 'https://firebasestorage.googleapis.com/v0/b/grupoleti.appspot.com/o/images%2Flogo-aliado.png?alt=media&token=543fb636-d6ec-4267-975e-4e6c5edd9031',
      required: true
    }
  },
  { timestamps: true }
)

module.exports = model('AlianzaLogosCarrousel', alianzaLogosCarrouselSchema)
