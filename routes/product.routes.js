
// routes/product.routes.js

const express = require("express")
const router = express.Router()
const routeGuard = require('../middlewares/auth.middleware')
const productController = require('../controllers/product.controller')

module.exports = router

router.post('/producstdata', productController.getProduct)

router.get('/listado-productos', productController.getProductsList)