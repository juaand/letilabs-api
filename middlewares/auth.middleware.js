const createError = require('http-errors');

module.exports.isAuthenticated = (req, _, next) => {
  console.log('[auth.middleware.js] isAuthenticated -> req.session:', JSON.stringify(req.session))
  console.log('[auth.middleware.js] isAuthenticated -> req.session.user:', JSON.stringify(req.session.user))
  if (req.session.user) {
    next()
  } else {
    next(createError(401))
  }
}

module.exports.isNotAuthenticated = (req, _, next) => {
  if (req.session.user) {
    next(createError(403))
  } else {
    next()
  }
}