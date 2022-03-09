const {Schema, model} = require('mongoose')


const seoSchema = new Schema(
  {
    keywords: {
      type: [String],
      required: [true, 'Las palabras clave son requeridas'],
      trim: true,
      maxlength: [200, 'El máximo de caracteres es 200']
    },
    page: {
      type: String,
      required: [true, 'La página es requerida'],
      trim: true,
      maxlength: [40, 'El máximo de caracteres es 40']
    },
    description: {
      type: String,
      required: [true, 'La descripción es requerida'],
      trim: true,
      maxlength: [400, 'El máximo de caracteres es 400']
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