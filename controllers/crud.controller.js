// controller/crud.controller.js

const User = require('../models/user.model')
const Spot = require('../models/spot.model')
const Pet = require('../models/pet.model')
const Comment = require('../models/comment.model')
const bcryptjs = require('bcryptjs')
const saltRounds = 10
const fetch = require('node-fetch')

////////////////////////////////////////////////////////////////////////
//////////////////////////// RENDER USER ///////////////////////////////
////////////////////////////////////////////////////////////////////////

module.exports.editUser = (req, res, next) => {
  const id = req.params.id
  User.findById(id)
    .then((user) => {
      // res.json(user)
      const userId = req.session.currentUser._id
      if (req.session.currentUser.role === 'Admin') {
        res.render('users/update-profile', {
          user,
          title: `edit ${user.username}`,
          admin: true
        })
      } else if (userId === id) {
        res.render('users/update-profile', {
          user,
          title: `edit ${user.username}`
        })
      } else {
        req.session.destroy()
        res.render('auth/login', {
          message: 'Something is wrong with your user, please login again.'
        })
      }
    })
    .catch((error) => next(error))
}

////////////////////////////////////////////////////////////////////////
//////////////////////////// EDIT USER /////////////////////////////////
////////////////////////////////////////////////////////////////////////

module.exports.saveEditedUser = (req, res, next) => {
  const { avatar, bio, name, role } = req.body
  const id = req.params.id
  req.body.avatar = req.file ? req.file.filename : undefined
  if (req.body.avatar) {
    User.findByIdAndUpdate(id, {
      name: name,
      avatar: `${process.env.CLOUDINARY_SECURE}/${req.body.avatar}`,
      bio: bio,
      role: role
    })
      .then(() => {
        if (req.session.currentUser.role === 'Admin') {
          res.redirect('/admin/stats/users')
        } else {
          res.redirect(`/user-profile/${id}`)
        }
      })
      .catch((error) => next(error))
  } else {
    User.findByIdAndUpdate(id, {
      name: name,
      bio: bio,
      role: role
    })
      .then(() => {
        if (req.session.currentUser.role === 'Admin') {
          res.redirect('/admin/stats/users')
        } else {
          res.redirect(`/user-profile/${id}`)
        }
      })
      .catch((error) => next(error))
  }
}

////////////////////////////////////////////////////////////////////////
//////////////////////////// DELETE USER /////////////////////////////////
////////////////////////////////////////////////////////////////////////

module.exports.deleteUser = (req, res, next) => {
  const id = req.params.id
  User.findByIdAndDelete(id)
    .then(() => {
      if (req.session.currentUser.role === 'Admin') {
        res.redirect('/admin/stats/users')
      } else {
        req.session.destroy()
        res.redirect('/')
      }
    })
    .catch((error) => next(error))
}

////////////////////////////////////////////////////////////////////////
//////////////////////////// USER SPOTS ////////////////////////////////
////////////////////////////////////////////////////////////////////////

module.exports.createSpot = (req, res, next) => {
  res.render('spots/new-spot', { title: 'Mappet your spot!' })
}

