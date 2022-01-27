// controllers/iandd.controllers.js
const AllianceLogos = require('../models/I+D/alianzas/alianzaLogosCarrousel.model')


module.exports.getLogos = (req, res, next) => {
  AllianceLogos.find()
    .then(response => {
      res.status(201).json(response)
    })
    .catch(next)
}