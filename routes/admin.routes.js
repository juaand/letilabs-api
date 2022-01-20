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
router.get('/carouseliniciodata', routeGuard.isAuthenticated, adminController.getCarouselInicio)
router.get('/unidadesiniciodata', adminController.getUnidadesInicio)
router.get('/portfolioiniciodata', adminController.getPortfolioInicio)
router.get('/vadevecumdata', adminController.getVadevecumData)
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

//////////////////////////////////////////////////////////////////////
////////////////// NUESTRAS COMPAÑÍAS LETI CRUD //////////////////////
/////////////////////////////////////////////////////////////////////

router.get('/bannerdataocleti', routeGuard.isAuthenticated, adminController.getBannerOCLeti)
router.patch('/updatebannerdataocleti', routeGuard.isAuthenticated, adminController.updateBannerDataOCLeti)
router.get('/ourcompaniesinfocardsleti', routeGuard.isAuthenticated, adminController.getOurCompaniesInfoCardsLeti)
router.patch('/updateourcompaniesinfocardsleti', routeGuard.isAuthenticated, adminController.updateOurCompaniesInfoCardsLeti)
router.get('/ocequipoleti', routeGuard.isAuthenticated, adminController.getEquipoLetiOC)
router.patch('/updateocequipoleti', routeGuard.isAuthenticated, adminController.updateEquipoLetiOC)
router.get('/octimelineleti', routeGuard.isAuthenticated, adminController.getTimeLineLeti)
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

router.get('/bannerdataocgenven', routeGuard.isAuthenticated, adminController.getBannerOCGenven)
router.patch('/updatebannerdataocgenven', routeGuard.isAuthenticated, adminController.updateBannerDataOCGenven)
router.get('/ourcompaniesvideogenven', routeGuard.isAuthenticated, adminController.getOurCompaniesVideoGenven)
router.patch('/updateourcompaniesvideogenven', routeGuard.isAuthenticated, adminController.updateOurCompaniesVideoGenven)
router.get('/ocequipogenven', routeGuard.isAuthenticated, adminController.getEquipoGenvenOC)
router.patch('/updateocequipogenven', routeGuard.isAuthenticated, adminController.updateEquipoGenvenOC)
router.get('/octimelinegenven', routeGuard.isAuthenticated, adminController.getTimeLineGenven)
router.patch('/addoctimelinegenven', routeGuard.isAuthenticated, adminController.addTimeLineGenvenData)
router.get('/ocproductosgenven', routeGuard.isAuthenticated, adminController.getProductosGenven)
router.patch('/addocproductosgenven', routeGuard.isAuthenticated, adminController.addProductosGenvenData)

