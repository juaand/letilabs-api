// routes/admin.routes.js

const express = require("express")
const router = express.Router()
const routeGuard = require('../middlewares/auth.middleware')
const adminController = require('../controllers/admin.controller')

module.exports = router

/////////////////////////////////////////////////////////////////////
////////////////////////// INICIO CRUD //////////////////////////////
/////////////////////////////////////////////////////////////////////

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

/////////////////////////////////////////////////////////////////////
////////////////////////// SOBRE NOSOTROS CRUD //////////////////////////////
/////////////////////////////////////////////////////////////////////

router.get('/timelineaboutusdata', routeGuard.isAuthenticated, adminController.getTimeLine)
router.get('/bannerdata', routeGuard.isAuthenticated, adminController.getBanner)
router.patch('/updatebannerdata', routeGuard.isAuthenticated, adminController.updateBannerData)
router.get('/marcandopautadata', routeGuard.isAuthenticated, adminController.getMarcandoPauta)
router.patch('/updatemarcandopautadata', routeGuard.isAuthenticated, adminController.updateMarcandoPautaData)
router.get('/megatdata', routeGuard.isAuthenticated, adminController.getMegat)
router.patch('/updatemegatdata', routeGuard.isAuthenticated, adminController.updateMegatData)
router.get('/galleryaboutusdata', routeGuard.isAuthenticated, adminController.getGallery)

/////////////////////////////////////////////////////////////////////
////////////////////////// NUESTRAS COMPAÑÍAS CRUD //////////////////////////////
/////////////////////////////////////////////////////////////////////

router.get('/bannerdataoc', routeGuard.isAuthenticated, adminController.getBannerOC)
router.patch('/updatebannerdataoc', routeGuard.isAuthenticated, adminController.updateBannerDataOC)
router.get('/ourcompaniesoc', routeGuard.isAuthenticated, adminController.getOurCompaniesOC)
router.patch('/updateourcompaniesoc', routeGuard.isAuthenticated, adminController.updateOurCompaniesOC)
router.get('/bannerproductsoc', routeGuard.isAuthenticated, adminController.getBannerProductsOC)
router.patch('/updatebannerproductsoc', routeGuard.isAuthenticated, adminController.updateBannerProductsOC)
router.get('/innovationoc', routeGuard.isAuthenticated, adminController.getInnovationOC)
router.patch('/updateinnovationoc', routeGuard.isAuthenticated, adminController.updateInnovationOC)
router.get('/careoc', routeGuard.isAuthenticated, adminController.getCareOC)
router.patch('/updatecareoc', routeGuard.isAuthenticated, adminController.updateCareOC)
router.get('/bottomoc', routeGuard.isAuthenticated, adminController.getBottomOC)
router.patch('/updatebottomoc', routeGuard.isAuthenticated, adminController.updateBottomOC)
