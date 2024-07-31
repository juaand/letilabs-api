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

module.exports.getBioletisanGoals = async (req, res, next) => {
  BioletisanGoals.find()
    .then((data) => {
      res.status(201).json(data)
    })
    .catch(next)
}

module.exports.getBioletisanInfo = async (req, res, next) => {
  BioletisanInfo.find()
    .then((data) => {
      res.status(201).json(data)
    })
    .catch(next)
}

module.exports.getBioletisanTech = async (req, res, next) => {
  BioletisanTech.find()
    .then((data) => {
      res.status(201).json(data)
    })
    .catch(next)
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