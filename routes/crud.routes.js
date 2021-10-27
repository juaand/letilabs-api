// routes/crud.routes.js

const express = require("express")
const router = express.Router()
const upload = require("../config/cloudinary.config");
const routeGuard = require('../middlewares/auth.middleware')
const crudController = require('../controllers/crud.controller')

module.exports = router

router.get(
  '/:category/:id/delete',
  routeGuard.isAuthenticated,
  crudController.deleteSpot
)

router.get(
  '/:category/:id/update',
  routeGuard.isAuthenticated,
  crudController.editSpot
)

router.post(
  '/:category/:id/update',
  routeGuard.isAuthenticated,
  upload.array('pictures'),
  crudController.updateSpot
)

router.post(
  '/change-password/:id',
  routeGuard.isAuthenticated,
  crudController.changePassword
)

router.get('/edit-pet/:id', routeGuard.isAuthenticated, crudController.editPet)

router.post(
  '/edit-pet/:id',
  routeGuard.isAuthenticated,
  upload.single('avatar'),
  crudController.updatePet
)

router.get(
  '/user-profile/:id',
  routeGuard.isAuthenticated,
  crudController.editUser
)

router.get(
  '/user-profile/:id/delete',
  routeGuard.isAuthenticated,
  crudController.deleteUser
)

router.post(
  '/user-profile/:id/edit',
  routeGuard.isAuthenticated,
  upload.single('avatar'),
  crudController.saveEditedUser
)

router.get(
  '/spot/:id/new',
  routeGuard.isAuthenticated,
  crudController.createSpot
)

router.post(
  '/spot/:id/new',
  routeGuard.isAuthenticated,
  upload.array('pictures'),
  crudController.saveSpot
)

router.get('/pets/:id', routeGuard.isAuthenticated, crudController.addPet)

router.post(
  '/pets/:id',
  routeGuard.isAuthenticated,
  upload.single('avatar'),
  crudController.createPet
)

router.get('/delete/:id', routeGuard.isAuthenticated, crudController.deletePet)
