// controllers/iandd.controllers.js
const AllianceLogos = require('../models/IAD/alianzas/alianzaLogosCarrousel.model')
const AllianceInfoCards = require('../models/IAD/IDcomponents/infoCardsID.model')
const BannerID = require('../models/IAD/IDcomponents/bannerID.model')
const GoalsId = require('../models/IAD/IDcomponents/objetivosID.model')
const BottomId = require('../models/IAD/IDcomponents/bottomCtaID.model')
const BannerTech = require('../models/IAD/tecnologia/bannerTecnologiaID.model')
const VideoTech = require('../models/IAD/tecnologia/videoTecnologiaID.model')
const CarrouselTech = require('../models/IAD/tecnologia/carrouselTecnologiaID.model')
const MapTech = require('../models/IAD/tecnologia/mapTecnologiaID.model')
const BottomTech = require('../models/IAD/tecnologia/bottomCtaTecnologiaID.model')
const BannerManufacture = require('../models/IAD/manufactura/bannerManufacturaID.model')
const CarouselManufacture = require('../models/IAD/manufactura/manufacturaCarrousel.model')
const CertificateManufacture = require('../models/IAD/manufactura/certificadoManufacturaID.model')
const BottomManufacture = require('../models/IAD/manufactura/bottomCtaManufacturaID.model')
const BannerAlliances = require('../models/IAD/alianzas/bannerAlianzasID.model')
const FormAlliances = require('../models/IAD/alianzas/contribucionAlianzasID.model')
const BottomAlliances = require('../models/IAD/alianzas/bottomCtaAlianzasID.model')

//admin I+D routes
module.exports.getBannerID = (req, res, next) => {
  BannerID.find()
    .then((data) => {
      res.status(201).json(data[0])
    })
    .catch(next)
}

module.exports.updateBannerID = (req, res, next) => {
  const userRole = req.session.user.role
  const {title, description, imgURL, id} = req.body


  if (userRole === 'Admin') {
    BannerID.findByIdAndUpdate(id, req.body, {new: true})
      .then((data) => {
        res.status(201).json(data)
      })
      .catch(next)
  } else {
    req.session.destroy()
    res.status(204).json({message: '¡No tiene suficientes privilegios para realizar esta acción!'})
  }
}

module.exports.getInfoCards = (req, res, next) => {
  AllianceInfoCards.find()
    .then(response => {
      res.status(201).json(response)
    })
    .catch(next)
}

