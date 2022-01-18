const {Schema, model} = require('mongoose')


const blogSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, 'Title is required'],
    },
    subTitle: {
      type: String,
      required: [true, 'SubTitle is required'],
    },
    urlToPic: {
      type: String,
      required: [true, 'UrlToPic is required'],
    },
    content: {
      type: String,
      required: [true, 'Content is required'],
    },
    outstanding: {
      type: Boolean,
      required: [true, 'Outstanding is required'],
    },
    tag: {
      type: [String],
      required: [true, 'Tag is required'],
    },
    publishDate: {
      type: Date,
      required: [true, 'PublishDate is required'],
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