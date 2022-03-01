// models/megat.model.js
const {Schema, model} = require('mongoose')

const megatSchema = new Schema(
  {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    url: {
      type: String,
      required: true
    },
    buttonTitle: {
      type: String,
      required: true
    },
    logoURL: {
      type: String,
      required: true,
      default: 'https://firebasestorage.googleapis.com/v0/b/grupo-leti-fd84e.appspot.com/o/images%2Fmegat.svg?alt=media&token=effe1cb4-00ed-4c17-b446-47129e124dfc'
    }
  },
  {timestamps: true}
)

module.exports = model('Megat', megatSchema)
