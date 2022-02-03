
// routes/iandd.routes.js

const express = require("express")
const router = express.Router()
const routeGuard = require('../middlewares/auth.middleware')
const ianddController = require('../controllers/iandd.controller')

module.exports = router

//I+D routes
router.get('/bannerdataid',  ianddController.getBannerID)
router.get('/idinfocards', ianddController.getInfoCards)

//I+D alliances routes
router.get('/alliancelogos', ianddController.getLogos)