// controllers/content.controllers.js
const Vadevecum = require('../models/vadevecum.model')
const ProductBanner = require('../models/ProductosPage/bannerProductosPage.model')
const ProductBottom = require('../models/ProductosPage/eresMedicoProductos.model')
const ProductListBanner = require('../models/ProductosPage/bannerProductsList.model')
const ProductInfo = require('../models/ProductosPage/productInfo.model')

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

module.exports.updateProductBanner = (req, res, next) => {
  const userRole = req.session.user.role
  const {description, imgURL, title, button1Title, button1Link, button2Title, button2Link, id} = req.body


  if (userRole === 'Admin') {
    ProductBanner.findByIdAndUpdate(id, req.body, {new: true})
      .then((data) => {
        res.status(201).json(data)
      })
      .catch(next)
  } else {
    req.session.destroy()
    res.status(204).json({message: '¡No tiene suficientes privilegios para realizar esta acción!'})
  }
}

module.exports.getBottomProduct = (req, res, next) => {
  ProductBottom.find()
    .then((data) => {
      res.status(201).json(data)
    })
    .catch(next)
}

module.exports.updateBottomProduct = (req, res, next) => {
  const userRole = req.session.user.role
  const {findProductsTitle, imgURL, title, buttonTitle, farmacoTitle, farmacoBtn, farmacoDesc, id} = req.body


  if (userRole === 'Admin') {
    ProductBottom.findByIdAndUpdate(id, req.body, {new: true})
      .then((data) => {
        res.status(201).json(data)
      })
      .catch(next)
  } else {
    req.session.destroy()
    res.status(204).json({message: '¡No tiene suficientes privilegios para realizar esta acción!'})
  }
}

module.exports.getProductsBanner = (req, res, next) => {
  ProductListBanner.find()
    .then((data) => {
      res.status(201).json(data)
    })
    .catch(next)
}

module.exports.updateProductsBanner = (req, res, next) => {
  const userRole = req.session.user.role
  const {description, imgURL, title, id} = req.body


  if (userRole === 'Admin') {
    ProductListBanner.findByIdAndUpdate(id, req.body, {new: true})
      .then((data) => {
        res.status(201).json(data)
      })
      .catch(next)
  } else {
    req.session.destroy()
    res.status(204).json({message: '¡No tiene suficientes privilegios para realizar esta acción!'})
  }
}

module.exports.getProductInfo = (req, res, next) => {
  const {name, lastname, work, years, speciality, info, license, mail} = req.body

  ProductInfo.create(req.body)
    .then((newProductInfo) => {
      res.status(201).json(newProductInfo)
    })
    .catch(next)
}