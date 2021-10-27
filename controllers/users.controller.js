const Spot = require('../models/spot.model')
const User = require('../models/user.model')
const Pet = require('../models/pet.model')
const Blog = require('../models/blog.model')
const Like = require('../models/like.model')


module.exports.getUserSpots = (req, res, next) => {
  const id = req.params.id
  const user = User.findById(id)
  const pets = Pet.find({ creatorId: id })
  const spots = Spot.find({ creatorId: id })
    .populate('comments')
    .populate({
      path: 'comments',
      populate: {
        path: 'authorId',
        model: 'User'
      }
    })
    .populate('likes')

  Promise.all([user, pets, spots])
    .then((values) => {
      if (req.session.currentUser) {
        if (req.session.currentUser.role === 'Admin') {
          res.render('users/show-profile', {
            profile: values[0],
            pets: values[1],
            spots: values[2],
            title: `@${values[0].username} spots`,
            admin: true
          })
        } else if (id == req.session.currentUser._id) {
          const owner = true
          res.render('users/show-profile', {
            profile: values[0],
            pets: values[1],
            spots: values[2],
            title: `@${values[0].username} spots`,
            owner: owner
          })
        } else {
          res.render('users/show-profile', {
            profile: values[0],
            pets: values[1],
            spots: values[2],
            title: `@${values[0].username} spots`
          })
        }
      } else {
        res.render('users/show-profile', {
          profile: values[0],
          pets: values[1],
          spots: values[2],
          title: `@${values[0].username} spots`
        })
      }
    })
    .catch((error) => next(error))
}
