// controllers/iandd.controllers.js
const AllianceLogos = require('../models/I+D/alianzas/alianzaLogosCarrousel.model')
const AllianceInfoCards = require('../models/I+D/I+D components/infoCardsID.model')


module.exports.getLogos = (req, res, next) => {
  AllianceLogos.find()
    .then(response => {
      res.status(201).json(response)
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