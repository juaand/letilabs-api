// models/spot.model.js
const {Schema, model, ObjectId} = require('mongoose')
const categories = require('../data/categories')

const EMAIL_PATTERN = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i

const spotSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    content: {
      type: String
    },
    creatorId: {
      type: ObjectId,
      ref: 'User',
      required: true
    },
    pictures: {
      type: [String],
      default: []
    },
    url: {
      type: String
    },
    category: {
      type: [String],
      enum: categories.map((c) => c.id),
      default: []
    },
    lat: {
      type: Number
    },
    lng: {
      type: Number
    },
    rate: {
      type: [Number],
      default: [0]
    },
    phone: {
      type: String
    },
    city: {
      type: String
    },
    address: {
      type: String
    },
    zipCode: {
      type: String
    },
    days: {
      type: [String],
      enum: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      default: []
    },
    email: {
      type: String,
      trim: true,
      lowercase: true
    },
    instagram: {
      type: String
    },
    facebook: {
      type: String
    },
    open: {
      type: [Number],
      default: [0]
    },
    close: {
      type: [Number],
      default: [0]
    }
  },
  {
    timestamps: true
  }
)

spotSchema.virtual('comments', {
  ref: 'Comment',
  localField: '_id',
  foreignField: 'spotId',
  justOne: false,
  options: {sort: {createdAt: -1}}
})

spotSchema.virtual('likes', {
  ref: 'Like',
  localField: '_id',
  foreignField: 'spot',
  justOne: false,
  options: {sort: {createdAt: -1}}
})

module.exports = model('Spot', spotSchema)
