// controllers/content.controllers.js
const SiteContent = require('../models/siteContent.model')


module.exports.createContent = (req, res, next) => {
  const {name, url, content, type} = req.body
  const userRole = req.session.user.role

  if (userRole === 'Admin') {
    Promise.all([
      SiteContent.deleteMany({"type": type})
    ]
    )
      .then(() => {
        SiteContent.create({name, url, type, content: content})
          .then(() => {
            res.status(201).json({
              message: 'Contenido creado exitosamente'
            })
          })
          .catch(next)
      })
      .catch(next)
  } else {
    req.session.destroy()
    res.status(204).json({message: '¡No tiene suficientes privilegios para realizar esta acción!'})
  }
}
