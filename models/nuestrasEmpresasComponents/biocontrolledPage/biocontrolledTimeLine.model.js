// models/nuestrasEmpresasComponents/biocontrolledTimeLine.model.js
const { Schema, model} = require('mongoose')

const biocontrolledTimeLineSchema = new Schema(
  {
    imgURL: {
      type: String,
      required: true
    },
    desc: {
      type: String,
      required: true
    },
    buttonTitle: {
      type: String,
    },
    buttonLink: {
      type: String,
    },
  },
  { timestamps: true }
)

module.exports = model('BiocontrolledTimeLine', biocontrolledTimeLineSchema)
