const Blog = require('../models/blog.model')

module.exports.getLastestBlogs = (req, res, next) => {
  Blog.find()
    .sort({createdAt: -1})
    .populate('authorId')
    .then((lastestBlogs => {
      res.status(201).json(lastestBlogs)
    }))
    .catch(next)
}

module.exports.getBlogData = (req, res, next) => {
  const {id} = req.body

  Blog.findById(id)
    .populate('authorId')
    .then(blogInfo => {
      res.status(201).json(blogInfo)
    })
    .catch(next)
}