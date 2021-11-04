// controllers/auth.controllers.js
const mongoose = require("mongoose")
const bcryptjs = require('bcryptjs')
const saltRounds = 10
const User = require('../models/user.model')
const createError = require("http-errors")

module.exports.admin = (req, res, next) => {
  const {email, password} = req.body
  
  if (!email || !password) {
    throw createError(400, "Ingresa tu usuario y/o contraseña")
  }

  User.findOne({email: email})
    .then((user) => {
      if (!user) {
        throw createError(404, "Usuario no encontrado, por favor, intenta nuevamente")
      } else {
        return user
          .checkPassword(password)
          .then((match) => {
            if (!match) {
              throw createError(400, "Error de usuario y/o contraseña")
            } else {
              req.session.user = user
              if (user.role === "Admin") {
                res.status(201).json(user)
              }
            }
          })
          .catch(next)
      }
    })
    .catch(next)
}

module.exports.postRegister = (req, res, next) => {
  const {username, email, password} = req.body
  // res.json(req.body)
  if (!username || !email || !password) {
    res.render('auth/register', {
      errorMessage:
        'All fields are mandatory. Please provide your username, email, avatar and password.',
      category: 'register'
    })
    return
  }
  // make sure passwords are strong:
  const regex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/
  if (!regex.test(password)) {
    res.status(500).render('auth/register', {
      errorMessage:
        'Password needs to have at least 6 chars and must contain at least one number, one lowercase and one uppercase letter.',
      category: 'register'
    })
    return
  }
  bcryptjs
    .genSalt(saltRounds)
    .then((salt) => bcryptjs.hash(password, salt))
    .then(() => {
      const userParams = req.body
      userParams.avatar = req.file ? req.file.filename : 'image/upload/v1599776492/mappet/mappet_kggshx.png'
      return User.create({
        name: userParams.name,
        username,
        email,
        password: req.body.password,
      })
    })
    .then((userFromDB) => {
      console.log('Newly created user is: ', userFromDB)
      res.render('auth/login', {
        message: 'Check your email for activation'
      })
    })
    .catch((error) => {
      if (error instanceof mongoose.Error.ValidationError) {
        res.render('auth/register', {error: error.errors, user})
      } else if (error.code === 11000) {
        // error when duplicated user
        res.render('auth/register', {
          user,
          error: {
            email: {
              message: 'user already exists'
            }
          }
        })
      } else {
        next(error)
      }
    })
    .catch(next)
}

module.exports.doLogout = (req, res, next) => {
  req.session.destroy()
  res.status(204).json({message: "Bye! Come back soon!"})
}
