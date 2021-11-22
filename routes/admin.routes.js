// routes/admin.routes.js

const express = require("express")
const router = express.Router()
const routeGuard = require('../middlewares/auth.middleware')
const adminController = require('../controllers/admin.controller')

module.exports = router

router.get('/farmvigdata', routeGuard.isAuthenticated, adminController.getFarmVigData)
router.get('/usinfodata', routeGuard.isAuthenticated, adminController.getUsInfo)
router.patch('/updateusinfodata', routeGuard.isAuthenticated, adminController.updateUsInfoData)
router.get('/carouseliniciodata', routeGuard.isAuthenticated, adminController.getCarouselInicio)
router.get('/unidadesiniciodata', routeGuard.isAuthenticated, adminController.getUnidadesInicio)
router.get('/portfolioiniciodata', routeGuard.isAuthenticated, adminController.getPortfolioInicio)
router.patch('/updateportfoliodata', routeGuard.isAuthenticated, adminController.updatePortfolioData)
router.get('/farmacoiniciodata', routeGuard.isAuthenticated, adminController.getFarmacoInicio)
router.patch('/updatefarmacoiniciodata', routeGuard.isAuthenticated, adminController.updateFarmacoData)
router.get('/deletecaritem/:id', routeGuard.isAuthenticated, adminController.deleteCarouselItem)
router.get('/deleteunititem/:id', routeGuard.isAuthenticated, adminController.deleteUnitlItem)
