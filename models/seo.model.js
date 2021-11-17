const {Schema, model} = require('mongoose')


const seoSchema = new Schema(
  {
    title: {
      type: String,
      required: true
    },
    content: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
      transform: (doc, ret) => {
        ret.id = doc._id
        delete ret._id
        delete ret.__v
        delete ret.updatedAt
        return ret
      }
    }
  }
)

module.exports = model('Seo', seoSchema)