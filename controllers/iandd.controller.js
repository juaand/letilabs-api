// controllers/iandd.controllers.js
const AllianceLogos = require('../models/IAD/alianzas/alianzaLogosCarrousel.model')
const AllianceInfoCards = require('../models/IAD/IDcomponents/infoCardsID.model')
const BannerID = require('../models/IAD/IDcomponents/bannerID.model')
const GoalsId = require('../models/IAD/IDcomponents/objetivosID.model')
const BottomId = require('../models/IAD/IDcomponents/bottomCtaID.model')
const BannerTech = require('../models/IAD/tecnologia/bannerTecnologiaID.model')
const VideoTech = require('../models/IAD/tecnologia/videoTecnologiaID.model')
const CarrouselTech = require('../models/IAD/tecnologia/carrouselTecnologiaID.model')

//admin I+D routes
module.exports.getBannerID = (req, res, next) => {
  BannerID.find()
    .then((data) => {
      res.status(201).json(data[0])
    })
    .catch(next)
}

module.exports.getInfoCards = (req, res, next) => {
  AllianceInfoCards.find()
    .then(response => {
      res.status(201).json(response)
    })
    .catch(next)
}

module.exports.getGoals = (req, res, next) => {
  GoalsId.find()
    .then(response => {
      res.status(201).json(response)
    })
    .catch(next)
}

module.exports.getBottom = (req, res, next) => {
  BottomId.find()
    .then(response => {
      res.status(201).json(response)
    })
    .catch(next)
}

//admin I+D tech routes
module.exports.getTechBannerID = (req, res, next) => {
  BannerTech.find()
    .then(response => {
      res.status(201).json(response)
    })
    .catch(next)
}

module.exports.getVideoTech = (req, res, next) => {
  VideoTech.find()
    .then(response => {
      res.status(201).json(response)
    })
    .catch(next)
}

module.exports.getCarrouselTech = (req, res, next) => {
  CarrouselTech.find()
    .then(response => {
      res.status(201).json(response)
    })
    .catch(next)
}

//admin I+D alliances routes
module.exports.getLogos = (req, res, next) => {
  AllianceLogos.find()
    .then(response => {
      res.status(201).json(response)
    })
    .catch(next)
}