// models/spot.model.js
const {Schema, model, ObjectId} = require('mongoose')

const navbarSchema = new Schema(
  {
    letiLogo: {
      type: String,
      required: true
    },
  },
  {
    timestamps: true
  }
)

module.exports = model('Navbar', navbarSchema)
