// controllers/seo.controllers.js

const Seo = require('../models/seo.model')


module.exports.getSeoData = (req, res, next) => {
  Seo.find()
    .then((seoData) => {
      res.status(200).json(seoData)
    })
    .catch(next)
}


module.exports.updateSeoData = (req, res, next) => {
  const userRole = req.session.user.role
  const {keywords, description, page, id} = req.body

  if (userRole === 'Admin') {
    Seo.findByIdAndUpdate(id, req.body, {new: true})
      .then((data) => {
        res.status(201).json(data)
      })
      .catch(next)
  } else {
    req.session.destroy()
    res.status(204).json({message: '¡No tiene suficientes privilegios para realizar esta acción!'})
  }
}