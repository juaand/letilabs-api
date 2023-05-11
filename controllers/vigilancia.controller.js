// controllers/vigilancia.controllers.js

const Vigilancia = require('../models/home/vigilancia.model')


module.exports.addVigilancia = (req, res, next) => {
  const {name, lastname, sex, medicine, date, effects, prescribed, email, name_eng, lastname_eng, sex_eng, medicine_eng, date_eng, effects_eng, prescribed_eng, email_eng} = req.body

  Vigilancia.create({
    name,
    lastname,
    sex,
    medicine,
    date,
    effects,
    prescribed,
    email,
    name_eng,
    lastname_eng,
    sex_eng,
    medicine_eng,
    date_eng,
    effects_eng,
    prescribed_eng,
    email_eng
  })
    .then((newVigilancia) => {
      res.status(201).json(newVigilancia)
    })
    .catch(next)
}


module.exports.dropVigilanciaCard = (req, res, next) => {
  const id = req.params.id
  const userRole = req.session.user.role

  if (userRole === 'Admin') {
    Vigilancia.findByIdAndDelete(id)
      .then(() => {
        res.status(204).json({message: 'El comentario fue eliminado.'})
      })
      .catch(next)
  } else {
    return res
      .status(403)
      .json({message: "No posee suficiente privilegios para hacer esta tarea"})
  }
}