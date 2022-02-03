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
router.get('/usinfodata', adminController.getUsInfo)
router.patch('/updateusinfodata', routeGuard.isAuthenticated, adminController.updateUsInfoData)
router.get('/unidadesiniciodata', adminController.getUnidadesInicio)
router.get('/portfolioiniciodata', adminController.getPortfolioInicio)
router.get('/vadevecumdata', adminController.getVadevecumData)
router.patch('/updateportfoliodata', routeGuard.isAuthenticated, adminController.updatePortfolioData)
router.get('/farmacoiniciodata', adminController.getFarmacoInicio)
router.patch('/updatefarmacoiniciodata', routeGuard.isAuthenticated, adminController.updateFarmacoData)
router.get('/deleteunititem/:id', routeGuard.isAuthenticated, adminController.deleteUnitlItem)
router.patch('/updatevideodata', routeGuard.isAuthenticated, adminController.updateVideoData)
router.get('/videoiniciodata', adminController.getVideoData)
router.get('/homebottomdata', adminController.getHomeBottomData)


/////////////////////////////////////////////////////////////////////
////////////////////////// SOBRE NOSOTROS CRUD //////////////////////////////
/////////////////////////////////////////////////////////////////////

router.get('/timelineaboutusdata', adminController.getTimeLine)
router.get('/bannerdata', adminController.getBanner)
router.patch('/updatebannerdata', routeGuard.isAuthenticated, adminController.updateBannerData)
router.get('/marcandopautadata', adminController.getMarcandoPauta)
router.patch('/updatemarcandopautadata', routeGuard.isAuthenticated, adminController.updateMarcandoPautaData)
router.get('/megatdata', adminController.getMegat)
router.patch('/updatemegatdata', routeGuard.isAuthenticated, adminController.updateMegatData)
router.get('/galleryaboutusdata', adminController.getGallery)

/////////////////////////////////////////////////////////////////////
////////////////////////// NUESTRAS COMPAÑÍAS CRUD //////////////////////////////
/////////////////////////////////////////////////////////////////////

router.get('/bannerdataoc', adminController.getBannerOC)
router.patch('/updatebannerdataoc', routeGuard.isAuthenticated, adminController.updateBannerDataOC)
router.get('/ourcompaniesoc', adminController.getOurCompaniesOC)
router.patch('/updateourcompaniesoc', routeGuard.isAuthenticated, adminController.updateOurCompaniesOC)
router.get('/bannerproductsoc', adminController.getBannerProductsOC)
router.patch('/updatebannerproductsoc', routeGuard.isAuthenticated, adminController.updateBannerProductsOC)
router.get('/innovationoc', adminController.getInnovationOC)
router.patch('/updateinnovationoc', routeGuard.isAuthenticated, adminController.updateInnovationOC)
router.get('/careoc', adminController.getCareOC)
router.patch('/updatecareoc', routeGuard.isAuthenticated, adminController.updateCareOC)
router.get('/bottomoc', adminController.getBottomOC)
router.patch('/updatebottomoc', routeGuard.isAuthenticated, adminController.updateBottomOC)

//////////////////////////////////////////////////////////////////////
////////////////// NUESTRAS COMPAÑÍAS LETI CRUD //////////////////////
/////////////////////////////////////////////////////////////////////

router.get('/bannerdataocleti', adminController.getBannerOCLeti)
router.patch('/updatebannerdataocleti', routeGuard.isAuthenticated, adminController.updateBannerDataOCLeti)
router.get('/ourcompaniesinfocardsleti', adminController.getOurCompaniesInfoCardsLeti)
router.patch('/updateourcompaniesinfocardsleti', routeGuard.isAuthenticated, adminController.updateOurCompaniesInfoCardsLeti)
router.get('/ocequipoleti', adminController.getEquipoLetiOC)
router.patch('/updateocequipoleti', routeGuard.isAuthenticated, adminController.updateEquipoLetiOC)
router.get('/octimelineleti', adminController.getTimeLineLeti)
router.patch('/addoctimelineleti', routeGuard.isAuthenticated, adminController.addTimeLineLetiData)

//////////////////////////////////////////////////////////////////////
/////////////// NUESTRAS COMPAÑÍAS BIOCONTROLLED CRUD ////////////////
/////////////////////////////////////////////////////////////////////

router.get('/bannerdataocbiocontrolled', routeGuard.isAuthenticated, adminController.getBannerOCBiocontrolled)
router.patch('/updatebannerdataocbiocontrolled', routeGuard.isAuthenticated, adminController.updateBannerDataOCBiocontrolled)
router.get('/ourcompaniesinfocardsbiocontrolled', routeGuard.isAuthenticated, adminController.getOurCompaniesInfoCardsBiocontrolled)
router.patch('/updateourcompaniesinfocardsbiocontrolled', routeGuard.isAuthenticated, adminController.updateOurCompaniesInfoCardsBiocontrolled)
router.get('/ocequipobiocontrolled', routeGuard.isAuthenticated, adminController.getEquipoBiocontrolledOC)
router.patch('/updateocequipobiocontrolled', routeGuard.isAuthenticated, adminController.updateEquipoBiocontrolledOC)
router.get('/octimelinebiocontrolled', routeGuard.isAuthenticated, adminController.getTimeLineBiocontrolled)
router.patch('/addoctimelinebiocontrolled', routeGuard.isAuthenticated, adminController.addTimeLineBiocontrolledData)
router.get('/occarrouselbiocontrolled', routeGuard.isAuthenticated, adminController.getCarrouselBiocontrolled)
router.patch('/addoccarrouselbiocontrolled', routeGuard.isAuthenticated, adminController.addCarrouselBiocontrolledData)

//////////////////////////////////////////////////////////////////////
/////////////////// NUESTRAS COMPAÑÍAS GENVEN CRUD //////////////////
/////////////////////////////////////////////////////////////////////

router.get('/bannerdataocgenven', adminController.getBannerOCGenven)
router.patch('/updatebannerdataocgenven', routeGuard.isAuthenticated, adminController.updateBannerDataOCGenven)
router.get('/ourcompaniesvideogenven', adminController.getOurCompaniesVideoGenven)
router.patch('/updateourcompaniesvideogenven', routeGuard.isAuthenticated, adminController.updateOurCompaniesVideoGenven)
router.get('/ocequipogenven', routeGuard.isAuthenticated, adminController.getEquipoGenvenOC)
router.patch('/updateocequipogenven', routeGuard.isAuthenticated, adminController.updateEquipoGenvenOC)
router.get('/octimelinegenven', routeGuard.isAuthenticated, adminController.getTimeLineGenven)
router.patch('/addoctimelinegenven', routeGuard.isAuthenticated, adminController.addTimeLineGenvenData)
router.get('/ocproductosgenven', adminController.getProductosGenven)
router.patch('/addocproductosgenven', routeGuard.isAuthenticated, adminController.addProductosGenvenData)

//////////////////////////////////////////////////////////////////////
/////////////////// PRODUCTOS CRUD //////////////////
/////////////////////////////////////////////////////////////////////

router.post('/addprodtohomescreen/:id', routeGuard.isAuthenticated, adminController.addProductoToHomeCarrousel)

router.get('/producto/:id/delete', routeGuard.isAuthenticated, adminController.deleteProduct)

router.patch('/producto/:id/update', routeGuard.isAuthenticated, adminController.updateProduct)

router.post('/crear-producto', routeGuard.isAuthenticated, adminController.createProduct)

