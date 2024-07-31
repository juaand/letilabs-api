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