
// routes/news.routes.js

const express = require("express")
const router = express.Router()
const routeGuard = require('../middlewares/auth.middleware')
const newsController = require('../controllers/news.controller')

module.exports = router

router.get('/newsdata', newsController.getNews)