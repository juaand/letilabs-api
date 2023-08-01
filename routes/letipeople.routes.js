// routes/vigilancia.routes.js

const express = require("express")
const router = express.Router()
const letiPeopleController = require('../controllers/letipeople.controller')
const routeGuard = require('../middlewares/auth.middleware')

module.exports = router

router.post('/workwithus', letiPeopleController.addWorkWithUs)
router.post('/sendemailform', letiPeopleController.sendEmailForm)
router.get('/workwithusinfodata', routeGuard.isAuthenticated, letiPeopleController.getWorkWithUsInfoData)
router.get('/workwithus/:id/delete', routeGuard.isAuthenticated, letiPeopleController.dropWorkWithUsCard)
