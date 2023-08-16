// controllers/vigilancia.controllers.js

const Work = require('../models/home/work.model')
const nodemailer = require('../config/mailer.config')

module.exports.addWorkWithUs = async (req, res, next) => {
  const { name, lastname, email, phone, country, city, cv, linkedin } = req.body;

  try {
    const existingWork = await Work.findOne({ email });

    if (existingWork) {
      await Work.updateOne(
          { email },
          {
            $set: {
              name,
              lastname,
              phone,
              country,
              city,
              cv,
              linkedin,
            },
          }
      );
      res.status(200).json({ message: 'Registro actualizado exitosamente.' });
    } else {
      const newWork = await Work.create({
        name,
        lastname,
        email,
        phone,
        country,
        city,
        cv,
        linkedin,
      });
      res.status(201).json(newWork);
    }
  } catch (error) {
    next(error);
  }
};

module.exports.sendEmailForm = async (req, res, next) => {
  const { name, lastname, email, phone, country, city, cv, linkedin } = req.body;

  try {
    // Verificar si ya existe un registro con el mismo correo electrónico
    const existingWork = await Work.findOne({ email });

    if (!existingWork) {
      // Envío del correo electrónico solo si no existe un registro con el mismo correo
      await sendFormEmail(name, lastname, email, phone, country, city, cv);

      res.status(200).json({
        message: 'Mensaje enviado correctamente',
      });
    } else {
      res.status(200).json({
        message: 'Mensaje enviado correctamente (sin correo debido a existencia de registro)',
      });
    }
  } catch (error) {
    res.status(500).json({
      message: 'Ocurrió un error al enviar el mensaje.',
      error: error.message,
    });
  }
};

async function sendFormEmail(name, lastname, email, phone, country, city, cv) {
  return new Promise((resolve, reject) => {
    nodemailer.sendFormEmail(name, lastname, email, phone, country, city, cv, (error) => {
      if (error) {
        reject(error);
      } else {
        resolve();
      }
    });
  });
}


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


