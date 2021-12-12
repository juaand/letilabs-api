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
  },
  { timestamps: true }
)

module.exports = model('GenvenTimeLine', genvenTimeLineSchema)
