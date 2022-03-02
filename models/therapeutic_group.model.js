const {Schema, model} = require('mongoose')


const therapeuticGroupSchema = new Schema(
  {
    tag: {
      type: String,
      required: [true, 'Tag is required'],
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

module.exports = model('TherapeuticGroup', therapeuticGroupSchema)