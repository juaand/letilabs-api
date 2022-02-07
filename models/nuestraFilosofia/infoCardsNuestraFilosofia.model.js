// models/nuestrasEmpresasComponents/bannerEmpresas.model.js
const { Schema, model} = require('mongoose')

const infoCardsNuestraFilosofiaSchema = new Schema(
  {
    picPath: {
      type: String,
      default: 'https://firebasestorage.googleapis.com/v0/b/grupo-leti-fd84e.appspot.com/o/images%2Fno-image.png?alt=media&token=73bf7cd8-629d-4deb-b281-9e629fbfb752',
    },
    title: {
      type: String,
      required: true
    },
  },
  { timestamps: true }
)

module.exports = model('InfoCardsNuestraFilosofia', infoCardsNuestraFilosofiaSchema)
