// controllers/content.controllers.js
const Vadevecum = require('../models/vadevecum.model')
const BannerSuppliers = require('../models/ProductosPage/bannerSuppliers.model')
const ProductBanner = require('../models/ProductosPage/bannerProductosPage.model')
const ProductBottom = require('../models/ProductosPage/eresMedicoProductos.model')
const ProductListBanner = require('../models/ProductosPage/bannerProductsList.model')
const ProductInfo = require('../models/ProductosPage/productInfo.model')
const Lines = require('../models/ProductosPage/lines.model')
const {get} = require("mongoose")
const Blog = require("../models/noticias/news.model")
const htmlToText = require('html-to-text');


function diacriticSensitiveRegex(string = '') {
  return string.replace(/a/g, '[a,á,à,ä,â]')
               .replace(/e/g, '[e,é,ë,è]')
               .replace(/i/g, '[i,í,ï,ì]')
               .replace(/o/g, '[o,ó,ö,ò]')
               .replace(/u/g, '[u,ü,ú,ù]');
}

function Compare(strA,strB){
  for(var result = 0, i = strA.length; i--;){
    if(typeof strB[i] == 'undefined' || strA[i] == strB[i]);
    else if(strA[i].toLowerCase() == strB[i].toLowerCase())
      result++;
    else
      result += 4;
  }
  return 1 - (result + 4*Math.abs(strA.length - strB.length))/(2*(strA.length+strB.length));
}

function CompareActivePrinciple(strA,strB){

    const plainTextA = htmlToText.convert(strA, {
        wordwrap: false, // No envolver palabras
        ignoreHref: true, // Ignorar enlaces
        ignoreImage: true, // Ignorar imágenes
        singleNewLineParagraphs: true // Tratar un salto de línea como un párrafo separado
    });

    for(var result = 0, i = plainTextA.length; i--;){
        if(typeof strB[i] == 'undefined' || plainTextA[i] == strB[i]);
        else if(plainTextA[i].toLowerCase() == strB[i].toLowerCase())
            result++;
        else
            result += 4;
    }
    return 1 - (result + 4*Math.abs(plainTextA.length - strB.length))/(2*(plainTextA.length+strB.length));
}

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