module.exports.saveSpot = (req, res, next) => {
  const id = req.params.id
  const name = req.body.name
  const address = req.body.address
  const categories = req.body.categories

  if (!categories) {
    res.render('spots/new-spot', {
      title: 'Mappet your spot!',
      message: 'Please select at least one category'
    })
    return
  }

  if (!name) {
    res.render('spots/new-spot', {
      message: 'Please provide a name.',
      title: 'Mappet your spot!'
    })
    return
  }

  if (!address) {
    res.render('spots/new-spot', {
      message: 'Please provide an address.',
      title: 'Mappet your spot!'
    })
    return
  }

  const urlAddress = `https://maps.googleapis.com/maps/api/geocode/json?address=${req.body.address}&key=AIzaSyBa0-rQW4YzCsHAuNfsOjUXMsDOpSpPBZs`

  fetch(urlAddress.normalize('NFD').replace(/[\u0300-\u036f]/g, ''))
    .then((response) => response.json())
    .then((myJson) => {
      return Spot.create({
        lat: myJson.results[0].geometry.location.lat,
        lng: myJson.results[0].geometry.location.lng,
        name: req.body.name,
        content: req.body.content,
        creatorId: id,
        pictures: req.files ? req.files.map(
              (file) => `${process.env.CLOUDINARY_SECURE}/${file.filename}`
            )
          : '',
        url: req.body.url,
        // category: [...new Set(req.body.categories)],
        category: req.body.categories,
        subCategory: req.body.subcategories,
        address: req.body.address,
        city: req.body.city,
        zipCode: req.body.zipcode,
        days: req.body.days,
        open: req.body.open,
        close: req.body.close,
        instagram: req.body.instagram,
        facebook: req.body.facebook,
        email: req.body.email,
        phone: req.body.phone
      })
        .then(() => {
          res.redirect(`/`)
        })
        .catch((error) => next(error))
    })
}

////////////////////////////////////////////////////////////////////////
//////////////////////////// EDIT SPOTS ////////////////////////////////
////////////////////////////////////////////////////////////////////////

module.exports.editSpot = (req, res, next) => {
  const id = req.params.id

  Spot.findById(id)
    .populate('creatorId')
    .then((spot) => {
      const userId = req.session.currentUser._id
      const spotOwnerId = spot.creatorId._id
      const user = req.session.currentUser

      if (user) {
        if (req.session.currentUser.role === 'Admin') {
          res.render('spots/edit', {
            spot,
            title: `Edit ${spot.name}`,
            admin: true
          })
        } else if (spotOwnerId == userId) {
          res.render('spots/edit', {
            spot,
            title: `Edit ${spot.name}`
          })
        } else {
          req.session.destroy()
          res.render('auth/login', {
            message: 'Something is wrong with your user, please login again.'
          })
        }
      } else {
        req.session.destroy()
        res.render('auth/login', {
          message: 'Something is wrong with your user, please login again.'
        })
      }
    })
    .catch((error) => next(error))
}

module.exports.updateSpot = (req, res, next) => {
  const id = req.params.id
  const category = req.params.category
  if (req.body.pictures) {
    Spot.findByIdAndUpdate(id, {
      name: req.body.name,
      content: req.body.content,
      creatorId: req.session.currentUser._id,
      pictures: req.files ? req.files.map(
            (file) => `${process.env.CLOUDINARY_SECURE}/${file.filename}`
          )
        : '',
      url: req.body.url,
      category: req.body.categories,
      address: req.body.address,
      city: req.body.city,
      zipCode: req.body.zipcode,
      days: req.body.days,
      open: req.body.open,
      close: req.body.close,
      instagram: req.body.instagram,
      facebook: req.body.facebook,
      email: req.body.email,
      phone: req.body.phone
    })
      .then(() => {
        if (req.session.currentUser.role === 'Admin') {
          res.redirect('/admin/stats/spots')
        } else {
          res.redirect(`/${category}/${id}`)
        }
      })
      .catch((error) => next(error))
  } else {
    Spot.findByIdAndUpdate(id, {
      name: req.body.name,
      content: req.body.content,
      creatorId: req.session.currentUser._id,
      url: req.body.url,
      category: req.body.categories,
      address: req.body.address,
      city: req.body.city,
      zipCode: req.body.zipcode,
      days: req.body.days,
      open: req.body.open,
      close: req.body.close,
      instagram: req.body.instagram,
      facebook: req.body.facebook,
      email: req.body.email,
      phone: req.body.phone
    })
      .then(() => {
        if (req.session.currentUser.role === 'Admin') {
          res.redirect('/admin/stats/spots')
        } else {
          res.redirect(`/${category}/${id}`)
        }
      })
      .catch((error) => next(error))
  }
}

module.exports.deleteSpot = (req, res, next) => {
  const id = req.params.id
  Spot.findByIdAndDelete(id)
    .then(() => {
      if (req.session.currentUser.role === 'Admin') {
        res.redirect('/admin/stats/spots')
      } else {
        res.redirect('/')
      }
    })
    .catch((error) => next(error))
}

