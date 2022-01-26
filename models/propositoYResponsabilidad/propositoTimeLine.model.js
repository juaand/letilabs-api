// models/nuestrasEmpresasComponents/propositoTimeLine.model.js
const { Schema, model} = require('mongoose')

const propositoTimeLineSchema = new Schema(
  {
    imgURL: {
      type: String,
      required: true
    },
    desc: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
)

module.exports = model('PropositoTimeLine', propositoTimeLineSchema)
