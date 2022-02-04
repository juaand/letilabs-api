
// routes/iandd.routes.js

const express = require("express")
const router = express.Router()
const routeGuard = require('../middlewares/auth.middleware')
const ianddController = require('../controllers/iandd.controller')

module.exports = router

//I+D routes
router.get('/bannerdataid',  ianddController.getBannerID)
router.get('/idinfocards', ianddController.getInfoCards)
router.get('/idgoals', ianddController.getGoals)
router.get('/idbottom', ianddController.getBottom)

//I+D tech routes
router.get('/bannertech',  ianddController.getTechBannerID)
router.get('/videotech', ianddController.getVideoTech)
router.get('/carrouseltech', ianddController.getCarrouselTech)
router.get('/maptech', ianddController.getMapTech)
router.get('/bottomtech', ianddController.getBottomTech)

//I+D manufacture routes
router.get('/bannermanufacture',  ianddController.getManufactureBanner)
router.get('/carrouselmanufacture', ianddController.getCarrouselManufacture)
router.get('/certificatesmanufacture', ianddController.getCertificatesManufacture)
router.get('/bottommanufacture', ianddController.getBottomManufacture)

//I+D alliances routes
router.get('/banneralliances',  ianddController.getAlliancesBanner)
router.get('/alliancelogos', ianddController.getLogos)