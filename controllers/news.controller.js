// controllers/content.controllers.js
const Blog = require('../models/blog.model')

module.exports.getNews = (req, res, next) => {

  Blog.find()
    .then(response => {
      res.status(201).json(response)
    })
    .catch(next)
}