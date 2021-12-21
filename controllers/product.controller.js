// controllers/content.controllers.js
const Vadevecum = require('../models/vadevecum.model')


module.exports.createContent = (req, res, next) => {
  const {name, url, content} = req.body

  const dataArr = new Set(content)

  SiteContent.deleteMany()

  SiteContent.find({name})
    .then(response => {
      if (response.length) {
        SiteContent.findOneAndUpdate({name}, {$set: {content}})
          .then(() => {
            res.status(201).json({
              message: 'Contenido ya existe'
            })
          })
          .catch(next)
      } else {
        // SiteContent.create({name, url, content}).then((newContent) => {
        //   res.status(201).json(newContent)
        // })
        //   .catch(next)
        dataArr.forEach(el => {
          SiteContent.create({name, url, content: el})
            .then(() => {
              res.status(201).json({
                message: 'Contenidos creados exitosamente'
              })
            })
            .catch(next)
        })
      }
    })
}