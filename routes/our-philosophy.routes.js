
// routes/iandd.routes.js

const express = require("express")
const router = express.Router()
const routeGuard = require('../middlewares/auth.middleware')
const ourPhilosophyController = require('../controllers/ourphilosophy.controller')

module.exports = router

//our philosophy routes
router.get('/bannerourphilosophy', ourPhilosophyController.getBannerOP)