// models/aboutUs.model.js
const {Schema, model} = require('mongoose')
const medicalSpecialities = require('../data/medicalSpecialities')

const aboutUsSchema = new Schema(
  {
    developingSolutionsTitle: {
      type: String,
      required: true
    },
    hero: {
      type: String,
      required: true
    },
    contentWithSecondImg: {
      type: String,
      required: true
    },
    secondImg: {
      type: String,
      required: true
    },
    secondSliderTitle: {
      type: String,
       required: true
    },
    letiLabLatamTitle: {
      type: String,
      required: true
    },
    megatLogo: {
      type: String,
      required: true
    },
    megatDescription: {
      type: String,
      required: true
    },
    megatButtonTitle: {
      type: String,
      required: true
    },
  },
  {
    timestamps: true
  }
)

module.exports = model('AboutUs', aboutUsSchema)
