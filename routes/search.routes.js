// routes/search.routes.js

const express = require("express")
const router = express.Router()
const searchController = require('../controllers/search.controller')

module.exports = router

router.get('/search/:search', searchController.searchContent)
router.post('/buscarnoticia', searchController.searchNews)