////////////////////////////////////////////////////////////////////////
////////////////////////////// ADD PET /////////////////////////////////
////////////////////////////////////////////////////////////////////////
module.exports.addPet = (req, res, next) => {
  res.render('pets/add-pet', { title: 'add your pet' })
}

module.exports.createPet = (req, res, next) => {
  const id = req.params.id
  req.body.avatar = req.file ? req.file.filename : undefined
  Pet.create({
    creatorId: id,
    animal: req.body.animal,
    name: req.body.name,
    avatar: `${process.env.CLOUDINARY_SECURE}/${req.body.avatar}`,
    age: req.body.age,
    breed: req.body.breed
  }).then((pet) => {
    res.render('pets/add-pet', {
      title: 'add your pet',
      message: 'Pet added sucefully'
    })
  })
}

////////////////////////////////////////////////////////////////////////
////////////////////////////// CRUD PET ////////////////////////////////
////////////////////////////////////////////////////////////////////////

module.exports.editPet = (req, res, next) => {
  const petId = req.params.id
  const user = req.session.currentUser

  Pet.findById(petId)
    .then((pet) => {
      if (user.role === 'Admin') {
        res.render('pets/edit-pet', { pet, title: 'Edit pet', admin: true })
      } else {
        res.render('pets/edit-pet', { pet, title: 'Edit pet' })
      }
    })
    .catch((error) => next(error))
}

module.exports.updatePet = (req, res, next) => {
  const petId = req.params.id
  req.body.avatar = req.file ? req.file.filename : undefined
  if (req.body.avatar) {
    Pet.findByIdAndUpdate(petId, {
      name: req.body.name,
      animal: req.body.animal,
      avatar: `${process.env.CLOUDINARY_SECURE}/${req.body.avatar}`,
      age: req.body.age,
      breed: req.body.breed
    })
      .then((pet) => {
        if (req.session.currentUser.role === 'Admin') {
          res.redirect('/admin/stats/pets')
        } else {
          res.redirect(`/user/${pet.creatorId._id}`)
        }
      })
      .catch((error) => next(error))
  } else {
    Pet.findByIdAndUpdate(petId, {
      name: req.body.name,
      animal: req.body.animal,
      age: req.body.age,
      breed: req.body.breed
    })
      .then((pet) => {
        if (req.session.currentUser.role === 'Admin') {
          res.redirect('/admin/stats/pets')
        } else {
          res.redirect(`/user/${pet.creatorId._id}`)
        }
      })
      .catch((error) => next(error))
  }
}

module.exports.deletePet = (req, res, next) => {
  const petId = req.params.id
  Pet.findByIdAndDelete(petId)
    .then(() => {
      const user = req.session.currentUser
      if (user.role === 'Admin') {
        res.redirect('/admin/stats/pets')
      } else {
        res.redirect(`/user/${user._id}`)
      }
    })
    .catch((error) => next(error))
}

module.exports.changePassword = (req, res, next) => {
  const id = req.params.id
  const userPass = req.session.currentUser.password
  const regex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/
  if (!regex.test(req.body.newpassword)) {
    res.status(500).render('users/update-profile', {
      message:
        'Password needs to have at least 6 chars and must contain at least one number, one lowercase and one uppercase letter.'
    })
    return
  }
  bcryptjs
    .compare(req.body.password, userPass)
    .then((match) => {
      if (match) {
        bcryptjs
          .genSalt(saltRounds)
          .then((salt) => bcryptjs.hash(req.body.newpassword, salt))
          .then((newHashedPassword) => {
            // res.json(id)
            return User.findByIdAndUpdate(id, {
              password: newHashedPassword
            })
          })
          .then(() => {
            res.render(`users/update-profile`, {
              message: 'password changed successfully'
            })
          })
          .catch((error) => next(error))
      } else {
        res.render(`users/update-profile`, {
          message: 'current password is invalid'
        })
      }
    })
    .catch((error) => next(error))
}
