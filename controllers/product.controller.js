// controllers/content.controllers.js
const Vadevecum = require('../models/vadevecum.model')


module.exports.getProduct = (req, res, next) => {
const {buscar} = req.body

  const getProduct = Vadevecum.find({name: buscar})
  const getRandomProducts = Vadevecum.aggregate([{$sample: {size: 3}}])

  Promise.all([getProduct, getRandomProducts])
    .then((data) => {
      res.status(201).json(data)
    })
    .catch(next)
}