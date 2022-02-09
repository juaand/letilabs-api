
// routes/iandd.routes.js

const express = require("express")
const router = express.Router()
const routeGuard = require('../middlewares/auth.middleware')
const ourPhilosophyController = require('../controllers/ourphilosophy.controller')

module.exports = router

//our philosophy routes
router.get('/bannerourphilosophy', ourPhilosophyController.getBannerOP)
router.get('/updatebannerourphilosophy', ourPhilosophyController.updateBannerOP)
router.get('/ourphilosophyinfocards', ourPhilosophyController.getInfoCardsOP)
router.get('/updateourphilosophyinfocards', ourPhilosophyController.updateInfoCardsOP)
router.get('/ourphilosophyletter', ourPhilosophyController.getLetterOP)
router.get('/updateourphilosophyletter', ourPhilosophyController.updateLetterOP)
router.get('/bottomourphilosophy', ourPhilosophyController.getBottomOP)
router.get('/updatebottomourphilosophy', ourPhilosophyController.updateBottomOP)