// controllers/content.controllers.js
const Vadevecum = require('../models/vadevecum.model')


module.exports.getProduct = (req, res, next) => {
const {buscar} = req.body

  Vadevecum.find({name: buscar})
    .then((data) => {
      res.status(201).json(data)
    })
    .catch(next)
}