module.exports.getProduct = (req, res, next) => {

  const {buscar} = req.body

  const getProduct = Vadevecum.find()

  const getRandomProducts = Vadevecum.aggregate([{$sample: {size: 3}}])
  Promise.all([getProduct, getRandomProducts])
    .then((data) => {
      let finalReturn;
      let finalResponsePercent = 0;
      for(let i = 0; i < data[0].length; i++) {
        let comparision = Compare(data[0][i].name.toLowerCase(),  buscar)
        if(comparision > finalResponsePercent) {
          finalResponsePercent = comparision;
          finalReturn = data[0][i];
        }
      }
      let allProds = [[finalReturn], data[1]]
      res.status(201).json(allProds)
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
  const {description, imgURL, title, button1Title, button1Link, button2Title, button2Link, description_eng, title_eng, button1Title_eng, button1Link_eng, button2Title_eng, button2Link_eng, id} = req.body


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
  const {findProductsTitle, imgURL, title, buttonTitle, farmacoTitle, farmacoBtn, farmacoDesc, findProductsTitle_eng, title_eng, buttonTitle_eng, farmacoTitle_eng, farmacoBtn_eng, farmacoDesc_eng, id} = req.body


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
  const {description, imgURL, title, description_eng, title_eng, id} = req.body


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
  const {name, lastname, work, years, speciality, info, license, mail, name_eng, lastname_eng, work_eng, years_eng, speciality_eng, info_eng, license_eng, mail_eng} = req.body

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

  function replaceAllString(data) {
    let newString = [];
    for (let i = 0; i < data.length; i++) {
      if (data[i] == "-") {
        newString.push(" ")
        i++
      }
      newString.push(data[i]);
    }
    return newString.join('');
  }

  const id = req.params.id
  const pathname = req.body.pathname
  const pathname2 = replaceAllString(pathname.slice(11))

  if (id != 'undefined') {
    Vadevecum.findById(id)
        .then(response => {
          res.status(201).json(response)
        })
        .catch(next)
  } else {
    Vadevecum.find({name: {$regex: diacriticSensitiveRegex(pathname2), $options: 'i'}})
        .sort({name: 1})
        .then(response => {
          let finalReturn;
          let finalResponsePercent = 0;
          for(let i = 0; i < response.length; i++) {
            let comparision = Compare(response[i].name.toLowerCase(), pathname2)
            if(comparision > finalResponsePercent) {
              finalResponsePercent = comparision;
              finalReturn = i;
            }
          }
          res.status(201).json(response[finalReturn])
        })
  }
}

module.exports.productActivePrinciple = (req, res, next) => {
    function replaceAllString(data) {
        let newString = [];
        for (let i = 0; i < data.length; i++) {
            if (data[i] == "-") {
                newString.push(" ")
                i++
            }
            newString.push(data[i]);
        }
        return newString.join('');
    }


    const pathname = req.params.id
    const pathname2 = replaceAllString(pathname.slice(9))
    console.log(pathname2)

    const getRandomProducts = Vadevecum.aggregate([{$sample: {size: 3}}])

    const getProduct = Vadevecum.find()
            .sort({active_principle: 1})

    Promise.all([getProduct, getRandomProducts])
            .then(response => {
                let finalReturn = response[0][0];
                let finalResponsePercent = 0;
                for(let i = 0; i < response[0].length; i++) {
                    let comparision = CompareActivePrinciple(response[0][i].active_principle.toLowerCase(), pathname2)
                    if(comparision > finalResponsePercent) {
                        finalResponsePercent = comparision;
                        finalReturn = response[0][i];
                    }
                }
                let allProds = [[finalReturn], response[1]]
                res.status(201).json(allProds)
            })
}

module.exports.productDataSheet = (req, res, next) => {

  function replaceAllString(data) {
    let newString = [];
    for (let i = 0; i < data.length; i++) {
      if (data[i] == "-") {
        newString.push(" ")
        i++
      }
      newString.push(data[i]);
    }
    return newString.join('');
  }

  const id = req.params.id
  const pathname = req.body.pathname
  const pathname2 = replaceAllString(pathname.slice(15))

  if (id != 'undefined') {
    Vadevecum.findById(id)
        .then(response => {
          res.status(201).json(response)
        })
        .catch(next)
  } else {
    Vadevecum.find({name: {$regex: diacriticSensitiveRegex(pathname2), $options: 'i'}})
        .sort({name: 1})
        .then(response => {
          let finalReturn;
          let finalResponsePercent = 0;
          for(let i = 0; i < response.length; i++) {
            let comparision = Compare(response[i].name.toLowerCase(), pathname2)
            if(comparision > finalResponsePercent) {
              finalResponsePercent = comparision;
              finalReturn = i;
            }
          }
          res.status(201).json(response[finalReturn])
        })
  }
}

module.exports.getLines = (req, res, next) => {
  Lines.find()
    .then(response => {
      res.status(201).json(response)
    })
    .catch(next)
}

module.exports.createLine = (req, res, next) => {
  const userRole = req.session.user.role
  const {line, line_eng} = req.body

  if (userRole === 'Admin') {
    Lines.create(req.body)
      .then(() => {
        Lines.find()
          .then(response => {
            res.status(201).json(response)
          })
          .catch(next)
      })
      .catch(next)
  } else {
    req.session.destroy()
    res.status(204).json({message: '¡No tiene suficientes privilegios para realizar esta acción!'})
  }
}

module.exports.deleteLine = (req, res, next) => {
  const userRole = req.session.user.role
  const id = req.params.id

  if (userRole === 'Admin') {
    Lines.findByIdAndDelete(id)
      .then(() => {
        Lines.find()
          .then(response => {
            res.status(201).json(response)
          })
          .catch(next)
      })
      .catch(next)
  } else {
    req.session.destroy()
    res.status(204).json({message: '¡No tiene suficientes privilegios para realizar esta acción!'})
  }
}

module.exports.getSuppliers = (req, res, next) => {
  BannerSuppliers.find()
      .sort({name: 1})
      .then((data) => {
          res.status(201).json(data)
      })
      .catch(next)
}

module.exports.updateSuppliers = (req, res, next) => {
    const userRole = req.session.user.role
    const {title, title_eng, imgURLFarmatodo, imgURLLocatel, URLFarmatodo, URLLocatel, id} = req.body


    if (userRole === 'Admin') {
        BannerSuppliers.findByIdAndUpdate(id, req.body, {new: true})
            .then((data) => {
                res.status(201).json(data)
            })
            .catch(next)
    } else {
        req.session.destroy()
        res.status(204).json({message: '¡No tiene suficientes privilegios para realizar esta acción!'})
    }
}