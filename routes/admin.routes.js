// routes/admin.routes.js

const express = require("express")
const router = express.Router()
const routeGuard = require('../middlewares/auth.middleware')
const adminController = require('../controllers/admin.controller')
const commentController = require('../controllers/comment.controller')

module.exports = router

router.get('/admin-edit', routeGuard.isAuthenticated, adminController.getAdmin)