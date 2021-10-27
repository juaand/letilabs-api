const express = require("express")
const router = express.Router()
const routeGuard = require('../middlewares/auth.middleware')
const blogController = require('../controllers/blog.controller')

module.exports = router

router.get(
  '/get-lastest-blogs',
  blogController.getLastestBlogs
)

router.post('/get-blog-data',
  blogController.getBlogData
)


