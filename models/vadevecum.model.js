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
      default: 'https://firebasestorage.googleapis.com/v0/b/grupo-leti-fd84e.appspot.com/o/images%2Fbarcode.gif?alt=media&token=8610de5b-edbf-4db1-b591-2e6a20111363'
    },
    util_life: {
      type: String,
      default: 'Sin información de vida útil de este medicamento.'
    },
    cpe: {
      type: String,
      default: 'Sin información del CPE de este medicamento.'
    },
    how_to_use: {
      type: String,
      default: '- Sin información del uso de este medicamento.'
    },
    contraindications: {
      type: String,
      default: '- Sin información de las contraindicaciones de este medicamento.'
    },
    adverse_reactions: {
      type: String,
      default: '- Sin información de las reacciones adversas de este medicamento.'
    }
  },
  {timestamps: true}
)

module.exports = model('Vadevecum', vadevecumSchema)