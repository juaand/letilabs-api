// controllers/therapeuticarea.controllers.js

const BannerTA = require('../models/home/homeComponents/areasterapeuticas/bannerAT.model')
const CarrouselTA = require('../models/home/homeComponents/areasterapeuticas/timeLineAT.model')
const BottomTA = require('../models/home/homeComponents/areasterapeuticas/bottomCtaAT.model')

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