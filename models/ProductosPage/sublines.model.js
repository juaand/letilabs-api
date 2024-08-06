const {Schema, model} = require('mongoose')


const linesSchema = new Schema(
  {
    subLine: {
      type: String,
    },
    subLine_eng: {
      type: String,
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

module.exports = model('SubLines', linesSchema)