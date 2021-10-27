const express = require("express")
const router = express.Router()
const routeGuard = require('../middlewares/auth.middleware')
const spotController = require('../controllers/spot.controller')
const uploads = require('../config/cloudinary.config')

module.exports = router

router.get(
  '/get-lastest-spots',
  spotController.getLastestSpots
)

router.post('/get-spot-data',
  spotController.getSpotData
)

router.post('/create-spot',
  routeGuard.isAuthenticated,
  uploads.array('file'),
  spotController.createSpot
)


