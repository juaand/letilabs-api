// models/vadevecum.model.js
const {Schema, model} = require('mongoose')

const vadevecumSchema = new Schema(
  {
    line: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    active_principle: {
      type: String,
      required: true
    },
    composition: {
      type: String,
      required: true
    },
    indication: {
      type: String,
      required: true
    },
    posology: {
      type: String,
      required: true
    },
    presentation: {
      type: String,
      required: true
    },
    health_register: {
      type: String,
      required: true
    },
    therapeutic_group: {
      type: [String],
      required: true
    },
    category: {
      type: String,
    },
    tv_spot: {
      type: [String],
    },
    trademarks: {
      type: String,
    },
    show_in_home: {
      type: Boolean,
      default: false
    },
    picPath: {
      type: String,
      default: 'https://firebasestorage.googleapis.com/v0/b/grupo-leti-fd84e.appspot.com/o/images%2Fno-image.png?alt=media&token=73bf7cd8-629d-4deb-b281-9e629fbfb752'
    },
    QRpath: {
      type: String,
      default: 'https://firebasestorage.googleapis.com/v0/b/grupo-leti-fd84e.appspot.com/o/images%2Fqrcode.png?alt=media&token=197cc426-93ad-4cec-afbf-85315b6fe5e1'
    }
  },
  {timestamps: true}
)

module.exports = model('Vadevecum', vadevecumSchema)