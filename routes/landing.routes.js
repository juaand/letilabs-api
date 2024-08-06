// routes/landing.routes.js

const express = require("express")
const router = express.Router()
const routeGuard = require('../middlewares/auth.middleware')
const landingController = require('../controllers/landing.controller')

module.exports = router


router.get('/getbioletisanbanner', landingController.getBioletisanBanner)
router.get('/getbioletisangoals', landingController.getBioletisanGoals)
router.get('/getbioletisaninfo', landingController.getBioletisanInfo)
router.get('/getbioletisantech', landingController.getBioletisanTech)
router.get('/getbioletisanplaces', landingController.getBioletisanPlaces)
router.get('/getfaq', landingController.getFaq)
router.get('/getfaqitems', landingController.getFaqItems)
router.get('/getnewsbioletisan', landingController.getNewsBioletisan)
router.get('/getbioletisannewsitems', landingController.getBioletisanNewsItems)
router.get('/getsocialbioletisan', landingController.getBioletisanSocial)
router.patch('/updatebioletisanbanner', routeGuard.isAuthenticated, landingController.updateBioletisanBannerData)
router.patch('/updategoaldata', routeGuard.isAuthenticated, landingController.updateBioletosanGoalData)
router.get('/deletegoalitem/:id', routeGuard.isAuthenticated, landingController.deleteBioletisanGoalItem)
router.patch('/updatebioletisangoalstitle', routeGuard.isAuthenticated, landingController.updateBioletisanGoalsTitle)
router.post('/createbioletisangoal', routeGuard.isAuthenticated, landingController.createBioletisanGoal)
router.patch('/updateinfodata', routeGuard.isAuthenticated, landingController.updateBioletosanInfoData)
router.get('/deleteinfoitem/:id', routeGuard.isAuthenticated, landingController.deleteBioletisanInfoItem)
router.patch('/updatebioletisaninfotitle', routeGuard.isAuthenticated, landingController.updateBioletisanInfoTitle)
router.patch('/updatebioletisaninfosubtitle', routeGuard.isAuthenticated, landingController.updateBioletisanInfoSubTitle)
router.post('/createbioletisaninfo', routeGuard.isAuthenticated, landingController.createBioletisanInfo)
router.patch('/updatebioletisantechinfo', routeGuard.isAuthenticated, landingController.updateBioletisanTechInfo)
