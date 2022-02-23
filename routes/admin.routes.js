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
router.patch('/updateunidadesiniciodata', adminController.updateUnidadesInicio)
router.get('/portfolioiniciodata', adminController.getPortfolioInicio)
router.get('/deleteportfolioitem/:id', routeGuard.isAuthenticated, adminController.deletePortfolioItem)
router.patch('/updateportfolioiniciodata', routeGuard.isAuthenticated, adminController.updatePortfolioInicio)
router.post('/createportfolioiniciodata', routeGuard.isAuthenticated, adminController.createPortfolioInicio)
router.post('/updatetitleportfolioiniciodata', routeGuard.isAuthenticated, adminController.updateTitlePortfolioInicio)
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
router.patch('/updatetimelineaboutus', routeGuard.isAuthenticated, adminController.updateTimeLineAboutUs)
router.get('/bannerdata', adminController.getBanner)
router.patch('/updatebannerdata', routeGuard.isAuthenticated, adminController.updateBannerData)
router.get('/marcandopautadata', adminController.getMarcandoPauta)
router.patch('/updatemarcandopautadata', routeGuard.isAuthenticated, adminController.updateMarcandoPautaData)
router.get('/megatdata', adminController.getMegat)
router.patch('/updatemegatdata', routeGuard.isAuthenticated, adminController.updateMegatData)
router.get('/galleryaboutusdata', adminController.getGallery)
router.patch('/updategalleryaboutus', routeGuard.isAuthenticated, adminController.updateGalleryAboutUs)


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
router.post('/addoctimelineleti', routeGuard.isAuthenticated, adminController.addTimeLineLetiData)
router.patch('/updateoctimelineleti', routeGuard.isAuthenticated, adminController.updateTimeLineLetiData)

//////////////////////////////////////////////////////////////////////
/////////////// NUESTRAS COMPAÑÍAS BIOCONTROLLED CRUD ////////////////
/////////////////////////////////////////////////////////////////////

router.get('/bannerdataocbiocontrolled', adminController.getBannerOCBiocontrolled)
router.patch('/updatebannerdataocbiocontrolled', routeGuard.isAuthenticated, adminController.updateBannerDataOCBiocontrolled)
router.get('/ourcompaniesinfocardsbiocontrolled', adminController.getOurCompaniesInfoCardsBiocontrolled)
router.patch('/updateourcompaniesinfocardsbiocontrolled', routeGuard.isAuthenticated, adminController.updateOurCompaniesInfoCardsBiocontrolled)
router.get('/ocequipobiocontrolled', adminController.getEquipoBiocontrolledOC)
router.patch('/updateocequipobiocontrolled', routeGuard.isAuthenticated, adminController.updateEquipoBiocontrolledOC)
router.get('/octimelinebiocontrolled', adminController.getTimeLineBiocontrolled)
router.post('/addoctimelinebiocontrolled', routeGuard.isAuthenticated, adminController.addTimeLineBiocontrolledData)
router.patch('/updateoctimelinebiocontrolled', routeGuard.isAuthenticated, adminController.updateTimeLineBiocontrolledData)
router.get('/occarrouselbiocontrolled', adminController.getCarrouselBiocontrolled)
router.post('/addoccarrouselbiocontrolled', routeGuard.isAuthenticated, adminController.addCarrouselBiocontrolledData)
router.patch('/updateoccarrouselbiocontrolled', routeGuard.isAuthenticated, adminController.updateCarrouselBiocontrolledData)

//////////////////////////////////////////////////////////////////////
/////////////////// NUESTRAS COMPAÑÍAS GENVEN CRUD //////////////////
/////////////////////////////////////////////////////////////////////

