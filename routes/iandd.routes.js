
// routes/iandd.routes.js

const express = require("express")
const router = express.Router()
const routeGuard = require('../middlewares/auth.middleware')
const ianddController = require('../controllers/iandd.controller')

module.exports = router

//I+D routes
router.get('/bannerdataid', ianddController.getBannerID)
router.patch('/updatebannerdataid', routeGuard.isAuthenticated, ianddController.updateBannerID)
router.get('/idinfocards', ianddController.getInfoCards)
router.get('/updateidinfocards', ianddController.updateInfoCards)
router.get('/idgoals', ianddController.getGoals)
router.get('/updateidgoals', ianddController.updateGoals)
router.get('/idbottom', ianddController.getBottom)
router.get('/updateidbottom', ianddController.updateBottomID)

//I+D tech routes
router.get('/bannertech',  ianddController.getTechBannerID)
router.get('/updatebannertech',  ianddController.updateTechBanner)
router.get('/videotech', ianddController.getVideoTech)
router.get('/updatevideodatatech',  ianddController.updateTechVideo)
router.get('/carrouseltech', ianddController.getCarrouselTech)
router.get('/updatecarrouseltech',  ianddController.updateTechCarrousel)
router.get('/maptech', ianddController.getMapTech)
router.get('/updatemapdatatech',  ianddController.updateTechMap)
router.get('/bottomtech', ianddController.getBottomTech)
router.get('/updatebottomtech', ianddController.updateBottomTech)

//I+D manufacture routes
router.get('/bannermanufacture',  ianddController.getManufactureBanner)
router.get('/updatebannermanufacture',  ianddController.updateManufactureBanner)
router.get('/carrouselmanufacture', ianddController.getCarrouselManufacture)
router.get('/updatecarrouselmanufacture', ianddController.updateCarrouselManufacture)
router.get('/certificatesmanufacture', ianddController.getCertificatesManufacture)
router.get('/updatecertificatesmanufacture', ianddController.updateCertificatesManufacture)
router.get('/bottommanufacture', ianddController.getBottomManufacture)
router.get('/updatebottommanufacture', ianddController.updateBottomManufacture)

//I+D alliances routes
router.get('/banneralliances',  ianddController.getAlliancesBanner)
router.patch('/updatebanneralliances', routeGuard.isAuthenticated, ianddController.updateAlliancesBanner)
router.get('/alliancelogos', ianddController.getLogosAlliance)
router.get('/updatealliancelogos', ianddController.updateLogosAlliance)
router.get('/allianceform', ianddController.getFormAlliance)
router.get('/updateallianceform', ianddController.updateFormAlliance)
router.get('/bottomalliances', ianddController.getBottomAlliances)
router.get('/updatebottomalliances', ianddController.updateBottomAlliances)