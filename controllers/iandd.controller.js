// controllers/iandd.controllers.js
const AllianceLogos = require('../models/I+D/alianzas/alianzaLogosCarrousel.model')
const AllianceInfoCards = require('../models/I+D/I+D components/infoCardsID.model')
const BannerID = require('../models/I+D/I+D components/bannerID.model')

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

//admin I+D alliances routes
module.exports.getLogos = (req, res, next) => {
  AllianceLogos.find()
    .then(response => {
      res.status(201).json(response)
    })
    .catch(next)
}