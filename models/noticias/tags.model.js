const {Schema, model} = require('mongoose')


const tagsSchema = new Schema(
  {
    tag: {
      type: String,
      required: [true, 'Tag is required'],
    },
    tag_eng: {
      type: String,
      required: [true, 'Tag eng is required'],
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

module.exports = model('Tags', tagsSchema)