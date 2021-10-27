// models/blog.model.js
const { Schema, model, ObjectId } = require('mongoose')

const blogSchema = new Schema(
  {
    title: {
      type: String
    },
    content: {
      type: String
    },
    authorId: {
      type: ObjectId,
      ref: 'User'
    },
    picPath: {
      type: String
    },
    tags: {
      type: [String],
      require: true
    }
  },
  {
    timestamps: true
  }
)

module.exports = model('Blog', blogSchema)
