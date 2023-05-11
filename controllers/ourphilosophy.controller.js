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

module.exports.updateBannerOP = (req, res, next) => {
  const userRole = req.session.user.role
  const {description, imgURL, title, description_eng, title_eng, id} = req.body

  if (userRole === 'Admin') {
    BannerOP.findByIdAndUpdate(id, req.body, {new: true})
      .then((data) => {
        res.status(201).json(data)
      })
      .catch(next)
  } else {
    req.session.destroy()
    res.status(204).json({message: '¡No tiene suficientes privilegios para realizar esta acción!'})
  }
}

module.exports.createPillar = (req, res, next) => {
  const userRole = req.session.user.role
  const {picPath, title, title_eng} = req.body

  if (userRole === 'Admin') {
    InfoCardsOP.create(req.body)
      .then(() => {
        InfoCardsOP.find()
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

module.exports.getInfoCardsOP = (req, res, next) => {
  InfoCardsOP.find()
    .then((data) => {
      res.status(201).json(data)
    })
    .catch(next)
}

module.exports.updateInfoCardsOP = (req, res, next) => {
  const userRole = req.session.user.role
  const {picPath, title, title_eng, id} = req.body


  if (userRole === 'Admin') {
    InfoCardsOP.findByIdAndUpdate(id, req.body, {new: true})
      .then(() => {
        InfoCardsOP.find()
          .then((data) => {
            res.status(201).json(data)
          }
          )
          .catch(next)
      })
      .catch(next)
  } else {
    req.session.destroy()
    res.status(204).json({message: '¡No tiene suficientes privilegios para realizar esta acción!'})
  }
}

module.exports.deleteInfoCardOP = (req, res, next) => {
  const id = req.params.id
  const userRole = req.session.user.role

  if (userRole === 'Admin') {
    InfoCardsOP.findByIdAndRemove(id)
      .then(() => {
        InfoCardsOP.find()
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

module.exports.getLetterOP = (req, res, next) => {
  LetterOP.find()
    .then((data) => {
      res.status(201).json(data[0])
    })
    .catch(next)
}

module.exports.updateLetterOP = (req, res, next) => {
  const userRole = req.session.user.role
  const {body, imgURL, mainTitle, body_eng, mainTitle_eng, id} = req.body

  if (userRole === 'Admin') {
    LetterOP.findByIdAndUpdate(id, req.body, {new: true})
      .then((data) => {
        res.status(201).json(data)
      })
      .catch(next)
  } else {
    req.session.destroy()
    res.status(204).json({message: '¡No tiene suficientes privilegios para realizar esta acción!'})
  }
}

module.exports.getBottomOP = (req, res, next) => {
  BottomOP.find()
    .then((data) => {
      res.status(201).json(data[0])
    })
    .catch(next)
}

module.exports.updateBottomOP = (req, res, next) => {
  const userRole = req.session.user.role
  const {title, imgURL, description, buttonLink, buttonTitle, title_eng, description_eng, buttonLink_eng, buttonTitle_eng, id} = req.body


  if (userRole === 'Admin') {
    BottomOP.findByIdAndUpdate(id, req.body, {new: true})
      .then((data) => {
        res.status(201).json(data)
      })
      .catch(next)
  } else {
    req.session.destroy()
    res.status(204).json({message: '¡No tiene suficientes privilegios para realizar esta acción!'})
  }
}