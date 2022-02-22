
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
router.patch('/updateidinfocards', routeGuard.isAuthenticated, ianddController.updateInfoCards)
router.get('/idgoals', ianddController.getGoals)
router.patch('/updateidgoals', routeGuard.isAuthenticated, ianddController.updateGoals)
router.get('/idbottom', ianddController.getBottom)
router.get('/updateidbottom', ianddController.updateBottomID)

//I+D tech routes
router.get('/bannertech', ianddController.getTechBannerID)
router.patch('/updatebannertech', routeGuard.isAuthenticated, ianddController.updateTechBanner)
router.get('/videotech', ianddController.getVideoTech)
router.patch('/updatevideodatatech', routeGuard.isAuthenticated, ianddController.updateTechVideo)
router.get('/carrouseltech', ianddController.getCarrouselTech)
router.patch('/updatecarrouseltech', routeGuard.isAuthenticated, ianddController.updateTechCarrousel)
router.post('/updatetechcarrouseltit', routeGuard.isAuthenticated, ianddController.updateTechCarrouselTitle)
router.post('/createtechcarrousel', routeGuard.isAuthenticated, ianddController.createTechCarrousel)
router.get('/carrouseltech/:id/delete', routeGuard.isAuthenticated, ianddController.deleteTechCarrousel)
router.get('/maptech', ianddController.getMapTech)
router.patch('/updatemapdatatech', routeGuard.isAuthenticated, ianddController.updateTechMap)
router.get('/bottomtech', ianddController.getBottomTech)
router.patch('/updatebottomtech', routeGuard.isAuthenticated, ianddController.updateBottomTech)

//I+D manufacture routes
router.get('/bannermanufacture', ianddController.getManufactureBanner)
router.patch('/updatebannermanufacture', routeGuard.isAuthenticated, ianddController.updateManufactureBanner)
router.post('/updatetitleproccess', routeGuard.isAuthenticated, ianddController.updateTitleProccess)
router.get('/carrouselmanufacture', ianddController.getCarrouselManufacture)
router.post('/createproccess', routeGuard.isAuthenticated, ianddController.createProccess)
router.patch('/updatecarrouselmanufacture', routeGuard.isAuthenticated, ianddController.updateCarrouselManufacture)
router.get('/deleteproccess/:id', routeGuard.isAuthenticated, ianddController.deleteProccess)
router.get('/deletecertificate/:id', routeGuard.isAuthenticated, ianddController.deleteCertificate)
router.get('/certificatesmanufacture', ianddController.getCertificatesManufacture)
router.post('/updatecertificatesmanufacture', routeGuard.isAuthenticated, ianddController.updateCertificatesManufacture)
router.post('/createcertificatesmanufacture', routeGuard.isAuthenticated, ianddController.createCertificatesManufacture)
router.get('/bottommanufacture', ianddController.getBottomManufacture)
router.patch('/updatebottommanufacture', routeGuard.isAuthenticated, ianddController.updateBottomManufacture)

//I+D alliances routes
router.get('/banneralliances', ianddController.getAlliancesBanner)
router.patch('/updatebanneralliances', routeGuard.isAuthenticated, ianddController.updateAlliancesBanner)
router.get('/alliancelogos', ianddController.getLogosAlliance)
router.post('/createalliance', routeGuard.isAuthenticated, ianddController.createAlly)
router.post('/updatealliancelogostitle', routeGuard.isAuthenticated, ianddController.updateLogosAllianceTitle)
router.get('/alliancelogos/:id/delete', routeGuard.isAuthenticated, ianddController.deleteLogoAlliance)
router.get('/allianceform', ianddController.getFormAlliance)
router.post('/updateallianceform', routeGuard.isAuthenticated, ianddController.updateFormAlliance)
router.get('/bottomalliances', ianddController.getBottomAlliances)
router.patch('/updatebottomalliances', routeGuard.isAuthenticated, ianddController.updateBottomAlliances)