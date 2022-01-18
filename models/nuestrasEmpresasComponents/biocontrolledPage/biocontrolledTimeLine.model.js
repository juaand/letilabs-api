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
      required: true
    },
    buttonLink: {
      type: String,
      required: true
    },
  },
  { timestamps: true }
)

module.exports = model('BiocontrolledTimeLine', biocontrolledTimeLineSchema)