router.get('/bannerdataocgenven', adminController.getBannerOCGenven)
router.patch('/updatebannerdataocgenven', routeGuard.isAuthenticated, adminController.updateBannerDataOCGenven)
router.get('/ourcompaniesvideogenven', adminController.getOurCompaniesVideoGenven)
router.patch('/updateourcompaniesvideogenven', routeGuard.isAuthenticated, adminController.updateOurCompaniesVideoGenven)
router.get('/ocequipogenven', adminController.getEquipoGenvenOC)
router.patch('/updateocequipogenven', routeGuard.isAuthenticated, adminController.updateEquipoGenvenOC)
router.get('/octimelinegenven', adminController.getTimeLineGenven)
router.patch('/addoctimelinegenven', routeGuard.isAuthenticated, adminController.addTimeLineGenvenData)
router.get('/ocproductosgenven', adminController.getProductosGenven)
router.post('/addocproductosgenven', routeGuard.isAuthenticated, adminController.addProductosGenvenData)
router.patch('/updateocproductosgenven', routeGuard.isAuthenticated, adminController.updateProductosGenvenData)


//////////////////////////////////////////////////////////////////////
/////////////////// INVESTIGACIÓN Y DESARROLLO CRUD //////////////////
/////////////////////////////////////////////////////////////////////


//////////////////////////////////////////////////////////////////////
//////////////// PROPOSITOS Y RESPOSNSABILIDAD CRUD //////////////////
/////////////////////////////////////////////////////////////////////

router.get('/bannerdatapurpose', adminController.getBannerPurpose)
router.patch('/updatebannerdatapurpose', routeGuard.isAuthenticated, adminController.updateBannerDataPurpose)
router.get('/purposevideo', adminController.getVideoPurpose)
router.patch('/updatepurposevideo', routeGuard.isAuthenticated, adminController.updateVideoPurpose)
router.get('/timelinepurpose', adminController.getTimeLinePurpose)
router.post('/addtimelinepurpose', routeGuard.isAuthenticated, adminController.addTimeLinePurposeData)
router.get('/deletetimelinepurpose/:id', routeGuard.isAuthenticated, adminController.deleteTimeLinePurposeData)
router.patch('/updateTimeLinePurpose', routeGuard.isAuthenticated, adminController.updateTimeLinePurpose)
router.get('/titlefarmdatapurpose', adminController.getTitleFarmPurpose)
router.patch('/updatetitlefarmdatapurpose', routeGuard.isAuthenticated, adminController.updateTitleFarmDataPurpose)

//////////////////////////////////////////////////////////////////////
////////////////////////// NUESTRA GENTE /////////////////////////////
/////////////////////////////////////////////////////////////////////

router.get('/bannerdataourpeople', adminController.getBannerOurPeople)
router.patch('/updatebannerdataourpeople', routeGuard.isAuthenticated, adminController.updateBannerDataOurPeople)
router.get('/ourpeopleinfocards', adminController.getInfoCardsOurPeople)
router.patch('/updateourpeopleinfocards', routeGuard.isAuthenticated, adminController.updateInfoCardsOurPeople)
router.get('/equipoourpeople', adminController.getEquipoOurPeople)
router.patch('/updateourpeopleequipo', routeGuard.isAuthenticated, adminController.updateEquipoOurPeople)
router.get('/bottomourpeople', adminController.getBottomOurPeople)
router.patch('/updatebottomourpeople', routeGuard.isAuthenticated, adminController.updateBottomOurPeople)
router.get('/carrerasdata', adminController.getCarreras)
router.patch('/updatecarrerasdata', routeGuard.isAuthenticated, adminController.updateCarrerasData)
router.get('/ourpeopleinfocard/:id/delete', routeGuard.isAuthenticated, adminController.deleteOurPeopleInfoCard)
router.post('/createteam', routeGuard.isAuthenticated, adminController.createTeam)
router.get('/bannerdatateams', adminController.getBannerTeams)
router.patch('/updatebannerdatateams', routeGuard.isAuthenticated, adminController.updateBannerTeams)


//////////////////////////////////////////////////////////////////////
/////////////////////////// PRODUCTOS CRUD ///////////////////////////
/////////////////////////////////////////////////////////////////////

router.post('/addprodtohomescreen/:id', routeGuard.isAuthenticated, adminController.addProductoToHomeCarrousel)

router.get('/producto/:id/delete', routeGuard.isAuthenticated, adminController.deleteProduct)

router.patch('/producto/:id/update', routeGuard.isAuthenticated, adminController.updateProduct)

router.post('/crear-producto', routeGuard.isAuthenticated, adminController.createProduct)

