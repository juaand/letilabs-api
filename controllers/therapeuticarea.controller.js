// controllers/therapeuticarea.controllers.js

const BannerTA = require('../models/home/areasterapeuticas/bannerAT.model')
const CarrouselTA = require('../models/home/areasterapeuticas/timeLineAT.model')
const BottomTA = require('../models/home/areasterapeuticas/bottomCtaAT.model')

//admin therapeutic area routes
module.exports.getBannerTA = (req, res, next) => {
  BannerTA.find()
    .then((data) => {
      res.status(201).json(data[0])
    })
    .catch(next)
}

module.exports.getCarrouselTA = (req, res, next) => {
  CarrouselTA.find()
    .then((data) => {
      res.status(201).json(data)
    })
    .catch(next)
}

module.exports.getBottomTA = (req, res, next) => {
  BottomTA.find()
    .then((data) => {
      res.status(201).json(data)
    })
    .catch(next)
}