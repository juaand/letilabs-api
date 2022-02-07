// models/nuestrasEmpresasComponents/letiTimeLine.model.js
const {Schema, model} = require('mongoose')

const timeLineATSchema = new Schema(
  {
    mainTitle: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    imgURL: {
      type: String,
      required: true
    },
    desc: {
      type: String,
      required: true
    },
  },
  {timestamps: true}
)

module.exports = model('TimeLineAT', timeLineATSchema)
