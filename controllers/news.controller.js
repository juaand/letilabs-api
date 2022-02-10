// controllers/content.controllers.js
const Blog = require('../models/noticias/news.model')
const NewsTitles = require('../models/noticias/newsTitle.model')

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

module.exports.updateNewsTitles = (req, res, next) => {
  const userRole = req.session.user.role
  const {lastestTitle, mostTitle, searchTitle, picPath, id} = req.body


  if (userRole === 'Admin') {
    NewsTitles.findByIdAndUpdate(id, req.body, {new: true})
      .then((data) => {
        res.status(201).json(data)
      })
      .catch(next)
  } else {
    req.session.destroy()
    res.status(204).json({message: '¡No tiene suficientes privilegios para realizar esta acción!'})
  }
}