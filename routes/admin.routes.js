// routes/admin.routes.js

const express = require("express")
const router = express.Router()
const routeGuard = require('../middlewares/auth.middleware')
const adminController = require('../controllers/admin.controller')

module.exports = router

router.get('/farmvigdata', routeGuard.isAuthenticated, adminController.getFarmVigData)
router.get('/usinfodata', routeGuard.isAuthenticated, adminController.getUsInfo)
router.patch('/updateusinfodata', routeGuard.isAuthenticated, adminController.updateUsInfoData)