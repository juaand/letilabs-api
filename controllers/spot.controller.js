const Spot = require('../models/spot.model')
const Comment = require('../models/comment.model')
const Pet = require('../models/pet.model')

module.exports.getLastestSpots = (req, res, next) => {
  Spot.find()
    .sort({createdAt: -1})
    .populate('creatorId')
    .then((lastestSpots => {
      res.status(201).json(lastestSpots)
    }))
    .catch(next)
}

module.exports.getSpotData = (req, res, next) => {
  const {id} = req.body

  const getSpot = Spot.findById(id).populate('creatorId')
  const getSpotComments = Comment.find({spotId: id}).populate('authorId')

  Promise.all([getSpot, getSpotComments])
    .then(spotInfo => {
      res.status(201).json(spotInfo)
    })
    .catch(next)
}

module.exports.createSpot = (req, res, next) => {

  // req.body.fd = req.file ? req.file.filename : 'https://res.cloudinary.com/dutvbml2i/image/upload/v1603784830/victs/foto-perfil.jpg'

  const {data} = req.body

  Spot.create({
    name: data.name,
    creatorId: data.userId,
    url: data.url,
    category: data.categories,
    phone: data.phone,
    city: data.city,
    address: data.address,
    zipCode: data.zipcode,
    days: data.days,
    email: data.email,
    instagram: data.instagram,
    facebook: data.facebook,
    open: data.amHours,
    close: data.pmHours,
    pictures: data.pictures ? data.pictures.map(
      (file) => `${process.env.CLOUDINARY_SECURE}/${file.name}`
    )
      : '',
  })
    .then(spot => {
      res.status(201).json(spot)
    })
    .catch(next)
}