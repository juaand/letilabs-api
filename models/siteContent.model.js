const {Schema, model} = require('mongoose')


const siteContentSchema = new Schema(
  {
    name: {
      type: String,
    },
    url: {
      type: String,
    },
    content: {
      type: String,
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

module.exports = model('SiteContent', siteContentSchema)