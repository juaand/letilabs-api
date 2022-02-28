// routes/vigilancia.routes.js

const express = require("express")
const router = express.Router()
const routeGuard = require('../middlewares/auth.middleware')
const vigilanciaController = require('../controllers/vigilancia.controller')

module.exports = router

router.get('/vigilancia/:id/delete', routeGuard.isAuthenticated, vigilanciaController.dropVigilanciaCard)
router.post('/vigilancia', routeGuard.isAuthenticated, vigilanciaController.addVigilancia)

