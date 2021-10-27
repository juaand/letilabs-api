const passport = require('passport')

module.exports.googleCallback = (req, res, next) => {
  const passportController = passport.authenticate('google', (error, user) => {
    if (error) {
      next(error)
    } else {
      req.session.currentUser = user
      if (req.session.currentUser.role === "Admin") {
        res.redirect('/admin')
      } else {
        res.redirect('/')
      }
    }
  })

  passportController(req, res, next)
}
