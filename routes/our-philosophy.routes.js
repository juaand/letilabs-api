
// routes/iandd.routes.js

const express = require("express")
const router = express.Router()
const routeGuard = require('../middlewares/auth.middleware')
const ourPhilosophyController = require('../controllers/ourphilosophy.controller')

module.exports = router

//our philosophy routes
router.get('/bannerourphilosophy', ourPhilosophyController.getBannerOP)
router.patch('/updatebannerourphilosophy', routeGuard.isAuthenticated, ourPhilosophyController.updateBannerOP)
router.get('/ourphilosophyinfocards', ourPhilosophyController.getInfoCardsOP)
router.get('/ourphilosophyinfocards/:id/delete', routeGuard.isAuthenticated, ourPhilosophyController.deleteInfoCardOP)
router.patch('/updateourphilosophyinfocards', routeGuard.isAuthenticated, ourPhilosophyController.updateInfoCardsOP)
router.get('/ourphilosophyletter', ourPhilosophyController.getLetterOP)
router.get('/updateourphilosophyletter', ourPhilosophyController.updateLetterOP)
router.get('/bottomourphilosophy', ourPhilosophyController.getBottomOP)
router.get('/updatebottomourphilosophy', ourPhilosophyController.updateBottomOP)