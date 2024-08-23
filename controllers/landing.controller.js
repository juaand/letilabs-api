// controllers/landing.controllers.js

const BioletisanBanner = require('../models/landingPages/bioletisan/landingBanner.model')
const BioletisanGoals = require('../models/landingPages/bioletisan/landingBioletisanGoal.model')
const BioletisanInfo = require('../models/landingPages/bioletisan/landingBioletisanInfo.model')
const BioletisanTech = require('../models/landingPages/bioletisan/landingBioletisanTechInfo.model')
const BioletisanPlaces = require('../models/landingPages/bioletisan/landingBioletisanTechPlace.model')
const BioletisanFaq = require('../models/landingPages/bioletisan/landingFaq.model')
const BioletisanFaqItems = require('../models/landingPages/bioletisan/landingFaqItem.model')
const BioletisanNews = require('../models/landingPages/bioletisan/landingNew.model')
const BioletisanNewsItems = require('../models/landingPages/bioletisan/landingNewsItem.model')
const BioletisanSocial = require('../models/landingPages/bioletisan/landingSocial.model')

module.exports.getBioletisanBanner = async (req, res, next) => {
  BioletisanBanner.find()
    .then((data) => {
      res.status(201).json(data[0])
    })
    .catch(next)
}

module.exports.updateBioletisanBannerData = async (req, res, next) => {
  const userRole = req.session.user.role
  const {title, title_eng, subtitle, subtitle_eng, imgURLOne, imgURLTwo, imgURLThree, id} = req.body


  if (userRole === 'Admin') {
    BioletisanBanner.findByIdAndUpdate(id, req.body, {new: true})
      .then((data) => {
        res.status(201).json(data)
      })
      .catch(next)
  } else {
    req.session.destroy()
    res.status(204).json({message: '¡No tiene suficientes privilegios para realizar esta acción!'})
  }
}

module.exports.getBioletisanGoals = async (req, res, next) => {
  BioletisanGoals.find()
    .then((data) => {
      res.status(201).json(data)
    })
    .catch(next)
}

