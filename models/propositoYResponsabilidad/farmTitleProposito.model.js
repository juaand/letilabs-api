// models/propositoyresponsabilidad/farmTitleProposito.model.js
const { Schema, model} = require('mongoose')

const farmTitlePropositoSchema = new Schema(
  {
    title: {
      type: String,
      required: true
    },
  },
  { timestamps: true }
)

module.exports = model('FarmTitleProposito', farmTitlePropositoSchema)
