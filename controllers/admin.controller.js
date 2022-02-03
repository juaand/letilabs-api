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
const BannerOCLeti = require('../models/nuestrasEmpresasComponents/laboratoriosLetiPage/bannerLetiPage.model')
const OurCompaniesOCInfoCardsLeti = require('../models/nuestrasEmpresasComponents/laboratoriosLetiPage/infoCardsLetiPage.model')
const EquipoLetiPageOC = require('../models/nuestrasEmpresasComponents/laboratoriosLetiPage/equipoLetiPage.model')
const TimeLineLetiOC = require('../models/nuestrasEmpresasComponents/laboratoriosLetiPage/letiTimeLine.model')
const BannerOCBiocontrolled = require('../models/nuestrasEmpresasComponents/biocontrolledPage/bannerBiocontrolledPage.model')
const OurCompaniesOCInfoCardsBiocontrolled = require('../models/nuestrasEmpresasComponents/biocontrolledPage/infoCardsBiocontrolledPage.model')
const EquipoBiocontrolledPageOC = require('../models/nuestrasEmpresasComponents/biocontrolledPage/equipoBiocontrolledPage.model')
const TimeLineBiocontrolledOC = require('../models/nuestrasEmpresasComponents/biocontrolledPage/biocontrolledTimeLine.model')
const CarrouselBiocontrolledOC = require('../models/nuestrasEmpresasComponents/biocontrolledPage/biocontrolledCarrousel.model')
const BannerOCGenven = require('../models/nuestrasEmpresasComponents/genvenPage/bannerGenvenPage.model')
const OurCompaniesOCVideoGenven = require('../models/nuestrasEmpresasComponents/genvenPage/videoGenvenPage.model')
const EquipoGenvenPageOC = require('../models/nuestrasEmpresasComponents/genvenPage/equipoGenvenPage.model')
const TimeLineGenvenOC = require('../models/nuestrasEmpresasComponents/genvenPage/genvenTimeLine.model')
const ProductosGenvenOC = require('../models/nuestrasEmpresasComponents/genvenPage/genvenProductos.model')
const Vadevecum = require('../models/vadevecum.model')
const Video = require('../models/home/homeComponents/video.model')
const BottomHomeData = require('../models/home/homeComponents/meetPeopleWorkWithUsHome.model')



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
  UsInfo.find()
    .then((data) => {
      res.status(201).json(data[0])
    })
    .catch(next)

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

module.exports.getVideoData = (req, res, next) => {

  Video.find()
    .then((data) => {
      res.status(201).json(data)
    })
    .catch(next)

}

module.exports.getHomeBottomData = (req, res, next) => {
  BottomHomeData.find()
    .then((data) => {
      res.status(201).json(data)
    })
    .catch(next)
}

