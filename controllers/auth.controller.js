// controllers/auth.controllers.js
const mongoose = require("mongoose")
const bcryptjs = require('bcryptjs')
const saltRounds = 10
const User = require('../models/user.model')
const createError = require("http-errors")


const Stripe = require("stripe")
const stripe = new Stripe(process.env.STRIPE_SECRET)

const nodemailer = require("../config/mailer.config")

module.exports.doLogin = (req, res, next) => {
  const {email, password} = req.body
  const googleUserID = req.body.googleId
  console.log(googleUserID)
  
  if (!email || !password) {
    throw createError(400, "Missing credentials")
  }

  User.findOne({email: email})
    .then((user) => {
      if (!user) {
        throw createError(404, "User not found, please try again")
      } else if (user.activation.active === false) {
        throw createError(404, "User is not active, please check your email")
      } else {
        return user
          .checkPassword(password)
          .then((match) => {
            if (!match) {
              throw createError(400, "Invalid password, please try again")
            } else {
              req.session.user = user
              if (user.role === "Guest") {
                res.status(201).json(user)
              }
            }
          })
          .catch(next)
      }
    })
    .catch(next)
}

module.exports.doGoogleLogin = (req, res, next) => {
  const {responsed} = req.body
  console.log(responsed)
  const googleUserId = req.body.responsed.googleId

  if(googleUserId) {
    User.findOne({ 'social.google': googleUserId})
      .then((user) => {
        if (user) {
          req.session.user = user
              if (user.role === "Guest") {
                res.status(201).json(user)
              }
        } else {
          const newUser = new User({
            name: responsed.name,
            username: responsed.email.split('@')[0],
            email: responsed.email,
            avatar: responsed.imageUrl,
            bio: "",
            password:
              responsed.googleId + Math.random().toString(36).substring(7),
            social: {
              google: responsed.googleId
            }
          })
          bcryptjs
          .genSalt(saltRounds)
          .then((salt) => bcryptjs.hash(password, salt))
          newUser
            .save()
            .then((user) => {
              req.session.user = user
              if (user.role === "Guest") {
                res.status(201).json(user)
              }
            })
            .catch((err) => next(err))
        }
      })
      .catch((err) => next(err))
  } else if (!email || !password) {
    throw createError(400, "Missing credentials")
  }

}

module.exports.getRegister = (req, res, next) => {
  const user = req.session.currentUser
  if (user) {
    res.redirect('/')
  } else {
    res.render('auth/register', {
      title: 'Register here',
      category: 'register'
    })
  }
}

module.exports.postRegister = (req, res, next) => {
  const {username, email, avatar, password} = req.body
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
        avatar: `${process.env.CLOUDINARY_SECURE}/${userParams.avatar}`,
        password: req.body.password,
        bio: userParams.bio
      })
    })
    .then((user) => {
      nodemailer.sendValidationEmail(
        user.email,
        user.activation.token,
        user.name
      )
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

module.exports.getToken = (req, res, next) => {
  User.findOne({'activation.token': req.params.token})
    .then((user) => {
      if (user) {
        user.activation.active = true
        user
          .save()
          .then((user) => {
            res.render('auth/login', {
              message: 'Your account has been activated, log in below!',
              category: 'login'
            })
          })
          .catch((e) => next)
      } else {
        res.render('auth/login', {
          error: {
            validation: {
              message: 'Invalid link',
              category: 'login'
            }
          }
        })
      }
    })
    .catch((e) => next)
}

module.exports.doLogout = (req, res, next) => {
  req.session.destroy()
  res.status(204).json({message: "Bye! Come back soon!"})
}
