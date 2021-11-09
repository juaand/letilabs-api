// models/spot.model.js
const {Schema, model, ObjectId} = require('mongoose')
const medicalSpecialities = require('../../data/medicalSpecialities')

const EMAIL_PATTERN = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i

const homeSchema = new Schema(
  {
    url: {
      type: String,
      required: true
    },
    video: {
      type: String,
      required: true
    },
    genericContentAboutUs: {
      type: String,
      required: true
    },
    aboutUsButtonTitle: {
      type: String,
      required: true
    },
    carrouselTitle: {
      type: String,
      required: true
    },
    bussinesUnitsTitle: {
      type: String,
       required: true
    },
    portfolio4TypesTitle: {
      type: String,
      required: true
    },
    knowThemallButtonTitle: {
      type: String,
      required: true
    },
    findProductTitle: {
      type: String,
      required: true
    },
    medicalSpecialities: {
      type: [String],
      enum: medicalSpecialities.map((c) => c.id),
      default: []
    },
    farmacología: {
      title: {
        type: String,
        required: true
      },
      question: {
        type: String,
        required: true
      },
      buttonTitle: {
        type: String,
        required: true
      }
    },
  },
  {
    timestamps: true
  }
)

module.exports = model('Home', homeSchema)
