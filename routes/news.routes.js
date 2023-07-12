
// routes/news.routes.js

const express = require("express")
const router = express.Router()
const routeGuard = require('../middlewares/auth.middleware')
const newsController = require('../controllers/news.controller')

module.exports = router

router.get('/newsdata', newsController.getNews)
router.get('/tagsdata', newsController.getTags)
router.post('/createtag', routeGuard.isAuthenticated, newsController.createTag)
router.post('/createnews', routeGuard.isAuthenticated, newsController.createNews)
router.get('/tag/:id/delete', routeGuard.isAuthenticated, newsController.deleteTag)
router.get('/newstitles', newsController.getNewsTitles)
router.patch('/updatenewstitles', routeGuard.isAuthenticated, newsController.updateNewsTitles)
router.post('/getrandomnews', newsController.getRandomNews)
router.post('/addoutstandingnews/:id', newsController.addOutstandingNews)
router.get('/news/:id/delete', routeGuard.isAuthenticated, newsController.deleteNews)
router.patch('/updatenews/:id', routeGuard.isAuthenticated, newsController.updateNews)
router.get(`/noticia/:id`, newsController.getNewsById)