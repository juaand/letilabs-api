const express = require('express')
const router = express.Router()
const usersController = require('../controllers/users.controller')
const routeGuard = require('../middlewares/auth.middleware')

module.exports = router

router.get(
  '/user/:id',
  routeGuard.isNotAuthenticated,
  usersController.getUserSpots
)
