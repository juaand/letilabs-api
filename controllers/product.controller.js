// controllers/content.controllers.js
const Vadevecum = require('../models/vadevecum.model')
const ProductBanner = require('../models/productosPage/bannerProductosPage.model')
const ProductBottom = require('../models/productosPage/eresMedicoProductos.model')
const ProductListBanner = require('../models/productosPage/bannerProductsList.model')

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

module.exports.getProductsList = (req, res, next) => {
  Vadevecum.find()
    .sort({name: 1})
    .then((data) => {
      res.status(201).json(data)
    })
    .catch(next)
}

module.exports.getProductBanner = (req, res, next) => {
  ProductBanner.find()
    .then((data) => {
      res.status(201).json(data)
    })
    .catch(next)
}

module.exports.getBottomProduct = (req, res, next) => {
  ProductBottom.find()
    .then((data) => {
      res.status(201).json(data)
    })
    .catch(next)
}

module.exports.getProductsBanner = (req, res, next) => {
  ProductListBanner.find()
    .then((data) => {
      res.status(201).json(data)
    })
    .catch(next)
}