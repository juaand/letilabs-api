// routes/auth.routes.js

const express = require("express")
const router = express.Router()
const upload = require('../config/cloudinary.config')
const routeGuard = require('../middlewares/auth.middleware')
const authController = require('../controllers/auth.controller')

module.exports = router


router.post('/login', routeGuard.isNotAuthenticated, authController.doLogin)

router.post('/google-login', routeGuard.isNotAuthenticated, authController.doGoogleLogin)

router.get(
  '/register',
  routeGuard.isNotAuthenticated,
  authController.getRegister
)

router.post(
  '/register',
  routeGuard.isNotAuthenticated,
  upload.single('avatar'),
  authController.postRegister
)

router.get(
  '/activate/:token',
  routeGuard.isNotAuthenticated,
  authController.getToken
)

router.post('/logout', routeGuard.isAuthenticated, authController.doLogout)
