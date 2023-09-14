// routes/vigilancia.routes.js

const express = require("express")
const router = express.Router()
const routeGuard = require('../middlewares/auth.middleware')
const seoController = require('../controllers/seo.controller')

module.exports = router

router.get('/seodata', seoController.getSeoData)
router.patch('/updateseo', routeGuard.isAuthenticated, seoController.updateSeoData)
router.get('/pixels', seoController.getPixelData)
router.patch('/updatepixels', routeGuard.isAuthenticated, seoController.updatePixelData)



