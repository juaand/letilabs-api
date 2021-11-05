// controllers/vigilancia.controllers.js

const Vigilancia = require('../models/home/homeComponents/vigilancia.model')
const createError = require("http-errors")


module.exports.addVigilancia = (req, res, next) => {
  const {name, lastname, sex, medicine, date, effects, prescribed} = req.body

  const formatDate = (d) => {
    var str = d
    darr = str.split('/')
    return new Date(parseInt(darr[2]), parseInt(darr[1]) - 1, parseInt(darr[0]))
  }

  Vigilancia.create({
    name,
    lastname,
    sex,
    medicine,
    date,
    effects,
    prescribed
  })
    .then((newVigilancia) => {
      res.status(201).json(newVigilancia)
    })
    .catch(next)
}