module.exports.updateBioletosanGoalData = async (req, res, next) => {
  const userRole = req.session.user.role
  const {title, description, title_eng, description_eng, icon_url, id} = req.body


  if (userRole === 'Admin') {
    BioletisanGoals.findByIdAndUpdate(id, req.body, {new: true})
      .then(() => {
        BioletisanGoals.find()
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

module.exports.createBioletisanGoal = (req, res, next) => {
  const userRole = req.session.user.role
  const {title, description, title_eng, description_eng, icon_url} = req.body

  if (userRole === 'Admin') {
    BioletisanGoals.create(req.body)
      .then(() => {
        BioletisanGoals.find()
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

module.exports.updateBioletisanGoalsTitle = async (req, res, next) => {
  const userRole = req.session.user.role
  const {id, title, title_eng} = req.body

  if (userRole === 'Admin') {
    try {
      // Encuentra todos los elementos
      const data = await BioletisanGoals.find()

      // Edita todos los elementos
      data.forEach((item) => {
        item.title = title || item.title
        item.title_eng = title_eng || item.title_eng
      })

      // Guarda los cambios en cada elemento
      const updatePromises = data.map(item => item.save())
      await Promise.all(updatePromises)

      // Retorna todos los elementos actualizados
      const updatedData = await BioletisanGoals.find()
      res.status(201).json(updatedData)
    } catch (error) {
      next(error)
    }
  } else {
    req.session.destroy()
    res.status(403).json({message: '¡No tiene suficientes privilegios para realizar esta acción!'})
  }
}


module.exports.deleteBioletisanGoalItem = (req, res, next) => {
  const userRole = req.session.user.role

  if (userRole === 'Admin') {
    BioletisanGoals.findByIdAndDelete(req.params.id)
      .then(() => {
        BioletisanGoals.find()
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

module.exports.getBioletisanInfo = async (req, res, next) => {
  BioletisanInfo.find()
    .then((data) => {
      res.status(201).json(data)
    })
    .catch(next)
}

module.exports.updateBioletosanInfoData = async (req, res, next) => {
  const userRole = req.session.user.role
  const {title, item_description, title_eng, item_description_eng, item_tag, item_tag_eng, icon_url, id} = req.body


  if (userRole === 'Admin') {
    BioletisanInfo.findByIdAndUpdate(id, req.body, {new: true})
      .then(() => {
        BioletisanInfo.find()
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

module.exports.updateBioletisanInfoTitle = async (req, res, next) => {
  const userRole = req.session.user.role
  const {id, title, title_eng} = req.body

  if (userRole === 'Admin') {
    try {
      // Encuentra todos los elementos
      const data = await BioletisanInfo.find()

      // Edita todos los elementos
      data.forEach((item) => {
        item.title = title || item.title
        item.title_eng = title_eng || item.title_eng
      })

      // Guarda los cambios en cada elemento
      const updatePromises = data.map(item => item.save())
      await Promise.all(updatePromises)

      // Retorna todos los elementos actualizados
      const updatedData = await BioletisanInfo.find()
      res.status(201).json(updatedData)
    } catch (error) {
      next(error)
    }
  } else {
    req.session.destroy()
    res.status(403).json({message: '¡No tiene suficientes privilegios para realizar esta acción!'})
  }
}

module.exports.updateBioletisanInfoSubTitle = async (req, res, next) => {
  const userRole = req.session.user.role
  const {id, subtitle, subtitle_eng} = req.body

  if (userRole === 'Admin') {
    try {
      // Encuentra todos los elementos
      const data = await BioletisanInfo.find()

      // Edita todos los elementos
      data.forEach((item) => {
        item.subtitle = subtitle || item.subtitle
        item.subtitle_eng = subtitle_eng || item.subtitle_eng
      })

      // Guarda los cambios en cada elemento
      const updatePromises = data.map(item => item.save())
      await Promise.all(updatePromises)

      // Retorna todos los elementos actualizados
      const updatedData = await BioletisanInfo.find()
      res.status(201).json(updatedData)
    } catch (error) {
      next(error)
    }
  } else {
    req.session.destroy()
    res.status(403).json({message: '¡No tiene suficientes privilegios para realizar esta acción!'})
  }
}

module.exports.createBioletisanInfo = (req, res, next) => {
  const userRole = req.session.user.role
  const {title, title_eng, subtitle, subtitle_eng, icon_url, item_tag, item_tag_eng, item_description, item_description_eng} = req.body

  if (userRole === 'Admin') {
    BioletisanInfo.create(req.body)
      .then(() => {
        BioletisanInfo.find()
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

module.exports.deleteBioletisanInfoItem = (req, res, next) => {
  const userRole = req.session.user.role

  if (userRole === 'Admin') {
    BioletisanInfo.findByIdAndDelete(req.params.id)
      .then(() => {
        BioletisanInfo.find()
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

module.exports.getBioletisanTech = async (req, res, next) => {
  BioletisanTech.find()
    .then((data) => {
      res.status(201).json(data)
    })
    .catch(next)
}

module.exports.updateBioletisanTechInfo = async (req, res, next) => {
  const userRole = req.session.user.role
  const {link, link_eng, link_url, bg_url, description, description_eng, id} = req.body

  if (userRole === 'Admin') {
    BioletisanTech.findByIdAndUpdate(id, req.body, {new: true})
      .then((data) => {
        res.status(201).json(data)
      })
      .catch(next)
  } else {
    req.session.destroy()
    res.status(204).json({message: '¡No tiene suficientes privilegios para realizar esta acción!'})
  }
}

module.exports.getBioletisanPlaces = async (req, res, next) => {
  BioletisanPlaces.find()
    .then((data) => {
      res.status(201).json(data)
    })
    .catch(next)
}

module.exports.getFaq = async (req, res, next) => {
  BioletisanFaq.find()
    .then((data) => {
      res.status(201).json(data)
    })
    .catch(next)
}

module.exports.getFaqItems = async (req, res, next) => {
  BioletisanFaqItems.find()
    .then((data) => {
      res.status(201).json(data)
    })
    .catch(next)
}

module.exports.getNewsBioletisan = async (req, res, next) => {
  BioletisanNews.find()
    .then((data) => {
      res.status(201).json(data)
    })
    .catch(next)
}

module.exports.getBioletisanNewsItems = async (req, res, next) => {
  BioletisanNewsItems.find()
    .then((data) => {
      res.status(201).json(data)
    })
    .catch(next)
}

module.exports.getBioletisanSocial = async (req, res, next) => {
  BioletisanSocial.find()
    .then((data) => {
      res.status(201).json(data)
    })
    .catch(next)
}

module.exports.updateSuplierItem = async (req, res, next) => {
  const userRole = req.session.user.role
  const {place_url, place_link, id} = req.body


  if (userRole === 'Admin') {
    BioletisanPlaces.findByIdAndUpdate(id, req.body, {new: true})
      .then(() => {
        BioletisanPlaces.find()
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

module.exports.deleteSupplierItem = (req, res, next) => {
  const userRole = req.session.user.role

  if (userRole === 'Admin') {
    BioletisanPlaces.findByIdAndDelete(req.params.id)
      .then(() => {
        BioletisanPlaces.find()
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

module.exports.updateFaqInfo = async (req, res, next) => {
  const userRole = req.session.user.role
  const {title, title_eng, description, description_eng, link, link_eng, link_url, id} = req.body


  if (userRole === 'Admin') {
    BioletisanFaq.findByIdAndUpdate(id, req.body, {new: true})
      .then(() => {
        BioletisanFaq.find()
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

module.exports.updateFaqItem = async (req, res, next) => {
  const userRole = req.session.user.role
  const {question, question_eng, answer, answer_eng, id} = req.body

  if (userRole === 'Admin') {
    BioletisanFaqItems.findByIdAndUpdate
      (id, req.body, {new: true})
      .then(() => {
        BioletisanFaqItems.find()
          .then((data) => {
            res.status(201).json(data)
          })
          .catch(next)
      })
      .catch(next)
  }
}

module.exports.deleteFaqItem = (req, res, next) => {
  const userRole = req.session.user.role

  if (userRole === 'Admin') {
    BioletisanFaqItems.findByIdAndDelete(req.params.id)
      .then(() => {
        BioletisanFaqItems.find()
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

module.exports.createFaqItem = (req, res, next) => {
  const userRole = req.session.user.role
  const {title, title_eng, description, description_eng} = req.body

  if (userRole === 'Admin') {
    BioletisanFaqItems.create(req.body)
      .then(() => {
        BioletisanFaqItems.find()
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

module.exports.updateBannerRrssData = async (req, res, next) => {
  const userRole = req.session.user.role
  const {title, title_eng, description, description_eng, background, id} = req.body


  if (userRole === 'Admin') {
    BioletisanSocial.findByIdAndUpdate(id, req.body, {new: true})
      .then(() => {
        BioletisanSocial.find()
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
