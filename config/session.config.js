const session = require('express-session')
const MongoStore = require('connect-mongo')(session)
const mongoose = require('mongoose')
const SESSION_MAX_AGE_SECONDS = Number(process.env.SESSION_MAX_AGE_SECONDS) || 60 * 60 * 24 * 7


module.exports = session({
  secret: process.env.SESSION_SECRET || 'Grupoleti',
  resave: true,
  saveUninitialized: false,
  cookie: {
    sameSite: process.env.SESSION_SAMESITE || true,
    secure: process.env.SESSION_SECURE || false,
    httpOnly: true,
    maxAge: SESSION_MAX_AGE_SECONDS * 1000
  },
  store: new MongoStore({
    mongooseConnection: mongoose.connection,
    ttl: SESSION_MAX_AGE_SECONDS
  })
})

//LOCALHOST
//  module.exports = session({
//     secret: process.env.SESSION_SECRET || 'Grupoleti',
//     resave: true,
//     saveUninitialized: false,
//     cookie: {
//       secure: false,
//       httpOnly: true,
//       maxAge: SESSION_MAX_AGE_SECONDS * 1000
//     },
//     store: new MongoStore({
//       mongooseConnection: mongoose.connection,
//       ttl: SESSION_MAX_AGE_SECONDS
//     })
//   })

//HEROKU
  module.exports = session({
    secret: process.env.SESSION_SECRET || 'Grupoleti',
    resave: true,
    saveUninitialized: false,
    cookie: {
      sameSite: 'none',
      secure: process.env.SESSION_SECURE,
      httpOnly: true,
      maxAge: SESSION_MAX_AGE_SECONDS * 1000
    },
    store: new MongoStore({
      mongooseConnection: mongoose.connection,
      ttl: SESSION_MAX_AGE_SECONDS
    })
  })
  