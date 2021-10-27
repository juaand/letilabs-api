// controllers/comment.controllers.js

const User = require('../models/user.model')
const Comment = require('../models/comment.model')
const Spot = require('../models/spot.model')
const Pet = require('../models/pet.model')

module.exports.postsReview = async (req, res, next) => {
  const {data} = req.body

  console.log(data.rate)

  Comment.create({
    content: data.review,
    authorId: data.userId,
    spotId: data.spotId
  }, {new: true})

  const setSpotRate = await Spot.findByIdAndUpdate(data.spotId, {
    $push: {
      rate: data.rate
    }
  }, {new: true})

  const setComments = await Comment.find({spotId: data.spotId}).populate('authorId')

  Promise.all([setSpotRate, setComments])
    .then(spotInfo => {
      res.status(201).json(spotInfo)
    })
    .catch(next)
}

module.exports.deleteComment = (req, res, next) => {
  const {comentInfo} = req.body

  Comment.findByIdAndDelete(comentInfo.commentId)
    .then(() => {
      Comment.find({spotId: comentInfo.spotId}).populate('authorId')
        .then(spotInfo => {
          res.status(201).json(spotInfo)
        })
        .catch(next)

    })
    .catch(next)
}
