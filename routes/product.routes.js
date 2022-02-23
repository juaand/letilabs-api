
// routes/product.routes.js

const express = require("express")
const router = express.Router()
const routeGuard = require('../middlewares/auth.middleware')
const productController = require('../controllers/product.controller')

module.exports = router

router.post('/producstdata', productController.getProduct)
router.get('/listado-productos', productController.getProductsList)
router.get('/bannerproduct', productController.getProductBanner)
router.patch('/updatebannerproducts', routeGuard.isAuthenticated ,productController.updateProductBanner)
router.get('/bottomproduct', productController.getBottomProduct)
router.patch('/updateproductbottom', routeGuard.isAuthenticated, productController.updateBottomProduct)
router.get('/listadoproductosbanner', productController.getProductsBanner)
router.patch('/updatelistadoproductosbanner', routeGuard.isAuthenticated, productController.updateProductsBanner)
router.post('/productinfoform', productController.getProductInfo)