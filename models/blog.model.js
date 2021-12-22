const {Schema, model} = require('mongoose')


const blogSchema = new Schema(
  {
    title: {
      type: String,
    },
    subTitle: {
      type: String,
    },
    urlToPic: {
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

module.exports = model('Blog', blogSchema)