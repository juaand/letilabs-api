// models/like.model.js
const { Schema, model, ObjectId } = require('mongoose')

const dataNavSchema = new Schema(
  {
    nav_btn: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    nav_cta: {
      type: String,
      required: true
    },
    nav_path: {
      type: String,
      required: true
    },
    sub_nav: {
      sub_text: {
        type: String,
      },
      subNav_path: {
        type: String,
      }
    },
  },
  { timestamps: true }
)

module.exports = model('DataNav', dataNavSchema)
