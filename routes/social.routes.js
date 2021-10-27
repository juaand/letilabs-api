const express = require("express")
const router = express.Router()
const routeGuard = require('../middlewares/auth.middleware')
const passport = require('passport')
const socialController = require('../controllers/social.controller')

module.exports = router

router.get(
  '/auth/google',
  passport.authenticate('google', {scope: ['profile', 'email']}),
  routeGuard.isNotAuthenticated
)

router.get(
  '/auth/google/callback',
  routeGuard.isNotAuthenticated,
  socialController.googleCallback
)
