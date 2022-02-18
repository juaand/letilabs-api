
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
router.patch('/updatebannermanufacture', routeGuard.isAuthenticated, ianddController.updateManufactureBanner)
router.post('/updatetitleproccess', routeGuard.isAuthenticated, ianddController.updateTitleProccess)
router.get('/carrouselmanufacture', ianddController.getCarrouselManufacture)
router.patch('/updatecarrouselmanufacture', routeGuard.isAuthenticated, ianddController.updateCarrouselManufacture)
router.get('/deleteproccess/:id', routeGuard.isAuthenticated, ianddController.deleteProccess)
router.get('/certificatesmanufacture', ianddController.getCertificatesManufacture)
router.get('/updatecertificatesmanufacture', ianddController.updateCertificatesManufacture)
router.get('/bottommanufacture', ianddController.getBottomManufacture)
router.get('/updatebottommanufacture', ianddController.updateBottomManufacture)

//I+D alliances routes
router.get('/banneralliances',  ianddController.getAlliancesBanner)
router.patch('/updatebanneralliances', routeGuard.isAuthenticated, ianddController.updateAlliancesBanner)
router.get('/alliancelogos', ianddController.getLogosAlliance)
router.post('/createalliance', routeGuard.isAuthenticated, ianddController.createAlly)
router.post('/updatealliancelogostitle', routeGuard.isAuthenticated, ianddController.updateLogosAllianceTitle)
router.get('/alliancelogos/:id/delete', routeGuard.isAuthenticated, ianddController.deleteLogoAlliance)
router.get('/allianceform', ianddController.getFormAlliance)
router.post('/updateallianceform', routeGuard.isAuthenticated, ianddController.updateFormAlliance)
router.get('/bottomalliances', ianddController.getBottomAlliances)
router.patch('/updatebottomalliances', routeGuard.isAuthenticated, ianddController.updateBottomAlliances)