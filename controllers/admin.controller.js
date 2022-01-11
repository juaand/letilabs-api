// controllers/admin.controllers.js

const Vigilancia = require('../models/home/homeComponents/vigilancia.model')
const UsInfo = require('../models/home/homeComponents/usInfo.model')
const CarouselInicio = require('../models/home/homeComponents/carrouselHome.model')
const UnidadesInicio = require('../models/home/homeComponents/unidadesNegocio.model')
const PortfolioInicio = require('../models/home/homeComponents/portfolio.model')
const FarmacoInicio = require('../models/home/homeComponents/farmacoVigilancia.model')
const TimeLine = require('../models/aboutUs/aboutUsComponents/timeline.model')
const Banner = require('../models/aboutUs/aboutUsComponents/banner.model')
const MarcandoPauta = require('../models/aboutUs/aboutUsComponents/marcandoPauta.model')
const Megat = require('../models/aboutUs/aboutUsComponents/megat.model')
const Gallery = require('../models/aboutUs/aboutUsComponents/gallery.model')
const BannerOC = require('../models/nuestrasEmpresasComponents/bannerEmpresas.model')
const OurCompaniesOC = require('../models/nuestrasEmpresasComponents/unidadesNegocioEmpresas.model')
const ProductsBannerOC = require('../models/nuestrasEmpresasComponents/bannerProductos.model')
const InnovationOC = require('../models/nuestrasEmpresasComponents/innovarEmpresas.model')
const CareOC = require('../models/nuestrasEmpresasComponents/cuidarEmpresas.model')
const BottomOC = require('../models/nuestrasEmpresasComponents/meetEmpresas.model')

module.exports.getFarmVigData = (req, res, next) => {
  const userRole = req.session.user.role

  if (userRole === 'Admin') {
    Vigilancia.find()
      .sort({updatedAt: -1})
      .then((data) => {
        res.status(201).json(data)
      })
      .catch(next)
  } else {
    req.session.destroy()
    res.status(204).json({message: '¡No tiene suficientes privilegios para realizar esta acción!'})
  }
}


/////////////////////////////////////////////////////////////////////
////////////////////////// INICIO CRUD //////////////////////////////
/////////////////////////////////////////////////////////////////////

module.exports.getUsInfo = (req, res, next) => {
  const userRole = req.session.user.role

  if (userRole === 'Admin') {
    UsInfo.find()
      .then((data) => {
        res.status(201).json(data[0])
      })
      .catch(next)
  } else {
    req.session.destroy()
    res.status(204).json({message: '¡No tiene suficientes privilegios para realizar esta acción!'})
  }
}

module.exports.updateUsInfoData = (req, res, next) => {
  const userRole = req.session.user.role
  const {description, url, buttonTitle, id} = req.body


  if (userRole === 'Admin') {
    UsInfo.findByIdAndUpdate(id, req.body, {new: true})
      .then((data) => {
        res.status(201).json(data)
      })
      .catch(next)
  } else {
    req.session.destroy()
    res.status(204).json({message: '¡No tiene suficientes privilegios para realizar esta acción!'})
  }
}

module.exports.getCarouselInicio = (req, res, next) => {
  const userRole = req.session.user.role

  if (userRole === 'Admin') {
    CarouselInicio.find()
      .then((data) => {
        res.status(201).json(data)
      })
      .catch(next)
  } else {
    req.session.destroy()
    res.status(204).json({message: '¡No tiene suficientes privilegios para realizar esta acción!'})
  }
}

module.exports.getUnidadesInicio = (req, res, next) => {
  const userRole = req.session.user.role

  if (userRole === 'Admin') {
    UnidadesInicio.find()
      .then((data) => {
        res.status(201).json(data)
      })
      .catch(next)
  } else {
    req.session.destroy()
    res.status(204).json({message: '¡No tiene suficientes privilegios para realizar esta acción!'})
  }
}

