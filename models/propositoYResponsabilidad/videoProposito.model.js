// models/propositoyresponsabilidad/videoProposito.model.js
const { Schema, model} = require('mongoose')

const videoPropositoSchema = new Schema(
  {
    title: {
      type: String,
      required: true
    },
    videoURL: {
      type: String,
      required: true
    },
  },
  { timestamps: true }
)

module.exports = model('VideoProposito', videoPropositoSchema)
