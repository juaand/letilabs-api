// controllers/content.controllers.js
const SiteContent = require('../models/siteContent.model')
const News = require('../models/news.model')


module.exports.searchContent = (req, res, next) => {
  const searchTerm = req.params.search

  // SiteContent.find({"$text": {"$search": searchTerm}})
  SiteContent.find({content: {$regex: searchTerm, $options: 'i'}})
    .then(isMatch => {
      res.status(201).json(isMatch)
    })
    .catch(next)
}

module.exports.searchNews = (req, res, next) => {
  const {data} = req.body

  News.find({title: {$regex: data.search, $options: 'i'}})
    .then(isMatch => {
      if (data.tag.length > 0) {
        res.status(201).json(isMatch.filter(el => {
          for (let i = 0; i < data.tag.length; i++) {
            if (el.tag.includes(data.tag[i])) {
              return el
            }
          }
        }))
      } else {
        res.status(201).json(isMatch)
      }
    })
    .catch(next)

}