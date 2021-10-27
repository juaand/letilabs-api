// routes/editor.routes.js

const express = require("express")
const router = express.Router()
const routeGuard = require('../middlewares/auth.middleware')
const upload = require('../config/cloudinary.config')
const editorController = require('../controllers/editor.controller')

module.exports = router


router.get('/editor', routeGuard.isAuthenticated, editorController.getBlog)

router.post(
  '/editor/blog/:id',
  routeGuard.isAuthenticated,
  upload.single('picPath'),
  editorController.postBlog
)

router.get('/mappet/blog/:id', routeGuard.isNotAuthenticated, editorController.getSingle)
