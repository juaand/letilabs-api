// models/like.model.js
const { Schema, model, ObjectId } = require('mongoose')

const bussinesUnitSchema = new Schema(
  {
    bussinesTitle: {
      type: String,
      required: true
    },
    bussinesImg: {
      type: String,
      required: true
    },
    bussinesDescription: {
      type: String,
      required: true
    },
  },
  { timestamps: true }
)

module.exports = model('BussinesUnit', bussinesUnitSchema)
