require('dotenv').config()

const createError = require('http-errors')
const express = require('express')
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

/**
 * Configure routes
 */
const adminRouter = require('./routes/admin.routes.js')
const authRouter = require('./routes/auth.routes.js')
const commentRouter = require('./routes/comment.routes.js')
const crudRouter = require('./routes/crud.routes.js')
const editorRouter = require('./routes/editor.routes')
const indexRouter = require('./routes/index.routes')
const mapRouter = require('./routes/map.routes')
const navRouter = require('./routes/nav.routes')
const singleRouter = require('./routes/single.routes')
const socialRouter = require('./routes/social.routes')
const spotRouter = require('./routes/spot.routes')
const blogRouter = require('./routes/blog.routes')
app.use('/', adminRouter)
app.use('/', authRouter)
app.use('/', commentRouter)
app.use('/', crudRouter)
app.use('/', editorRouter)
app.use('/', indexRouter)
app.use('/', mapRouter)
app.use('/', navRouter)
app.use('/', singleRouter)
app.use('/', socialRouter)
app.use('/', spotRouter)
app.use('/', blogRouter)


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

  data.message = error.message
  res.json(data)
})

/** 
 * Listen on provided port
 */
const port = normalizePort(process.env.PORT || '3010')
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
