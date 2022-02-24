// controllers/therapeuticarea.controllers.js

const BannerTA = require('../models/home/areasterapeuticas/bannerAT.model')
const CarrouselTA = require('../models/home/areasterapeuticas/timeLineAT.model')
const BottomTA = require('../models/home/areasterapeuticas/bottomCtaAT.model')

//admin therapeutic area routes
module.exports.getBannerTA = (req, res, next) => {
  BannerTA.find()
    .then((data) => {
      res.status(201).json(data[0])
    })
    .catch(next)
}

module.exports.updateBannerTA = (req, res, next) => {
  const userRole = req.session.user.role
  const {description, imgURL, title, id} = req.body
  console.log(imgURL)


  if (userRole === 'Admin') {
    BannerTA.findByIdAndUpdate(id, req.body, {new: true})
      .then((data) => {
        res.status(201).json(data)
      })
      .catch(next)
  } else {
    req.session.destroy()
    res.status(204).json({message: '¡No tiene suficientes privilegios para realizar esta acción!'})
  }
}

module.exports.getCarrouselTA = (req, res, next) => {
  CarrouselTA.find()
    .then((data) => {
      res.status(201).json(data)
    })
    .catch(next)
}

module.exports.updateCarrouselTA = (req, res, next) => {
  const userRole = req.session.user.role
  const {title, mainTitle, desc, imgURL, id} = req.body


  if (userRole === 'Admin') {
    CarrouselTA.findByIdAndUpdate(id, req.body, {new: true})
      .then(() => {
        CarrouselTA.find()
          .then((data) => {
            res.status(201).json(data)
          })
          .catch(next)
      })
      .catch(next)
  } else {
    req.session.destroy()
    res.status(204).json({message: '¡No tiene suficientes privilegios para realizar esta acción!'})
  }
}

module.exports.updateTagalleryTitle = (req, res, next) => {
  const userRole = req.session.user.role
  const {mainTitle} = req.body

  if (userRole === 'Admin') {
    CarrouselTA.find()
      .then(response => {
        response.forEach(element => {
          element.mainTitle = mainTitle
          element.save()
        })
        res.status(201).json(response)
      })
      .catch(next)
  } else {
    req.session.destroy()
    res.status(204).json({message: '¡No tiene suficientes privilegios para realizar esta acción!'})
  }
}

module.exports.createCarrouselTA = (req, res, next) => {
  const userRole = req.session.user.role
  const {title, mainTitle, desc, imgURL} = req.body

  if (userRole === 'Admin') {
    CarrouselTA.create(req.body)
      .then((data) => {
        CarrouselTA.find()
          .then((data) => {
            res.status(201).json(data)
          })
          .catch(next)
      })
      .catch(next)
  } else {
    req.session.destroy()
    res.status(204).json({message: '¡No tiene suficientes privilegios para realizar esta acción!'})
  }
}

module.exports.dropCarrouselTA = (req, res, next) => {
  const userRole = req.session.user.role

  if (userRole === 'Admin') {
    CarrouselTA.findByIdAndDelete(req.params.id)
      .then(() => {
        CarrouselTA.find()
          .then((data) => {
            res.status(201).json(data)
          })
          .catch(next)
      })
      .catch(next)
  } else {
    req.session.destroy()
    res.status(204).json({message: '¡No tiene suficientes privilegios para realizar esta acción!'})
  }
}

module.exports.getBottomTA = (req, res, next) => {
  BottomTA.find()
    .then((data) => {
      res.status(201).json(data)
    })
    .catch(next)
}

module.exports.updateBottomTA = (req, res, next) => {
  const userRole = req.session.user.role
  const {title, buttonLink, buttonTitle, img, id} = req.body


  if (userRole === 'Admin') {
    BottomTA.findByIdAndUpdate(id, req.body, {new: true})
      .then(() => {
        BottomTA.find()
          .then((data) => {
            res.status(201).json(data)
          })
          .catch(next)
      })
      .catch(next)
  } else {
    req.session.destroy()
    res.status(204).json({message: '¡No tiene suficientes privilegios para realizar esta acción!'})
  }
}