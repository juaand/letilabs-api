// models/like.model.js
const { Schema, model, ObjectId } = require('mongoose')

const socialMediaFooterSchema = new Schema(
  {
    socialMediaName: {
      type: String,
      required: true
    },
    socialUrl: {
      type: String,
      required: true
    },
    socialLogo: {
      type: String,
      required: true
    },
  },
  { timestamps: true }
)

module.exports = model('SocialMediaFooter', socialMediaFooterSchema)