module.exports.updateInfoCards = (req, res, next) => {
  const userRole = req.session.user.role
  const {picPath, info, btn, title, id} = req.body


  if (userRole === 'Admin') {
    AllianceInfoCards.findByIdAndUpdate(id, req.body, {new: true})
      .then(() => {
        AllianceInfoCards.find()
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

module.exports.getGoals = (req, res, next) => {
  GoalsId.find()
    .then(response => {
      res.status(201).json(response)
    })
    .catch(next)
}

module.exports.updateGoalsTitle = (req, res, next) => {
  const userRole = req.session.user.role
  const {title} = req.body

  if (userRole === 'Admin') {
    GoalsId.find()
      .then(response => {
        response.forEach(element => {
          element.title = title
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

module.exports.updateGoals = (req, res, next) => {
  const userRole = req.session.user.role
  const {title, desc, name, id} = req.body


  if (userRole === 'Admin') {
    GoalsId.findByIdAndUpdate(id, req.body, {new: true})
      .then((data) => {
        GoalsId.find()
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

module.exports.deleteGoal = (req, res, next) => {
  const userRole = req.session.user.role

  if (userRole === 'Admin') {
    GoalsId.findByIdAndDelete(req.params.id)
      .then(() => {
        GoalsId.find()
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

module.exports.createGoal = (req, res, next) => {
  const userRole = req.session.user.role
  const {title, name, desc} = req.body

  if (userRole === 'Admin') {
    GoalsId.create(req.body)
      .then(() => {
        GoalsId.find()
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

module.exports.getBottom = (req, res, next) => {
  BottomId.find()
    .then(response => {
      res.status(201).json(response)
    })
    .catch(next)
}

module.exports.updateBottomID = (req, res, next) => {
  const userRole = req.session.user.role
  const {title, img, url, btn, id} = req.body


  if (userRole === 'Admin') {
    BottomId.findByIdAndUpdate(id, req.body, {new: true})
      .then((data) => {
        res.status(201).json(data)
      })
      .catch(next)
  } else {
    req.session.destroy()
    res.status(204).json({message: '¡No tiene suficientes privilegios para realizar esta acción!'})
  }
}

//admin I+D tech routes
module.exports.getTechBannerID = (req, res, next) => {
  BannerTech.find()
    .then(response => {
      res.status(201).json(response)
    })
    .catch(next)
}

module.exports.updateTechBanner = (req, res, next) => {
  const userRole = req.session.user.role
  const {title, description, imgURL, id} = req.body


  if (userRole === 'Admin') {
    BannerTech.findByIdAndUpdate(id, req.body, {new: true})
      .then((data) => {
        res.status(201).json(data)
      })
      .catch(next)
  } else {
    req.session.destroy()
    res.status(204).json({message: '¡No tiene suficientes privilegios para realizar esta acción!'})
  }
}

module.exports.getVideoTech = (req, res, next) => {
  VideoTech.find()
    .then(response => {
      res.status(201).json(response)
    })
    .catch(next)
}

module.exports.updateTechVideo = (req, res, next) => {
  const userRole = req.session.user.role
  const {title, videoURL, id} = req.body


  if (userRole === 'Admin') {
    VideoTech.findByIdAndUpdate(id, req.body, {new: true})
      .then((data) => {
        res.status(201).json(data)
      })
      .catch(next)
  } else {
    req.session.destroy()
    res.status(204).json({message: '¡No tiene suficientes privilegios para realizar esta acción!'})
  }
}

module.exports.getCarrouselTech = (req, res, next) => {
  CarrouselTech.find()
    .then(response => {
      res.status(201).json(response)
    })
    .catch(next)
}

module.exports.updateTechCarrousel = (req, res, next) => {
  const userRole = req.session.user.role
  const {title, imgURL, description, mainTitle, id} = req.body


  if (userRole === 'Admin') {
    CarrouselTech.findByIdAndUpdate(id, req.body, {new: true})
      .then(() => {
        CarrouselTech.find()
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

module.exports.createTechCarrousel = (req, res, next) => {
  const userRole = req.session.user.role
  const {title, imgURL, description, mainTitle} = req.body

  if (userRole === 'Admin') {
    CarrouselTech.create(req.body)
      .then(() => {
        CarrouselTech.find()
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

module.exports.updateTechCarrouselTitle = (req, res, next) => {
  const userRole = req.session.user.role
  const {mainTitle} = req.body

  if (userRole === 'Admin') {
    CarrouselTech.find()
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

module.exports.deleteTechCarrousel = (req, res, next) => {
  const userRole = req.session.user.role

  if (userRole === 'Admin') {
    CarrouselTech.findByIdAndDelete(req.params.id)
      .then(() => {
        CarrouselTech.find()
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

module.exports.getMapTech = (req, res, next) => {
  MapTech.find()
    .then(response => {
      res.status(201).json(response)
    })
    .catch(next)
}

module.exports.updateTechMap = (req, res, next) => {
  const userRole = req.session.user.role
  const {description, mapURL, id} = req.body


  if (userRole === 'Admin') {
    MapTech.findByIdAndUpdate(id, req.body, {new: true})
      .then((data) => {
        res.status(201).json(data)
      })
      .catch(next)
  } else {
    req.session.destroy()
    res.status(204).json({message: '¡No tiene suficientes privilegios para realizar esta acción!'})
  }
}

module.exports.getBottomTech = (req, res, next) => {
  BottomTech.find()
    .then(response => {
      res.status(201).json(response)
    })
    .catch(next)
}

module.exports.updateBottomTech = (req, res, next) => {
  const userRole = req.session.user.role
  const {title, img, buttonLink, buttonTitle, id} = req.body


  if (userRole === 'Admin') {
    BottomTech.findByIdAndUpdate(id, req.body, {new: true})
      .then(() => {
        BottomTech.find()
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

//admin I+D manufacture routes
module.exports.getManufactureBanner = (req, res, next) => {
  BannerManufacture.find()
    .then(response => {
      res.status(201).json(response)
    })
    .catch(next)
}

module.exports.updateManufactureBanner = (req, res, next) => {
  const userRole = req.session.user.role
  const {title, description, imgURL, id} = req.body


  if (userRole === 'Admin') {
    BannerManufacture.findByIdAndUpdate(id, req.body, {new: true})
      .then((data) => {
        res.status(201).json(data)
      })
      .catch(next)
  } else {
    req.session.destroy()
    res.status(204).json({message: '¡No tiene suficientes privilegios para realizar esta acción!'})
  }
}

module.exports.updateTitleProccess = (req, res, next) => {
  const userRole = req.session.user.role
  const {title} = req.body

  if (userRole === 'Admin') {
    CarouselManufacture.find()
      .then(response => {
        response.forEach(element => {
          element.title = title
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

module.exports.getCarrouselManufacture = (req, res, next) => {
  CarouselManufacture.find()
    .then(response => {
      res.status(201).json(response)
    })
    .catch(next)
}

module.exports.createProccess = (req, res, next) => {
  const userRole = req.session.user.role
  const {title, info} = req.body

  if (userRole === 'Admin') {
    CarouselManufacture.create(req.body)
      .then(() => {
        CarouselManufacture.find()
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

module.exports.updateCarrouselManufacture = (req, res, next) => {
  const userRole = req.session.user.role
  const {info, title, id} = req.body


  if (userRole === 'Admin') {
    CarouselManufacture.findByIdAndUpdate(id, req.body, {new: true})
      .then(() => {
        CarouselManufacture.find()
          .then(response => {
            res.status(201).json(response)
          })
          .catch(next)
      })
      .catch(next)
  } else {
    req.session.destroy()
    res.status(204).json({message: '¡No tiene suficientes privilegios para realizar esta acción!'})
  }
}

module.exports.deleteProccess = (req, res, next) => {
  const userRole = req.session.user.role
  const id = req.params.id

  if (userRole === 'Admin') {
    CarouselManufacture.findByIdAndDelete(id)
      .then(() => {
        CarouselManufacture.find()
          .then(data => {
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

module.exports.deleteCertificate = (req, res, next) => {
  const userRole = req.session.user.role
  const id = req.params.id

  if (userRole === 'Admin') {
    CertificateManufacture.findByIdAndDelete(id)
      .then(() => {
        CertificateManufacture.find()
          .then(data => {
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

module.exports.getCertificatesManufacture = (req, res, next) => {
  CertificateManufacture.find()
    .then(response => {
      res.status(201).json(response)
    })
    .catch(next)
}

module.exports.updateCertificatesManufacture = (req, res, next) => {
  const userRole = req.session.user.role
  const {title, desc} = req.body

  if (userRole === 'Admin') {
    CertificateManufacture.find()
      .then(response => {
        response.forEach(element => {
          element.title = title
          element.desc = desc
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

module.exports.createCertificatesManufacture = (req, res, next) => {
  const userRole = req.session.user.role
  const {title, desc, imgURL} = req.body

  if (userRole === 'Admin') {
    CertificateManufacture.create(req.body)
      .then(() => {
        CertificateManufacture.find()
          .then(response => {
            res.status(201).json(response)
          })
          .catch(next)
      })
      .catch(next)
  } else {
    req.session.destroy()
    res.status(204).json({message: '¡No tiene suficientes privilegios para realizar esta acción!'})
  }
}

module.exports.getBottomManufacture = (req, res, next) => {
  BottomManufacture.find()
    .then(response => {
      res.status(201).json(response)
    })
    .catch(next)
}

module.exports.updateBottomManufacture = (req, res, next) => {
  const userRole = req.session.user.role
  const {title, img, buttonLink, buttonTitle, id} = req.body


  if (userRole === 'Admin') {
    BottomManufacture.findByIdAndUpdate(id, req.body, {new: true})
      .then(() => {
        BottomManufacture.find()
          .then(response => {
            res.status(201).json(response)
          })
      })
      .catch(next)
  } else {
    req.session.destroy()
    res.status(204).json({message: '¡No tiene suficientes privilegios para realizar esta acción!'})
  }
}

//admin I+D alliances routes
module.exports.getAlliancesBanner = (req, res, next) => {
  BannerAlliances.find()
    .then(response => {
      res.status(201).json(response)
    })
    .catch(next)
}

module.exports.updateAlliancesBanner = (req, res, next) => {
  const userRole = req.session.user.role
  const {title, description, imgURL, id} = req.body

  if (userRole === 'Admin') {
    BannerAlliances.findByIdAndUpdate(id, req.body, {new: true})
      .then((data) => {
        res.status(201).json(data)
      })
      .catch(next)
  } else {
    req.session.destroy()
    res.status(204).json({message: '¡No tiene suficientes privilegios para realizar esta acción!'})
  }
}

module.exports.getLogosAlliance = (req, res, next) => {
  AllianceLogos.find()
    .then(response => {
      res.status(201).json(response)
    })
    .catch(next)
}

module.exports.deleteLogoAlliance = (req, res, next) => {
  const userRole = req.session.user.role
  const id = req.params.id

  if (userRole === 'Admin') {
    AllianceLogos.findByIdAndDelete(id)
      .then(() => {
        AllianceLogos.find()
          .then(response => {
            res.status(201).json(response)
          })
          .catch(next)
      })
      .catch(next)
  } else {
    req.session.destroy()
    res.status(204).json({message: '¡No tiene suficientes privilegios para realizar esta acción!'})
  }
}

module.exports.createAlly = (req, res, next) => {
  const userRole = req.session.user.role
  const {title, picPath} = req.body

  console.log(picPath)

  if (userRole === 'Admin') {
    AllianceLogos.create(req.body)
      .then(() => {
        AllianceLogos.find()
          .then(response => {
            res.status(201).json(response)
          })
          .catch(next)
      })
      .catch(next)
  } else {
    req.session.destroy()
    res.status(204).json({message: '¡No tiene suficientes privilegios para realizar esta acción!'})
  }
}

module.exports.updateLogosAllianceTitle = (req, res, next) => {
  const userRole = req.session.user.role
  const {title} = req.body

  if (userRole === 'Admin') {
    AllianceLogos.find()
      .then(response => {
        response.forEach(element => {
          element.title = title
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

module.exports.getFormAlliance = (req, res, next) => {
  FormAlliances.find()
    .then(response => {
      res.status(201).json(response)
    })
    .catch(next)
}

module.exports.updateFormAlliance = (req, res, next) => {
  const userRole = req.session.user.role
  const {title, phone, desc, email, id} = req.body

  if (userRole === 'Admin') {
    FormAlliances.findByIdAndUpdate(id, req.body, {new: true})
      .then((data) => {
        res.status(201).json(data)
      })
      .catch(next)
  } else {
    req.session.destroy()
    res.status(204).json({message: '¡No tiene suficientes privilegios para realizar esta acción!'})
  }
}

module.exports.getBottomAlliances = (req, res, next) => {
  BottomAlliances.find()
    .then(response => {
      res.status(201).json(response)
    })
    .catch(next)
}

module.exports.updateBottomAlliances = (req, res, next) => {
  const userRole = req.session.user.role
  const {title, img, buttonLink, buttonTitle, id} = req.body


  if (userRole === 'Admin') {
    BottomAlliances.findByIdAndUpdate(id, req.body, {new: true})
      .then(() => {
        BottomAlliances.find()
          .then(response => {
            res.status(201).json(response)
          })
          .catch(next)
      })
      .catch(next)
  } else {
    req.session.destroy()
    res.status(204).json({message: '¡No tiene suficientes privilegios para realizar esta acción!'})
  }
}