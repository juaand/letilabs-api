// models/nuestrasEmpresasComponents/bannerEmpresas.model.js
const {Schema, model} = require('mongoose')

const infoCardsNuestraFilosofiaSchema = new Schema(
  {
    picPath: {
      type: String,
      default: 'https://firebasestorage.googleapis.com/v0/b/grupoleti.appspot.com/o/images%2Fno-image.png?alt=media&token=b95b1265-ca58-4e6d-a5c8-4194203d1cd7',
    },
    title: {
      type: String,
      required: true
    },
  },
  {timestamps: true}
)

module.exports = model('InfoCardsNuestraFilosofia', infoCardsNuestraFilosofiaSchema)
