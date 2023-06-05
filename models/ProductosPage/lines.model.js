const {Schema, model} = require('mongoose')


const linesSchema = new Schema(
  {
    line: {
      type: String,
      required: [true, 'Line is required'],
    },
    line_eng: {
      type: String,
      required: [true, 'Line eng is required'],
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

module.exports = model('Lines', linesSchema)