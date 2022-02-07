// controllers/ourphilosophy.controllers.js

const BannerID = require('../models/nuestraFilosofia/bannerNuestraFilosofia.model')

//admin our philosophy routes
module.exports.getBannerOP = (req, res, next) => {
  BannerID.find()
    .then((data) => {
      res.status(201).json(data[0])
    })
    .catch(next)
}