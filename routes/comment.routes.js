// routes/comment.routes.js

const express = require("express")
const router = express.Router()
const routeGuard = require('../middlewares/auth.middleware')
const commentController = require('../controllers/comment.controller')

module.exports = router

router.post('/new-comment',
  routeGuard.isAuthenticated,
  commentController.postsReview
)

router.post('/delete-comment',
  routeGuard.isAuthenticated,
  commentController.deleteComment
)
