
// routes/product.routes.js

const express = require("express")
const router = express.Router()
const routeGuard = require('../middlewares/auth.middleware')
const productController = require('../controllers/product.controller')
const adminController = require("../controllers/admin.controller");

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
router.get('/productinfoformdata', routeGuard.isAuthenticated, productController.getProductInfoData)
router.get('/productinfoform/:id/delete', routeGuard.isAuthenticated, productController.dropProductInfo)
router.post('/prospect/:id', productController.productProspect)
router.post('/product/:id', productController.productActivePrinciple)
router.post('/ficha-tecnica/:id', productController.productDataSheet)
router.get('/linesdata', productController.getLines)
router.get('/sublinesdata', productController.getSubLines)
router.post('/createline', routeGuard.isAuthenticated, productController.createLine)
router.post('/createsubline', routeGuard.isAuthenticated, productController.createSubLine)
router.get('/line/:id/delete', routeGuard.isAuthenticated, productController.deleteLine)
router.get('/subline/:id/delete', routeGuard.isAuthenticated, productController.deleteSubLine)
router.get('/suppliers', productController.getSuppliers)
router.patch('/updatesuppliers', productController.updateSuppliers)