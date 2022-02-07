
// routes/iandd.routes.js

const express = require("express")
const router = express.Router()
const routeGuard = require('../middlewares/auth.middleware')
const therapeuticAreaController = require('../controllers/therapeuticarea.controller')

module.exports = router

//our philosophy routes
router.get('/bannerta', therapeuticAreaController.getBannerTA)
router.get('/carrouselta', therapeuticAreaController.getCarrouselTA)