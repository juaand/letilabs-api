// controllers/therapeuticarea.controllers.js

const BannerTA = require('../models/home/areasterapeuticas/bannerAT.model')
const CarrouselTA = require('../models/home/areasterapeuticas/timeLineAT.model')
const BottomTA = require('../models/home/areasterapeuticas/bottomCtaAT.model')

//admin therapeutic area routes
module.exports.getBannerTA = (req, res, next) => {
  BannerTA.find()
    .then((data) => {
      res.status(201).json(data[0])
    })
    .catch(next)
}

module.exports.updateBannerTA = (req, res, next) => {
  const userRole = req.session.user.role
  const {description, imgURL, title, id} = req.body
  console.log(imgURL)


  if (userRole === 'Admin') {
    BannerTA.findByIdAndUpdate(id, req.body, {new: true})
      .then((data) => {
        res.status(201).json(data)
      })
      .catch(next)
  } else {
    req.session.destroy()
    res.status(204).json({message: '¡No tiene suficientes privilegios para realizar esta acción!'})
  }
}

module.exports.getCarrouselTA = (req, res, next) => {
  CarrouselTA.find()
    .then((data) => {
      res.status(201).json(data)
    })
    .catch(next)
}

module.exports.updateCarrouselTA = (req, res, next) => {
  const userRole = req.session.user.role
  const {desc, imgPath, title, mainTitle, id} = req.body


  if (userRole === 'Admin') {
    CarrouselTA.findByIdAndUpdate(id, req.body, {new: true})
      .then(() => {
        CarrouselTA.find()
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

module.exports.getBottomTA = (req, res, next) => {
  BottomTA.find()
    .then((data) => {
      res.status(201).json(data)
    })
    .catch(next)
}

module.exports.updateBottomTA = (req, res, next) => {
  const userRole = req.session.user.role
  const {img, title, buttonTitle, buttonLink, id} = req.body


  if (userRole === 'Admin') {
    BottomTA.findByIdAndUpdate(id, req.body, {new: true})
      .then(() => {
        BottomTA.find()
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