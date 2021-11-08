// controllers/content.controllers.js
const SiteContent = require('../models/siteContent.model')


module.exports.createContent = (req, res, next) => {
  const {name, url, content} = req.body

  SiteContent.find({name})
    .then(response => {
      if (response.length) {
        SiteContent.findOneAndUpdate({name}, {$set: {content}})
          .then((newContent) => {
            res.status(201).json(newContent)
          })
          .catch(next)
      } else {
        SiteContent.create({name, url, content}).then((newContent) => {
          res.status(201).json(newContent)
        })
          .catch(next)
      }
    })

}