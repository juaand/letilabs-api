// models/spot.model.js
const {Schema, model} = require('mongoose')

const footerSchema = new Schema(
  {
    letiLogo: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    phoneNumber: {
      type: String,
      required: true
    },
    copyrightText: {
      type: String,
      required: true
    },
  },
  {
    timestamps: true
  }
)

module.exports = model('Footer', footerSchema)
