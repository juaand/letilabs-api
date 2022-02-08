// controllers/content.controllers.js
const Blog = require('../models/news.model')
const NewsTitles = require('../models/newsTitle.model')

module.exports.getNews = (req, res, next) => {

  Blog.find()
    .then(response => {
      res.status(201).json(response)
    })
    .catch(next)
}

module.exports.getRandomNews = (req, res, next) => {

  Blog.aggregate([
    {
      $sample: {size: 2}
    }
  ])
    .then(response => {
      res.status(201).json(response)
    })
    .catch(next)
}

module.exports.getNewsTitles = (req, res, next) => {
  NewsTitles.find()
    .then(response => {
      res.status(201).json(response[0])
    })
    .catch(next)
}