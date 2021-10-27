const express = require("express")
const router = express.Router()
const routeGuard = require('../middlewares/auth.middleware')
const singleController = require('../controllers/single.controller')

module.exports = router

router.get(
  '/:category/:id',
  routeGuard.isNotAuthenticated,
  singleController.getSpot
)

router.post(
  '/:category/:id/like',
  routeGuard.isAuthenticated,
  singleController.newLike
)

router.post(
  '/ong/:id/charge',
  routeGuard.isAuthenticated,
  singleController.charge
)

router.post('/get-user-data',
  singleController.getUserData)