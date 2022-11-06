// controllers/content.controllers.js
const Vadevecum = require('../models/vadevecum.model')
const ProductBanner = require('../models/ProductosPage/bannerProductosPage.model')
const ProductBottom = require('../models/ProductosPage/eresMedicoProductos.model')
const ProductListBanner = require('../models/ProductosPage/bannerProductsList.model')
const ProductInfo = require('../models/ProductosPage/productInfo.model')
const {get} = require("mongoose")
const Blog = require("../models/noticias/news.model")

module.exports.getProduct = (req, res, next) => {

  const seoURL = (str) => {
    return str.toString()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/\s+/g, '-')
      .toLowerCase()
      .replace(/&/g, '-and-')
      // eslint-disable-next-line
      .replace(/[^a-z0-9\-]/g, '')
      .replace(/-+/g, '-')
      .replace(/^-*/, '')
      .replace(/-*$/, '')
  }

  const {buscar} = req.body

  const allProducts = Vadevecum.find()
  // console.log(allProducts)
  //  const newAll = allProducts.forEach(el => {seoURL(el.name)})
  //  console.log(newAll)


  const getProduct = Vadevecum.find({name: new RegExp(buscar, 'i')})
  console.log(getProduct)

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

module.exports.getProductInfoData = (req, res, next) => {
  const userRole = req.session.user.role

  if (userRole === 'Admin') {
    ProductInfo.find()
      .then((data) => {
        res.status(201).json(data)
      })
      .catch(next)
  } else {
    req.session.destroy()
    res.status(204).json({message: '¡No tiene suficientes privilegios para realizar esta acción!'})
  }

}

module.exports.dropProductInfo = (req, res, next) => {
  const userRole = req.session.user.role

  if (userRole === 'Admin') {
    ProductInfo.findByIdAndDelete(req.params.id)
      .then(() => {
        ProductInfo.find()
          .then((data) => {
            res.status(201).json(data)
          })
          .catch(next)
      })
      .catch(next)
  } else {
    req.session.destroy()
    res.status(204).json({message: '¡No tiene suficientes privilegios para realizar esta acción!'})
  }
}

module.exports.productProspect = (req, res, next) => {
  const id = req.params.id
  const pathname = req.body.pathname
  const pathname2 = pathname.slice(11)

  function diacriticSensitiveRegex(string = '') {
    return string.replace(/a/g, '[a,á,à,ä,â]')
        .replace(/e/g, '[e,é,ë,è]')
        .replace(/i/g, '[i,í,ï,ì]')
        .replace(/o/g, '[o,ó,ö,ò]')
        .replace(/u/g, '[u,ü,ú,ù]');
  }

  if (id != 'undefined') {
    Vadevecum.findById(id)
      .then(response => {
        res.status(201).json(response)
      })
      .catch(next)
    } else {
    Vadevecum.find({name: { $regex: diacriticSensitiveRegex(pathname2), $options: 'i' }})
        .then(response => {
          res.status(201).json(response[0])
        })
      console.log('POR AQUI')
    }
}