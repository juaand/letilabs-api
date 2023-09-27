require('dotenv').config()

const createError = require('http-errors')
const express = require('express')
const helmet = require('helmet');
const path = require('path')
const logger = require('morgan')
const cookieParser = require('cookie-parser')
const mongoose = require('mongoose')

require('./config/db.config')
const session = require('./config/session.config')
const cors = require('./config/cors.config')

/**
 * Configure express
 */
const app = express()

if (app.get('env') === 'production') {
  app.set('trust proxy', 1)
}

const cspOptions = {
  directives: {
    defaultSrc: ["'self'", 'https://grupoleti.com'],
    scriptSrc: [
      "'self'",
      'https://grupoleti.com',
      'http://localhost:3000',
      'http://localhost:3001',
      'https://apis.google.com',
      'https://fonts.googleapis.com',
      'https://firebasestorage.googleapis.com',
      'https://www.googletagmanager.com',
      'https://cdn.jsdelivr.net',
      'https://cdn.tiny.cloud',
      'https://connect.facebook.net',
      'https://cdnjs.cloudflare.com',
      "'unsafe-inline'",
    ],
    styleSrc: ["'self'", "'unsafe-inline'", 'https://grupoleti.com', 'https://fonts.googleapis.com', 'https://cdn.tiny.cloud'],
    connectSrc: [
      "'self'",
      'https://grupoleti-api.herokuapp.com',
      'http://localhost:3000',
      'http://localhost:3001',
      'grupoleti.appspot.com',
      'https://www.tiny.cloud',
      'grupoleti.firebaseapp.com',
      '*.firebaseio.com',
      '*.firebaseapp.com',
      'https://firebasestorage.googleapis.com',
      'https://cdn.tiny.cloud',
      'https://cdn.tiny.cloud',
      'https://region1.google-analytics.com',
    ],
    imgSrc: [
      "'self'",
      'https://grupoleti.com',
      'https://firebasestorage.googleapis.com',
      'https://sp.tinymce.com',
      'data:image/svg+xml',
    ],
    fontSrc: ["'self'", 'https://grupoleti.com', 'https://fonts.gstatic.com', 'https://cdnjs.cloudflare.com', 'https://cdn.tiny.cloud'],
    frameSrc: ["'self'"],
    mediaSrc: ["'self'", 'https://firebasestorage.googleapis.com'],
    objectSrc: ["'none'"],
  },
};

app.use(helmet.contentSecurityPolicy(cspOptions));
app.use(cors)
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))
app.use(session)

app.use((req, _, next) => {
  req.currentUser = req.session.user
  next()
})

app.use((req, res, next) => {
  res.header('X-Content-Type-Options', 'nosniff');
  next();
});

/**
 * Configure routes
 */
const adminRouter = require('./routes/admin.routes.js')
const authRouter = require('./routes/auth.routes.js')
const vigilanciaRouter = require('./routes/vigilancia.routes')
const contentRouter = require('./routes/content.routes')
const searchRouter = require('./routes/search.routes')
const productRouter = require('./routes/product.routes')
const newsRouter = require('./routes/news.routes')
const ianddRouter = require('./routes/iandd.routes')
const ourPhilosophyRouter = require('./routes/our-philosophy.routes')
const therapeuticAreasRouter = require('./routes/therapeutic-areas.routes')
const seoRouter = require('./routes/seo.routes')
const workWithUsRouter = require('./routes/letipeople.routes')
app.use('/', adminRouter)
app.use('/', authRouter)
app.use('/', vigilanciaRouter)
app.use('/', contentRouter)
app.use('/', searchRouter)
app.use('/', productRouter)
app.use('/', newsRouter)
app.use('/', ianddRouter)
app.use('/', ourPhilosophyRouter)
app.use('/', therapeuticAreasRouter)
app.use('/', seoRouter)
app.use('/', workWithUsRouter)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404))
})

// error handler
app.use(function (error, req, res, next) {
  console.error('-' * 1000)
  console.error(error)

  res.status(error.status || 500)

  const data = {}

  if (error instanceof mongoose.Error.ValidationError) {
    res.status(400)

    for (field of Object.keys(error.errors)) {
      error.errors[field] = error.errors[field].message
    }

    data.errors = error.errors
  } else if (error instanceof mongoose.Error.CastError) {
    error = createError(404, 'Resource not found')
  }

  data.message = data?.errors?.name
  res.json(data)
})

/** 
 * Listen on provided port
 */
const port = normalizePort(process.env.PORT || '3001')
app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})

// Helper functions

/**
 * Normalize a port into a number, string, or false.
 */
function normalizePort(val) {
  const port = parseInt(val, 10)

  if (isNaN(port)) {
    // named pipe
    return val
  }

  if (port >= 0) {
    // port number
    return port
  }

  return false
}
