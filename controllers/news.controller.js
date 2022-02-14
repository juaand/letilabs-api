// controllers/content.controllers.js
const Blog = require('../models/noticias/news.model')
const NewsTitles = require('../models/noticias/newsTitle.model')
const Tags = require('../models/noticias/tags.model')

module.exports.getNews = (req, res, next) => {

  Blog.find()
    .sort({publishDate: -1})
    .then(response => {
      res.status(201).json(response)
    })
    .catch(next)
}

module.exports.createNews = (req, res, next) => {
  const userRole = req.session.user.role
  const {title, subTitle, urlToPic, tag, content, outstanding, publishDate} = req.body

  if (userRole === 'Admin') {
    Blog.create(req.body)
      .then(() => {
        Blog.find()
          .sort({publishDate: -1})
          .then(response => {
            res.status(201).json(response)
          })
          .catch(next)
      })
      .catch(next)
  } else {
    req.session.destroy()
    res.status(204).json({message: '¡No tiene suficientes privilegios para realizar esta acción!'})
  }
}

module.exports.deleteNews = (req, res, next) => {
  const userRole = req.session.user.role
  const id = req.params.id

  if (userRole === 'Admin') {
    Blog.findByIdAndDelete(id)
      .then(() => {
        Blog.find()
          .sort({publishDate: -1})
          .then(response => {
            res.status(201).json(response)
          })
          .catch(next)
      })
      .catch(next)
  } else {
    req.session.destroy()
    res.status(204).json({message: '¡No tiene suficientes privilegios para realizar esta acción!'})
  }
}

module.exports.updateNews = (req, res, next) => {
  const id = req.params.id
  const userRole = req.session.user.role
  const {title, subTitle, urlToPic, tag, content, outstanding, publishDate} = req.body

  if (userRole === 'Admin') {
    Blog.findByIdAndUpdate(id, req.body, {new: true})
      .then(() => {
        Blog.find()
          .sort({publishDate: -1})
          .then(data => {
            res.status(201).json(data)
          })
          .catch(next)
      })
      .catch(next)
  } else {
    req.session.destroy()
    res.status(204).json({message: '¡No tiene suficientes privilegios para realizar esta acción!'})
  }
}

module.exports.addOutstandingNews = (req, res, next) => {
  const id = req.params.id
  const userRole = req.session.user.role
  const {outstanding} = req.body

  if (userRole === 'Admin') {
    Blog.findByIdAndUpdate(id, req.body, {new: true})
      .then(() => {
        Blog.find()
          .sort({publishDate: -1})
          .then(data => {
            res.status(201).json(data)
          })
          .catch(next)
      })
      .catch(next)
  } else {
    req.session.destroy()
    res.status(204).json({message: '¡No tiene suficientes privilegios para realizar esta acción!'})
  }
}

module.exports.getTags = (req, res, next) => {
  Tags.find()
    .then(response => {
      res.status(201).json(response)
    })
    .catch(next)
}

module.exports.createTag = (req, res, next) => {
  const userRole = req.session.user.role
  const {tag} = req.body

  if (userRole === 'Admin') {
    Tags.create(req.body)
      .then(() => {
        Tags.find()
          .then(response => {
            res.status(201).json(response)
          })
          .catch(next)
      })
      .catch(next)
  } else {
    req.session.destroy()
    res.status(204).json({message: '¡No tiene suficientes privilegios para realizar esta acción!'})
  }
}

module.exports.deleteTag = (req, res, next) => {
  const userRole = req.session.user.role
  const id = req.params.id

  if (userRole === 'Admin') {
    Tags.findByIdAndDelete(id)
      .then(() => {
        Tags.find()
          .then(response => {
            res.status(201).json(response)
          })
          .catch(next)
      })
      .catch(next)
  } else {
    req.session.destroy()
    res.status(204).json({message: '¡No tiene suficientes privilegios para realizar esta acción!'})
  }
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