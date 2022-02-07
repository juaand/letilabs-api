// controllers/ourphilosophy.controllers.js

const BannerOP = require('../models/nuestraFilosofia/bannerNuestraFilosofia.model')
const InfoCardsOP = require('../models/nuestraFilosofia/infoCardsNuestraFilosofia.model')
const LetterOP = require('../models/nuestraFilosofia/letterNuestraFilosofia.model')
const BottomOP = require('../models/nuestraFilosofia/bottomNuestraFilosofia.model')

//admin our philosophy routes
module.exports.getBannerOP = (req, res, next) => {
  BannerOP.find()
    .then((data) => {
      res.status(201).json(data[0])
    })
    .catch(next)
}

module.exports.getInfoCardsOP = (req, res, next) => {
  InfoCardsOP.find()
    .then((data) => {
      res.status(201).json(data)
    })
    .catch(next)
}

module.exports.getLetterOP = (req, res, next) => {
  LetterOP.find()
    .then((data) => {
      res.status(201).json(data[0])
    })
    .catch(next)
}

module.exports.getBottomOP = (req, res, next) => {
  BottomOP.find()
    .then((data) => {
      res.status(201).json(data[0])
    })
    .catch(next)
}