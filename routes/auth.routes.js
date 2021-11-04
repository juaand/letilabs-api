// routes/auth.routes.js

const express = require("express")
const router = express.Router()
const upload = require('../config/cloudinary.config')
const routeGuard = require('../middlewares/auth.middleware')
const authController = require('../controllers/auth.controller')

module.exports = router


router.post('/login', authController.admin)

router.post('/logout', routeGuard.isAuthenticated, authController.doLogout)
