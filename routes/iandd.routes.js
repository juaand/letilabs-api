
// routes/iandd.routes.js

const express = require("express")
const router = express.Router()
const routeGuard = require('../middlewares/auth.middleware')
const ianddController = require('../controllers/iandd.controller')

module.exports = router

router.get('/bannerdataid',  ianddController.getBannerID)

router.get('/alliancelogos', ianddController.getLogos)

router.get('/allianceinfocards', ianddController.getInfoCards)