// controllers/admin.controllers.js

const Vigilancia = require('../models/home/homeComponents/vigilancia.model')
const UsInfo = require('../models/home/homeComponents/usInfo.model')
const CarouselInicio = require('../models/home/homeComponents/carrouselHome.model')
const UnidadesInicio = require('../models/home/homeComponents/unidadesNegocio.model')
const PortfolioInicio = require('../models/home/homeComponents/portfolio.model')
const FarmacoInicio = require('../models/home/homeComponents/farmacoVigilancia.model')

module.exports.getFarmVigData = (req, res, next) => {
  const userRole = req.session.user.role

  if (userRole === 'Admin') {
    Vigilancia.find()
      .sort({updatedAt: -1})
      .then((data) => {
        res.status(201).json(data)
      })
      .catch(next)
  } else {
    req.session.destroy()
    res.status(204).json({message: '¡No tiene suficientes privilegios para realizar esta acción!'})
  }
}


/////////////////////////////////////////////////////////////////////
////////////////////////// INICIO CRUD //////////////////////////////
/////////////////////////////////////////////////////////////////////

module.exports.getUsInfo = (req, res, next) => {
  const userRole = req.session.user.role

  if (userRole === 'Admin') {
    UsInfo.find()
      .then((data) => {
        res.status(201).json(data[0])
      })
      .catch(next)
  } else {
    req.session.destroy()
    res.status(204).json({message: '¡No tiene suficientes privilegios para realizar esta acción!'})
  }
}

module.exports.updateUsInfoData = (req, res, next) => {
  const userRole = req.session.user.role
  const {description, url, buttonTitle, id} = req.body


  if (userRole === 'Admin') {
    UsInfo.findByIdAndUpdate(id, req.body, {new: true})
      .then((data) => {
        res.status(201).json(data)
      })
      .catch(next)
  } else {
    req.session.destroy()
    res.status(204).json({message: '¡No tiene suficientes privilegios para realizar esta acción!'})
  }
}

module.exports.getCarouselInicio = (req, res, next) => {
  const userRole = req.session.user.role

  if (userRole === 'Admin') {
    CarouselInicio.find()
      .then((data) => {
        res.status(201).json(data[0])
      })
      .catch(next)
  } else {
    req.session.destroy()
    res.status(204).json({message: '¡No tiene suficientes privilegios para realizar esta acción!'})
  }
}

module.exports.getUnidadesInicio = (req, res, next) => {
  const userRole = req.session.user.role

  if (userRole === 'Admin') {
    UnidadesInicio.find()
      .then((data) => {
        res.status(201).json(data[0])
      })
      .catch(next)
  } else {
    req.session.destroy()
    res.status(204).json({message: '¡No tiene suficientes privilegios para realizar esta acción!'})
  }
}

module.exports.getPortfolioInicio = (req, res, next) => {
  const userRole = req.session.user.role

  if (userRole === 'Admin') {
    PortfolioInicio.find()
      .then((data) => {
        res.status(201).json(data[0])
      })
      .catch(next)
  } else {
    req.session.destroy()
    res.status(204).json({message: '¡No tiene suficientes privilegios para realizar esta acción!'})
  }
}

module.exports.updatePortfolioData = (req, res, next) => {
  const userRole = req.session.user.role
  const {title, description, id} = req.body


  if (userRole === 'Admin') {
    PortfolioInicio.findByIdAndUpdate(id, req.body, {new: true})
      .then((data) => {
        res.status(201).json(data)
      })
      .catch(next)
  } else {
    req.session.destroy()
    res.status(204).json({message: '¡No tiene suficientes privilegios para realizar esta acción!'})
  }
}

module.exports.getFarmacoInicio = (req, res, next) => {
  const userRole = req.session.user.role

  if (userRole === 'Admin') {
    FarmacoInicio.find()
      .then((data) => {
        res.status(201).json(data[0])
      })
      .catch(next)
  } else {
    req.session.destroy()
    res.status(204).json({message: '¡No tiene suficientes privilegios para realizar esta acción!'})
  }
}

module.exports.updateFarmacoData = (req, res, next) => {
  const userRole = req.session.user.role
  const {title, subTitle, buttonTitle, id} = req.body

  console.log(title)
  console.log(subTitle)
  console.log(buttonTitle)
  console.log(id)


  if (userRole === 'Admin') {
    FarmacoInicio.findByIdAndUpdate(id, req.body, {new: true})
      .then((data) => {
        res.status(201).json(data)
      })
      .catch(next)
  } else {
    req.session.destroy()
    res.status(204).json({message: '¡No tiene suficientes privilegios para realizar esta acción!'})
  }
}