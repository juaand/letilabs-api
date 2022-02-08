// models/nuestrasEmpresasComponents/genvenTimeLine.model.js
const { Schema, model} = require('mongoose')

const genvenTimeLineSchema = new Schema(
  {
    imgURL: {
      type: String,
      required: true
    },
    desc: {
      type: String,
      required: true
    },
    buttonText: {
      type: String
    },
    buttonLink: {
      type: String
    },
  },
  { timestamps: true }
)

module.exports = model('GenvenTimeLine', genvenTimeLineSchema)
