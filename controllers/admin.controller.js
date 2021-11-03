// controllers/admin.controllers.js

const User = require('../models/user.model')
const Home = require('../models/home/home.model')
const Navbar = require('../models/navbar/navbar.model')
const Footer = require('../models/footer/footer.model')


module.exports.getAdmin = (req, res, next) => {
  const user = req.session.currentUser

  if (user.role === 'Admin') {
    const users = User.find()
    const home = Home.find()
    const navbar = Navbar.find()
    const footer = Footer.find()

    Promise.all([users, home, navbar, footer])
      .then((values) => {
        res.render('admin/edit', {
          profiles: values[0],
          home: values[1],
          navbar: values[2],
          footer: values[3],
          title: 'letilab | admin page',
          admin: true
        })
      })
      .catch((error) => next(error))
  } else {
    res.redirect('/')
  }
}

module.exports.getAdminSpots = (req, res, next) => {
  const user = req.session.currentUser
  if (user.role === 'Admin') {
    Spot.find()
      .populate('creatorId')
      .then((spots) => {
        res.render('admin/spots', {
          spots,
          title: 'mappet | admin page',
          category: 'spots',
          admin: true
        })
      })
      .catch((error) => next(error))
  }
}

module.exports.getAdminUsers = (req, res, next) => {
  const user = req.session.currentUser

  const profiles = User.find()
  const adminProfiles = User.find({ role: 'Admin' })
  const editorProfiles = User.find({ role: 'Editor' })

  if (user.role === 'Admin') {
    Promise.all([profiles, adminProfiles, editorProfiles])
      .then((users) => {
        res.render('admin/users', {
          profiles: users[0],
          adminprofiles: users[1],
          editorprofiles: users[2],
          title: 'mappet | admin page',
          category: 'users',
          admin: true
        })
      })
      .catch((error) => next(error))
  }
}

module.exports.getAdminPets = (req, res, next) => {
  const user = req.session.currentUser
  if (user.role === 'Admin') {
    Pet.find()
      .populate('creatorId')
      .then((pets) => {
        res.render('admin/pets', {
          pets,
          title: 'mappet | admin page',
          category: 'pets',
          admin: true
        })
      })
      .catch((error) => next(error))
  }
}

module.exports.getAdminComments = (req, res, next) => {
  const user = req.session.currentUser
  if (user.role === 'Admin') {
    Comment.find()
      .populate('authorId')
      .populate('spotId')
      .then((comments) => {
        const badwords = ['Such', 'Voluptate', 'Eveniet']
        let result = []

        badwords.forEach((bw) => {
          comments.forEach((com) => {
            if (com.verify === false && com.content.includes(bw)) {
              //console.log(com)
              result.push(com)
            }
          })
        })

        res.render('admin/comments', {
          comments,
          title: 'mappet | Admin page',
          category: 'comments',
          admin: true,
          result
        })
      })
      .catch((error) => next(error))
  }
}

module.exports.getAdminStatistics = (req, res, next) => {
  const user = req.session.currentUser
  if (user.role === 'Admin') {
    res.render('admin/statistics', {
      title: 'mappet | Admin page',
      category: 'statistics',
      admin: true
    })
  }
}

module.exports.getSpotsData = (req, res, next) => {
  const user = req.session.currentUser
  if (user.role === 'Admin') {
    Spot.find()
      .then((spots) => {
        res.json(spots)
      })
      .catch((error) => next(error))
  } else {
    res.redirect('/')
  }
}

module.exports.getUsersData = (req, res, next) => {
  const user = req.session.currentUser
  if (user.role === 'Admin') {
    User.find()
      .then((profiles) => {
        res.json(profiles)
      })
      .catch((error) => next(error))
  } else {
    res.redirect('/')
  }
}

module.exports.getPetsData = (req, res, next) => {
  const user = req.session.currentUser
  if (user.role === 'Admin') {
    Pet.find()
      .then((pets) => {
        res.json(pets)
      })
      .catch((error) => next(error))
  } else {
    res.redirect('/')
  }
}

module.exports.getCommentsData = (req, res, next) => {
  const user = req.session.currentUser
  if (user.role === 'Admin') {
    Comment.find()
      .then((comments) => {
        res.json(comments)
      })
      .catch((error) => next(error))
  } else {
    res.redirect('/')
  }
}