module.exports.updateVideoData = (req, res, next) => {
  const userRole = req.session.user.role
  const {url, id} = req.body

  if (userRole === 'Admin') {
    Video.findByIdAndUpdate(id, req.body, {new: true})
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
  UnidadesInicio.find()
    .then((data) => {
      res.status(201).json(data)
    })
    .catch(next)
}

module.exports.getPortfolioInicio = (req, res, next) => {
  PortfolioInicio.find()
    .then((data) => {
      res.status(201).json(data)
    })
    .catch(next)
}

module.exports.getVadevecumData = (req, res, next) => {
  Vadevecum.find()
    .sort({name: 1})
    .then((data) => {
      res.status(201).json(data)
    })
    .catch(next)
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
  FarmacoInicio.find()
    .then((data) => {
      res.status(201).json(data[0])
    })
    .catch(next)
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
  TimeLine.find()
    .then((data) => {
      res.status(201).json(data)
    })
    .catch(next)
}

module.exports.getBanner = (req, res, next) => {
  Banner.find()
    .then((data) => {
      res.status(201).json(data[0])
    })
    .catch(next)
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
  Megat.find()
    .then((data) => {
      res.status(201).json(data[0])
    })
    .catch(next)
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
  Gallery.find()
    .then((data) => {
      res.status(201).json(data)
    })
    .catch(next)
}

/////////////////////////////////////////////////////////////////////
///////////////////// NUESTRAS COMPAÑÍAS CRUD ///////////////////////////
/////////////////////////////////////////////////////////////////////


module.exports.getBannerOC = (req, res, next) => {
  BannerOC.find()
    .then((data) => {
      res.status(201).json(data[0])
    })
    .catch(next)
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
  OurCompaniesOC.find()
    .then((data) => {
      res.status(201).json(data)
    })
    .catch(next)
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
  ProductsBannerOC.find()
    .then((data) => {
      res.status(201).json(data[0])
    })
    .catch(next)
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
  InnovationOC.find()
    .then((data) => {
      res.status(201).json(data[0])
    })
    .catch(next)
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
  CareOC.find()
    .then((data) => {
      res.status(201).json(data[0])
    })
    .catch(next)
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
  MarcandoPauta.find()
    .then((data) => {
      res.status(201).json(data[0])
    })
    .catch(next)
}

module.exports.getBottomOC = (req, res, next) => {
  BottomOC.find()
    .then((data) => {
      res.status(201).json(data)
    })
    .catch(next)
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

//////////////////////////////////////////////////////////////////////
//////////////// NUESTRAS COMPAÑÍAS LETI CRUD ////////////////////////
/////////////////////////////////////////////////////////////////////

module.exports.getBannerOCLeti = (req, res, next) => {
  BannerOCLeti.find()
    .then((data) => {
      res.status(201).json(data[0])
    })
    .catch(next)
}

module.exports.updateBannerDataOCLeti = (req, res, next) => {
  const userRole = req.session.user.role
  const {description, imgURL, id} = req.body


  if (userRole === 'Admin') {
    BannerOCLeti.findByIdAndUpdate(id, req.body, {new: true})
      .then((data) => {
        res.status(201).json(data)
      })
      .catch(next)
  } else {
    req.session.destroy()
    res.status(204).json({message: '¡No tiene suficientes privilegios para realizar esta acción!'})
  }
}

module.exports.getOurCompaniesInfoCardsLeti = (req, res, next) => {
  OurCompaniesOCInfoCardsLeti.find()
    .then((data) => {
      res.status(201).json(data)
    })
    .catch(next)
}

module.exports.updateOurCompaniesInfoCardsLeti = (req, res, next) => {
  const userRole = req.session.user.role
  const {desc, url, logo, id} = req.body


  if (userRole === 'Admin') {
    OurCompaniesOCInfoCardsLeti.findByIdAndUpdate(id, req.body, {new: true})
      .then((data) => {
        res.status(201).json(data)
      })
      .catch(next)
  } else {
    req.session.destroy()
    res.status(204).json({message: '¡No tiene suficientes privilegios para realizar esta acción!'})
  }
}

module.exports.getEquipoLetiOC = (req, res, next) => {
  EquipoLetiPageOC.find()
    .then((data) => {
      res.status(201).json(data[0])
    })
    .catch(next)
}

module.exports.updateEquipoLetiOC = (req, res, next) => {
  const userRole = req.session.user.role
  const {desc, url, logo, id} = req.body


  if (userRole === 'Admin') {
    EquipoLetiPageOC.findByIdAndUpdate(id, req.body, {new: true})
      .then((data) => {
        res.status(201).json(data[0])
      })
      .catch(next)
  } else {
    req.session.destroy()
    res.status(204).json({message: '¡No tiene suficientes privilegios para realizar esta acción!'})
  }
}

module.exports.getTimeLineLeti = (req, res, next) => {
  TimeLineLetiOC.find()
    .then((data) => {
      res.status(201).json(data)
    })
    .catch(next)
}

/// pendiente add ///
module.exports.addTimeLineLetiData = (req, res, next) => {
  const userRole = req.session.user.role
  const {description, imgURL, id} = req.body


  if (userRole === 'Admin') {
    TimeLineLetiOC.findByIdAndUpdate(id, req.body, {new: true})
      .then((data) => {
        res.status(201).json(data)
      })
      .catch(next)
  } else {
    req.session.destroy()
    res.status(204).json({message: '¡No tiene suficientes privilegios para realizar esta acción!'})
  }
}

//////////////////////////////////////////////////////////////////////
///////////// NUESTRAS COMPAÑÍAS BIOCONTROLLED CRUD //////////////////
/////////////////////////////////////////////////////////////////////

module.exports.getBannerOCBiocontrolled = (req, res, next) => {
  BannerOCBiocontrolled.find()
    .then((data) => {
      res.status(201).json(data[0])
    })
    .catch(next)
}

module.exports.updateBannerDataOCBiocontrolled = (req, res, next) => {
  const userRole = req.session.user.role
  const {description, imgURL, id} = req.body


  if (userRole === 'Admin') {
    BannerOCBiocontrolled.findByIdAndUpdate(id, req.body, {new: true})
      .then((data) => {
        res.status(201).json(data)
      })
      .catch(next)
  } else {
    req.session.destroy()
    res.status(204).json({message: '¡No tiene suficientes privilegios para realizar esta acción!'})
  }
}

module.exports.getOurCompaniesInfoCardsBiocontrolled = (req, res, next) => {
  const userRole = req.session.user.role

  if (userRole === 'Admin') {
    OurCompaniesOCInfoCardsBiocontrolled.find()
      .then((data) => {
        res.status(201).json(data)
      })
      .catch(next)
  } else {
    req.session.destroy()
    res.status(204).json({message: '¡No tiene suficientes privilegios para realizar esta acción!'})
  }
}

module.exports.updateOurCompaniesInfoCardsBiocontrolled = (req, res, next) => {
  const userRole = req.session.user.role
  const {desc, url, logo, id} = req.body


  if (userRole === 'Admin') {
    OurCompaniesOCInfoCardsBiocontrolled.findByIdAndUpdate(id, req.body, {new: true})
      .then((data) => {
        res.status(201).json(data)
      })
      .catch(next)
  } else {
    req.session.destroy()
    res.status(204).json({message: '¡No tiene suficientes privilegios para realizar esta acción!'})
  }
}

module.exports.getEquipoBiocontrolledOC = (req, res, next) => {
  const userRole = req.session.user.role

  if (userRole === 'Admin') {
    EquipoBiocontrolledPageOC.find()
      .then((data) => {
        res.status(201).json(data[0])
      })
      .catch(next)
  } else {
    req.session.destroy()
    res.status(204).json({message: '¡No tiene suficientes privilegios para realizar esta acción!'})
  }
}

module.exports.updateEquipoBiocontrolledOC = (req, res, next) => {
  const userRole = req.session.user.role
  const {desc, url, logo, id} = req.body


  if (userRole === 'Admin') {
    EquipoBiocontrolledPageOC.findByIdAndUpdate(id, req.body, {new: true})
      .then((data) => {
        res.status(201).json(data[0])
      })
      .catch(next)
  } else {
    req.session.destroy()
    res.status(204).json({message: '¡No tiene suficientes privilegios para realizar esta acción!'})
  }
}

module.exports.getTimeLineBiocontrolled = (req, res, next) => {
  const userRole = req.session.user.role

  if (userRole === 'Admin') {
    TimeLineBiocontrolledOC.find()
      .then((data) => {
        res.status(201).json(data)
      })
      .catch(next)
  } else {
    req.session.destroy()
    res.status(204).json({message: '¡No tiene suficientes privilegios para realizar esta acción!'})
  }
}
/// pendiente add ///
module.exports.addTimeLineBiocontrolledData = (req, res, next) => {
  const userRole = req.session.user.role
  const {description, imgURL, id} = req.body


  if (userRole === 'Admin') {
    TimeLineBiocontrolledOC.findByIdAndUpdate(id, req.body, {new: true})
      .then((data) => {
        res.status(201).json(data)
      })
      .catch(next)
  } else {
    req.session.destroy()
    res.status(204).json({message: '¡No tiene suficientes privilegios para realizar esta acción!'})
  }
}

module.exports.getCarrouselBiocontrolled = (req, res, next) => {
  const userRole = req.session.user.role

  if (userRole === 'Admin') {
    CarrouselBiocontrolledOC.find()
      .then((data) => {
        res.status(201).json(data)
      })
      .catch(next)
  } else {
    req.session.destroy()
    res.status(204).json({message: '¡No tiene suficientes privilegios para realizar esta acción!'})
  }
}
/// pendiente add ///
module.exports.addCarrouselBiocontrolledData = (req, res, next) => {
  const userRole = req.session.user.role
  const {description, imgURL, id} = req.body


  if (userRole === 'Admin') {
    CarrouselBiocontrolledOC.findByIdAndUpdate(id, req.body, {new: true})
      .then((data) => {
        res.status(201).json(data)
      })
      .catch(next)
  } else {
    req.session.destroy()
    res.status(204).json({message: '¡No tiene suficientes privilegios para realizar esta acción!'})
  }
}

//////////////////////////////////////////////////////////////////////
///////////// NUESTRAS COMPAÑÍAS GENVEN CRUD //////////////////
/////////////////////////////////////////////////////////////////////

module.exports.getBannerOCGenven = (req, res, next) => {
  BannerOCGenven.find()
    .then((data) => {
      res.status(201).json(data[0])
    })
    .catch(next)
}

module.exports.updateBannerDataOCGenven = (req, res, next) => {
  const userRole = req.session.user.role
  const {description, imgURL, id} = req.body


  if (userRole === 'Admin') {
    BannerOCGenven.findByIdAndUpdate(id, req.body, {new: true})
      .then((data) => {
        res.status(201).json(data)
      })
      .catch(next)
  } else {
    req.session.destroy()
    res.status(204).json({message: '¡No tiene suficientes privilegios para realizar esta acción!'})
  }
}

module.exports.getOurCompaniesVideoGenven = (req, res, next) => {
  OurCompaniesOCVideoGenven.find()
    .then((data) => {
      res.status(201).json(data)
    })
    .catch(next)
}

module.exports.updateOurCompaniesVideoGenven = (req, res, next) => {
  const userRole = req.session.user.role
  const {desc, url, logo, id} = req.body


  if (userRole === 'Admin') {
    OurCompaniesOCVideoGenven.findByIdAndUpdate(id, req.body, {new: true})
      .then((data) => {
        res.status(201).json(data)
      })
      .catch(next)
  } else {
    req.session.destroy()
    res.status(204).json({message: '¡No tiene suficientes privilegios para realizar esta acción!'})
  }
}

module.exports.getEquipoGenvenOC = (req, res, next) => {
  EquipoGenvenPageOC.find()
    .then((data) => {
      res.status(201).json(data[0])
    })
    .catch(next)
}

module.exports.updateEquipoGenvenOC = (req, res, next) => {
  const userRole = req.session.user.role
  const {desc, url, logo, id} = req.body


  if (userRole === 'Admin') {
    EquipoGenvenPageOC.findByIdAndUpdate(id, req.body, {new: true})
      .then((data) => {
        res.status(201).json(data[0])
      })
      .catch(next)
  } else {
    req.session.destroy()
    res.status(204).json({message: '¡No tiene suficientes privilegios para realizar esta acción!'})
  }
}

module.exports.getTimeLineGenven = (req, res, next) => {
  TimeLineGenvenOC.find()
    .then((data) => {
      res.status(201).json(data)
    })
    .catch(next)
}
/// pendiente add ///
module.exports.addTimeLineGenvenData = (req, res, next) => {
  const userRole = req.session.user.role
  const {description, imgURL, id} = req.body


  if (userRole === 'Admin') {
    TimeLineGenvenOC.findByIdAndUpdate(id, req.body, {new: true})
      .then((data) => {
        res.status(201).json(data)
      })
      .catch(next)
  } else {
    req.session.destroy()
    res.status(204).json({message: '¡No tiene suficientes privilegios para realizar esta acción!'})
  }
}

module.exports.getProductosGenven = (req, res, next) => {
  ProductosGenvenOC.find()
    .then((data) => {
      res.status(201).json(data)
    })
    .catch(next)
}
/// pendiente add ///
module.exports.addProductosGenvenData = (req, res, next) => {
  const userRole = req.session.user.role
  const {description, imgURL, id} = req.body


  if (userRole === 'Admin') {
    ProductosGenvenOC.findByIdAndUpdate(id, req.body, {new: true})
      .then((data) => {
        res.status(201).json(data)
      })
      .catch(next)
  } else {
    req.session.destroy()
    res.status(204).json({message: '¡No tiene suficientes privilegios para realizar esta acción!'})
  }
}

//////////////////////////////////////////////////////////////////////
/////////////////////////// PRODUCTOS CRUD //////////////////////////
/////////////////////////////////////////////////////////////////////

module.exports.addProductoToHomeCarrousel = (req, res, next) => {
  const id = req.params.id
  const userRole = req.session.user.role
  const {show_in_home} = req.body

  if (userRole === 'Admin') {
    Vadevecum.findByIdAndUpdate(id, req.body, {new: true})
      .then(() => {
        Vadevecum.find()
          .sort({name: 1})
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

module.exports.deleteProduct = (req, res, next) => {
  const id = req.params.id
  const userRole = req.session.user.role

  if (userRole === 'Admin') {
    Vadevecum.findByIdAndDelete(id)
      .then(() => {
        Vadevecum.find()
          .sort({name: 1})
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

module.exports.updateProduct = (req, res, next) => {
  const id = req.params.id
  const userRole = req.session.user.role
  const {name, picPath, QRpath, line, composition, health_register, active_principle, posology} = req.body

  if (userRole === 'Admin') {
    Vadevecum.findByIdAndUpdate(id, req.body, {new: true})
      .then(() => {
        Vadevecum.find()
          .sort({name: 1})
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

module.exports.createProduct = (req, res, next) => {
  const userRole = req.session.user.role
  const {name, line, health_register, picPath, QRpath, active_principle, posology, presentation, composition} = req.body

  if (userRole === 'Admin') {
    Vadevecum.create(req.body)
      .then(() => {
        Vadevecum.find()
          .sort({name: 1})
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