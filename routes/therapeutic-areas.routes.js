
// routes/iandd.routes.js

const express = require("express")
const router = express.Router()
const routeGuard = require('../middlewares/auth.middleware')
const therapeuticAreaController = require('../controllers/therapeuticarea.controller')

module.exports = router

//our philosophy routes
router.get('/bannerta', therapeuticAreaController.getBannerTA)
router.patch('/updatebannerta', therapeuticAreaController.updateBannerTA)
router.get('/carrouselta', therapeuticAreaController.getCarrouselTA)
router.patch('/updatecarrouselta', therapeuticAreaController.updateCarrouselTA)
router.get('/bottomta', therapeuticAreaController.getBottomTA)
router.patch('/updatebottomta', therapeuticAreaController.updateBottomTA)