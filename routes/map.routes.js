const express = require('express')
const router = express.Router()
const mapController = require('../controllers/map.controller')
const routeGuard = require('../middlewares/auth.middleware')

module.exports = router

router.get(
  '/map-show/map/cat/:category',
  routeGuard.isNotAuthenticated,
  mapController.getMap
)
