const {Schema, model} = require('mongoose')


const newsTitleSchema = new Schema(
  {
    lastestTitle: {
      type: String,
      required: [true, 'Title is required'],
    },
    mostTitle: {
      type: String,
      required: [true, 'mostTitle is required'],
    },
    searchTitle: {
      type: String,
      required: [true, 'searchTitle is required'],
    },
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

module.exports = model('NewsTitle', newsTitleSchema)