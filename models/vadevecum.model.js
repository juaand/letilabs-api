// models/vadevecum.model.js
const { Schema, model } = require('mongoose')

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
    }
  },
  { timestamps: true }
)

module.exports = model('Vadevecum', vadevecumSchema)