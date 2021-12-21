// controllers/content.controllers.js
const Vadevecum = require('../models/vadevecum.model')


module.exports.getProduct = (req, res, next) => {
const {buscar} = req.body

  // const getProduct = Vadevecum.find({name: buscar})
  // const getRandomProducts = Vadevecum.aggregate([{$sample: {size: 3}}])

  // Promise.all([getProduct, getRandomProducts])
  //   .then((data) => {
  //     res.status(201).json(data)
  //   })
  //   .catch(next)

  Vadevecum.find({name: buscar})
    .then(response => {
      console.log(response)
      if (response.length) {
        res.status(201).json(response)
      } else {
        res.status(201).json({
          message: 'No se encontraron resultados'
        })
      }
    })
    .catch(next)
}