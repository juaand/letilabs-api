
// routes/content.routes.js

const express = require("express")
const router = express.Router()
const routeGuard = require('../middlewares/auth.middleware')
const contentController = require('../controllers/content.controller')

module.exports = router

router.post('/update-content', routeGuard.isAuthenticated, contentController.createContent)