// controllers/content.controllers.js
const SiteContent = require('../models/siteContent.model')


module.exports.searchContent = (req, res, next) => {
  const searchTerm = req.params.search

  // SiteContent.find({"$text": {"$search": searchTerm}})
  SiteContent.find({content: {$regex: searchTerm, $options: 'i'}})
    .then(isMatch => {
      res.status(201).json(isMatch)
    })
    .catch(next)

}