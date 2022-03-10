// controllers/content.controllers.js
const SiteContent = require('../models/siteContent.model')


module.exports.createContent = (req, res, next) => {
  const {name, url, content} = req.body

  const dataArr = new Set(content)

  console.log(content)
  console.log(name)
  Promise.all([
    SiteContent.deleteMany({"name": name})
  ]
  )

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