module.exports.getPortfolioInicio = (req, res, next) => {
  const userRole = req.session.user.role

  if (userRole === 'Admin') {
    PortfolioInicio.find()
      .then((data) => {
        res.status(201).json(data[0])
      })
      .catch(next)
  } else {
    req.session.destroy()
    res.status(204).json({message: '¡No tiene suficientes privilegios para realizar esta acción!'})
  }
}

module.exports.updatePortfolioData = (req, res, next) => {
  const userRole = req.session.user.role
  const {title, description, id} = req.body


  if (userRole === 'Admin') {
    PortfolioInicio.findByIdAndUpdate(id, req.body, {new: true})
      .then((data) => {
        res.status(201).json(data)
      })
      .catch(next)
  } else {
    req.session.destroy()
    res.status(204).json({message: '¡No tiene suficientes privilegios para realizar esta acción!'})
  }
}

module.exports.getFarmacoInicio = (req, res, next) => {
  const userRole = req.session.user.role

  if (userRole === 'Admin') {
    FarmacoInicio.find()
      .then((data) => {
        res.status(201).json(data[0])
      })
      .catch(next)
  } else {
    req.session.destroy()
    res.status(204).json({message: '¡No tiene suficientes privilegios para realizar esta acción!'})
  }
}

module.exports.updateFarmacoData = (req, res, next) => {
  const userRole = req.session.user.role
  const {title, subTitle, buttonTitle, id} = req.body

  console.log(title)
  console.log(subTitle)
  console.log(buttonTitle)
  console.log(id)


  if (userRole === 'Admin') {
    FarmacoInicio.findByIdAndUpdate(id, req.body, {new: true})
      .then((data) => {
        res.status(201).json(data)
      })
      .catch(next)
  } else {
    req.session.destroy()
    res.status(204).json({message: '¡No tiene suficientes privilegios para realizar esta acción!'})
  }
}

