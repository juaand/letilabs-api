// controllers/vigilancia.controllers.js

const Work = require('../models/home/work.model')
const nodemailer = require('../config/mailer.config')

module.exports.addWorkWithUs = (req, res, next) => {
  const {name, lastname, email, phone, country, city, cv, linkedin} = req.body

  Work.create({
    name,
    lastname,
    email,
    phone,
    country,
    city,
    cv,
    linkedin
  })
    .then((newWork) => {
      res.status(201).json(newWork)
    })
    .catch(next)
}

module.exports.sendEmailForm = (req, res, next) => {
  const { name, lastname, email, phone, country, city, cv, linkedin } = req.body;

  return new Promise((resolve, reject) => {
    nodemailer.sendFormEmail(name, lastname, email, phone, country, city, cv, (error) => {
      if (error) {
        reject(error);
      } else {
        resolve();
      }
    });
  })
    .then(() => {
      res.status(200).json({
        message: 'Mensaje enviado correctamente',
      });
    })
    .catch((error) => {
      res.status(500).json({
        message: 'Ocurrió un error al enviar el mensaje.',
        error: error.message,
      });
    });
};


module.exports.getWorkWithUsInfoData = (req, res, next) => {
  const userRole = req.session.user.role

  if (userRole === 'Admin') {
    Work.find()
      .then((data) => {
        res.status(201).json(data)
      })
      .catch(next)
  } else {
    req.session.destroy()
    res.status(204).json({message: '¡No tiene suficientes privilegios para realizar esta acción!'})
  }
}

module.exports.dropWorkWithUsCard = (req, res, next) => {
  const id = req.params.id
  const userRole = req.session.user.role

  if (userRole === 'Admin') {
    Work.findByIdAndDelete(id)
      .then(() => {
        res.status(204).json({message: 'El candidato fue eliminado.'})
      })
      .catch(next)
  } else {
    return res
      .status(403)
      .json({message: "No posee suficiente privilegios para hacer esta tarea"})
  }
}

