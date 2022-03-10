// controllers/content.controllers.js
const SiteContent = require('../models/siteContent.model')


module.exports.createContent = (req, res, next) => {
  const {name, url, content, type} = req.body

  Promise.all([
    SiteContent.deleteMany({"type": type})
  ]
  ).then(() => {
    SiteContent.create({name, url, type, content: content})
      .then(() => {
        res.status(201).json({
          message: 'Contenido creado exitosamente'
        })
      })
      .catch(next)
  })
}