module.exports.deleteCarouselItem = (req, res, next) => {
  const userRole = req.session.user.role
  const id = req.params.id

  if (userRole === 'Admin') {
    CarouselInicio.findByIdAndDelete(id)
      .then(() => {
        CarouselInicio.find()
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


module.exports.deleteUnitlItem = (req, res, next) => {
  const userRole = req.session.user.role
  const id = req.params.id

  if (userRole === 'Admin') {
    UnidadesInicio.findByIdAndDelete(id)
      .then(() => {
        UnidadesInicio.find()
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


/////////////////////////////////////////////////////////////////////
///////////////////// SOBRE NOSOTROS CRUD ///////////////////////////
/////////////////////////////////////////////////////////////////////


module.exports.getTimeLine = (req, res, next) => {
  const userRole = req.session.user.role

  if (userRole === 'Admin') {
    TimeLine.find()
      .then((data) => {
        res.status(201).json(data)
      })
      .catch(next)
  } else {
    req.session.destroy()
    res.status(204).json({message: '¡No tiene suficientes privilegios para realizar esta acción!'})
  }
}

module.exports.getBanner = (req, res, next) => {
  const userRole = req.session.user.role

  if (userRole === 'Admin') {
    Banner.find()
      .then((data) => {
        res.status(201).json(data[0])
      })
      .catch(next)
  } else {
    req.session.destroy()
    res.status(204).json({message: '¡No tiene suficientes privilegios para realizar esta acción!'})
  }
}

module.exports.updateBannerData = (req, res, next) => {
  const userRole = req.session.user.role
  const {description, imgURL, id} = req.body


  if (userRole === 'Admin') {
    Banner.findByIdAndUpdate(id, req.body, {new: true})
      .then((data) => {
        res.status(201).json(data)
      })
      .catch(next)
  } else {
    req.session.destroy()
    res.status(204).json({message: '¡No tiene suficientes privilegios para realizar esta acción!'})
  }
}

module.exports.getMarcandoPauta = (req, res, next) => {
  const userRole = req.session.user.role

  if (userRole === 'Admin') {
    MarcandoPauta.find()
      .then((data) => {
        res.status(201).json(data[0])
      })
      .catch(next)
  } else {
    req.session.destroy()
    res.status(204).json({message: '¡No tiene suficientes privilegios para realizar esta acción!'})
  }
}

module.exports.updateMarcandoPautaData = (req, res, next) => {
  const userRole = req.session.user.role
  const {description, imgURL, id} = req.body


  if (userRole === 'Admin') {
    MarcandoPauta.findByIdAndUpdate(id, req.body, {new: true})
      .then((data) => {
        res.status(201).json(data)
      })
      .catch(next)
  } else {
    req.session.destroy()
    res.status(204).json({message: '¡No tiene suficientes privilegios para realizar esta acción!'})
  }
}

module.exports.getMegat = (req, res, next) => {
  const userRole = req.session.user.role

  if (userRole === 'Admin') {
    Megat.find()
      .then((data) => {
        res.status(201).json(data[0])
      })
      .catch(next)
  } else {
    req.session.destroy()
    res.status(204).json({message: '¡No tiene suficientes privilegios para realizar esta acción!'})
  }
}

module.exports.updateMegatData = (req, res, next) => {
  const userRole = req.session.user.role
  const {title, description, url, buttonTitle, id} = req.body


  if (userRole === 'Admin') {
    Megat.findByIdAndUpdate(id, req.body, {new: true})
      .then((data) => {
        res.status(201).json(data)
      })
      .catch(next)
  } else {
    req.session.destroy()
    res.status(204).json({message: '¡No tiene suficientes privilegios para realizar esta acción!'})
  }
}

module.exports.getGallery = (req, res, next) => {
  const userRole = req.session.user.role

  if (userRole === 'Admin') {
    Gallery.find()
      .then((data) => {
        res.status(201).json(data)
      })
      .catch(next)
  } else {
    req.session.destroy()
    res.status(204).json({message: '¡No tiene suficientes privilegios para realizar esta acción!'})
  }
}

/////////////////////////////////////////////////////////////////////
///////////////////// NUESTRAS COMPAÑÍAS CRUD ///////////////////////////
/////////////////////////////////////////////////////////////////////


module.exports.getBannerOC = (req, res, next) => {
  const userRole = req.session.user.role

  if (userRole === 'Admin') {
    BannerOC.find()
      .then((data) => {
        res.status(201).json(data[0])
      })
      .catch(next)
  } else {
    req.session.destroy()
    res.status(204).json({message: '¡No tiene suficientes privilegios para realizar esta acción!'})
  }
}

module.exports.updateBannerDataOC = (req, res, next) => {
  const userRole = req.session.user.role
  const {description, imgURL, id} = req.body


  if (userRole === 'Admin') {
    BannerOC.findByIdAndUpdate(id, req.body, {new: true})
      .then((data) => {
        res.status(201).json(data)
      })
      .catch(next)
  } else {
    req.session.destroy()
    res.status(204).json({message: '¡No tiene suficientes privilegios para realizar esta acción!'})
  }
}

module.exports.getOurCompaniesOC = (req, res, next) => {
  const userRole = req.session.user.role

  if (userRole === 'Admin') {
    OurCompaniesOC.find()
      .then((data) => {
        res.status(201).json(data)
      })
      .catch(next)
  } else {
    req.session.destroy()
    res.status(204).json({message: '¡No tiene suficientes privilegios para realizar esta acción!'})
  }
}

module.exports.updateOurCompaniesOC = (req, res, next) => {
  const userRole = req.session.user.role
  const {desc, url, logo, id} = req.body


  if (userRole === 'Admin') {
    OurCompaniesOC.findByIdAndUpdate(id, req.body, {new: true})
      .then((data) => {
        res.status(201).json(data)
      })
      .catch(next)
  } else {
    req.session.destroy()
    res.status(204).json({message: '¡No tiene suficientes privilegios para realizar esta acción!'})
  }
}

module.exports.getBannerProductsOC = (req, res, next) => {
  const userRole = req.session.user.role

  if (userRole === 'Admin') {
    ProductsBannerOC.find()
      .then((data) => {
        res.status(201).json(data[0])
      })
      .catch(next)
  } else {
    req.session.destroy()
    res.status(204).json({message: '¡No tiene suficientes privilegios para realizar esta acción!'})
  }
}

module.exports.updateBannerProductsOC = (req, res, next) => {
  const userRole = req.session.user.role
  const {desc, url, logo, id} = req.body


  if (userRole === 'Admin') {
    ProductsBannerOC.findByIdAndUpdate(id, req.body, {new: true})
      .then((data) => {
        res.status(201).json(data[0])
      })
      .catch(next)
  } else {
    req.session.destroy()
    res.status(204).json({message: '¡No tiene suficientes privilegios para realizar esta acción!'})
  }
}

module.exports.getInnovationOC = (req, res, next) => {
  const userRole = req.session.user.role

  if (userRole === 'Admin') {
    InnovationOC.find()
      .then((data) => {
        res.status(201).json(data[0])
      })
      .catch(next)
  } else {
    req.session.destroy()
    res.status(204).json({message: '¡No tiene suficientes privilegios para realizar esta acción!'})
  }
}

module.exports.updateInnovationOC = (req, res, next) => {
  const userRole = req.session.user.role
  const {description, imgURL, id} = req.body


  if (userRole === 'Admin') {
    InnovationOC.findByIdAndUpdate(id, req.body, {new: true})
      .then((data) => {
        res.status(201).json(data)
      })
      .catch(next)
  } else {
    req.session.destroy()
    res.status(204).json({message: '¡No tiene suficientes privilegios para realizar esta acción!'})
  }
}

module.exports.getCareOC = (req, res, next) => {
  const userRole = req.session.user.role

  if (userRole === 'Admin') {
    CareOC.find()
      .then((data) => {
        res.status(201).json(data[0])
      })
      .catch(next)
  } else {
    req.session.destroy()
    res.status(204).json({message: '¡No tiene suficientes privilegios para realizar esta acción!'})
  }
}

module.exports.updateCareOC = (req, res, next) => {
  const userRole = req.session.user.role
  const {description, imgURL, id} = req.body


  if (userRole === 'Admin') {
    CareOC.findByIdAndUpdate(id, req.body, {new: true})
      .then((data) => {
        res.status(201).json(data)
      })
      .catch(next)
  } else {
    req.session.destroy()
    res.status(204).json({message: '¡No tiene suficientes privilegios para realizar esta acción!'})
  }
}

module.exports.getMarcandoPauta = (req, res, next) => {
  const userRole = req.session.user.role

  if (userRole === 'Admin') {
    MarcandoPauta.find()
      .then((data) => {
        res.status(201).json(data[0])
      })
      .catch(next)
  } else {
    req.session.destroy()
    res.status(204).json({message: '¡No tiene suficientes privilegios para realizar esta acción!'})
  }
}

module.exports.getBottomOC = (req, res, next) => {
  const userRole = req.session.user.role

  if (userRole === 'Admin') {
    BottomOC.find()
      .then((data) => {
        res.status(201).json(data)
      })
      .catch(next)
  } else {
    req.session.destroy()
    res.status(204).json({message: '¡No tiene suficientes privilegios para realizar esta acción!'})
  }
}

module.exports.updateBottomOC = (req, res, next) => {
  const userRole = req.session.user.role
  const {description, imgURL, id} = req.body


  if (userRole === 'Admin') {
    BottomOC.findByIdAndUpdate(id, req.body, {new: true})
      .then((data) => {
        res.status(201).json(data)
      })
      .catch(next)
  } else {
    req.session.destroy()
    res.status(204).json({message: '¡No tiene suficientes privilegios para realizar esta acción!'})
  }
}