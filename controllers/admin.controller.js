// controllers/admin.controllers.js

const Vigilancia = require('../models/home/vigilancia.model')
const UsInfo = require('../models/home/usInfo.model')
const CarouselInicio = require('../models/home/carrouselHome.model')
const UnidadesInicio = require('../models/home/unidadesNegocio.model')
const PortfolioInicio = require('../models/home/portfolio.model')
const FarmacoInicio = require('../models/home/farmacoVigilancia.model')
const TimeLine = require('../models/aboutUs/aboutUsComponents/timeline.model')
const Banner = require('../models/aboutUs/aboutUsComponents/banner.model')
const MarcandoPauta = require('../models/aboutUs/aboutUsComponents/marcandoPauta.model')
const Megat = require('../models/aboutUs/aboutUsComponents/megat.model')
const Gallery = require('../models/aboutUs/aboutUsComponents/gallery.model')
const BannerOC = require('../models/nuestrasEmpresas/bannerEmpresas.model')
const OurCompaniesOC = require('../models/nuestrasEmpresas/unidadesNegocioEmpresas.model')
const ProductsBannerOC = require('../models/nuestrasEmpresas/bannerProductos.model')
const InnovationOC = require('../models/nuestrasEmpresas/innovarEmpresas.model')
const CareOC = require('../models/nuestrasEmpresas/cuidarEmpresas.model')
const BottomOC = require('../models/nuestrasEmpresas/meetEmpresas.model')
const BannerOCLeti = require('../models/nuestrasEmpresas/laboratoriosLetiPage/bannerLetiPage.model')
const OurCompaniesOCInfoCardsLeti = require('../models/nuestrasEmpresas/laboratoriosLetiPage/infoCardsLetiPage.model')
const EquipoLetiPageOC = require('../models/nuestrasEmpresas/laboratoriosLetiPage/equipoLetiPage.model')
const TimeLineLetiOC = require('../models/nuestrasEmpresas/laboratoriosLetiPage/letiTimeLine.model')
const BannerOCBiocontrolled = require('../models/nuestrasEmpresas/biocontrolledPage/bannerBiocontrolledPage.model')
const OurCompaniesOCInfoCardsBiocontrolled = require('../models/nuestrasEmpresas/biocontrolledPage/infoCardsBiocontrolledPage.model')
const EquipoBiocontrolledPageOC = require('../models/nuestrasEmpresas/biocontrolledPage/equipoBiocontrolledPage.model')
const TimeLineBiocontrolledOC = require('../models/nuestrasEmpresas/biocontrolledPage/biocontrolledTimeLine.model')
const CarrouselBiocontrolledOC = require('../models/nuestrasEmpresas/biocontrolledPage/biocontrolledCarrousel.model')
const BannerOCGenven = require('../models/nuestrasEmpresas/genvenPage/bannerGenvenPage.model')
const OurCompaniesOCVideoGenven = require('../models/nuestrasEmpresas/genvenPage/videoGenvenPage.model')
const EquipoGenvenPageOC = require('../models/nuestrasEmpresas/genvenPage/equipoGenvenPage.model')
const TimeLineGenvenOC = require('../models/nuestrasEmpresas/genvenPage/genvenTimeLine.model')
const ProductosGenvenOC = require('../models/nuestrasEmpresas/genvenPage/genvenProductos.model')
const Vadevecum = require('../models/vadevecum.model')
const Video = require('../models/home/video.model')
const BottomHomeData = require('../models/home/meetPeopleWorkWithUsHome.model')
const BannerPurpose = require('../models/propositoYResponsabilidad/bannerProposito.model')
const VideoPurpose = require('../models/propositoYResponsabilidad/videoProposito.model')
const TimeLinePurpose = require('../models/propositoYResponsabilidad/propositoTimeLine.model')
const TitleFarmPurpose = require('../models/propositoYResponsabilidad/farmTitleProposito.model')
const BannerOurPeople = require('../models/nuestraGente/bannerNuestraGente.model')
const InfoCardsOurPeople = require('../models/nuestraGente/tresEquiposNuestraGente.model')
const EquipoOurPeople = require('../models/nuestraGente/equipoNuestraGente.model')
const BottomOurPeople = require('../models/nuestraGente/bottomCtaNuestraGente.model')
const Carreras = require('../models/nuestraGente/carrerasNuestraGente.model')
const BannerTeamsOurPeople = require('../models/nuestraGente/bannerEquiposNuestraGente.model')

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

module.exports.updateUnidadesInicio = (req, res, next) => {
  const userRole = req.session.user.role
  const {logo, desc, url, id} = req.body
  console.log(req.body)
  console.log(id)

  if (userRole === 'Admin') {
    UnidadesInicio.findByIdAndUpdate(id, req.body, {new: true})
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
  OurCompaniesOCInfoCardsBiocontrolled.find()
    .then((data) => {
      res.status(201).json(data)
    })
    .catch(next)
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
  EquipoBiocontrolledPageOC.find()
    .then((data) => {
      res.status(201).json(data[0])
    })
    .catch(next)

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
  TimeLineBiocontrolledOC.find()
    .then((data) => {
      res.status(201).json(data)
    })
    .catch(next)
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
  CarrouselBiocontrolledOC.find()
    .then((data) => {
      res.status(201).json(data)
    })
    .catch(next)

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
///////////////////////// NUESTRA GENTE //////////////////////////////
/////////////////////////////////////////////////////////////////////

module.exports.getBannerOurPeople = (req, res, next) => {
  BannerOurPeople.find()
    .then((data) => {
      res.status(201).json(data[0])
    })
    .catch(next)
}

module.exports.updateBannerDataOurPeople = (req, res, next) => {
  const userRole = req.session.user.role
  const {description, imgURL, title, id} = req.body


  if (userRole === 'Admin') {
    BannerOurPeople.findByIdAndUpdate(id, req.body, {new: true})
      .then((data) => {
        res.status(201).json(data)
      })
      .catch(next)
  } else {
    req.session.destroy()
    res.status(204).json({message: '¡No tiene suficientes privilegios para realizar esta acción!'})
  }
}

module.exports.getInfoCardsOurPeople = (req, res, next) => {
  InfoCardsOurPeople.find()
    .then((data) => {
      res.status(201).json(data)
    })
    .catch(next)
}

module.exports.updateInfoCardsOurPeople = (req, res, next) => {
  const userRole = req.session.user.role
  const {mainTitle, imgURL, title, info, id} = req.body

  if (userRole === 'Admin') {
    InfoCardsOurPeople.findByIdAndUpdate(id, req.body, {new: true})
      .then(() => {
        InfoCardsOurPeople.find()
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

module.exports.deleteOurPeopleInfoCard = (req, res, next) => {
  const userRole = req.session.user.role
  const id = req.params.id

  if (userRole === 'Admin') {
    InfoCardsOurPeople.findByIdAndDelete(id)
      .then(() => {
        InfoCardsOurPeople.find()
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

module.exports.getEquipoOurPeople = (req, res, next) => {
  EquipoOurPeople.find()
    .then((data) => {
      res.status(201).json(data[0])
    })
    .catch(next)
}

module.exports.updateEquipoOurPeople = (req, res, next) => {
  const userRole = req.session.user.role
  const {title, description, person, imgURL, buttonTitle, buttonLink, id} = req.body

  if (userRole === 'Admin') {
    EquipoOurPeople.findByIdAndUpdate(id, req.body, {new: true})
      .then((data) => {
        res.status(201).json(data)
      })
      .catch(next)
  } else {
    req.session.destroy()
    res.status(204).json({message: '¡No tiene suficientes privilegios para realizar esta acción!'})
  }
}

module.exports.getBannerTeams = (req, res, next) => {
  BannerTeamsOurPeople.find()
    .then((data) => {
      res.status(201).json(data)
    })
    .catch(next)
}

module.exports.updateBannerTeams = (req, res, next) => {
  const userRole = req.session.user.role
  const {imgURL, mainTitle, id} = req.body

  if (userRole === 'Admin') {
    BannerTeamsOurPeople.findByIdAndUpdate(id, req.body, {new: true})
      .then((data) => {
        res.status(201).json(data)
      })
      .catch(next)
  } else {
    req.session.destroy()
    res.status(204).json({message: '¡No tiene suficientes privilegios para realizar esta acción!'})
  }
}

module.exports.createTeam = (req, res, next) => {
  const userRole = req.session.user.role
  const {title, info} = req.body

  if (userRole === 'Admin') {
    InfoCardsOurPeople.create({title, info})
      .then(() => {
        InfoCardsOurPeople.find()
          .then((data) => {
            res.status(201).json(data)
          })
          .catch(next)
      }
      )
      .catch(next)
  } else {
    req.session.destroy()
    res.status(204).json({message: '¡No tiene suficientes privilegios para realizar esta acción!'})
  }
}

module.exports.getBottomOurPeople = (req, res, next) => {
  BottomOurPeople.find()
    .then((data) => {
      res.status(201).json(data)
    })
    .catch(next)
}

module.exports.updateBottomOurPeople = (req, res, next) => {
  const userRole = req.session.user.role
  const {title, buttoLink, buttonTitle, img, id} = req.body


  if (userRole === 'Admin') {
    BottomOurPeople.findByIdAndUpdate(id, req.body, {new: true})
      .then(() => {
        BottomOurPeople.find()
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

module.exports.getCarreras = (req, res, next) => {
  Carreras.find()
    .then((data) => {
      res.status(201).json(data[0])
    })
    .catch(next)
}

module.exports.updateCarrerasData = (req, res, next) => {
  const userRole = req.session.user.role
  const {title, description, url, buttonTitle, id} = req.body


  if (userRole === 'Admin') {
    Carreras.findByIdAndUpdate(id, req.body, {new: true})
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


//////////////////////////////////////////////////////////////////////
//////////////// PROPOSITOS Y RESPONSABILIDAD CRUD //////////////////
/////////////////////////////////////////////////////////////////////

module.exports.getBannerPurpose = (req, res, next) => {
  BannerPurpose.find()
    .then((data) => {
      res.status(201).json(data[0])
    })
    .catch(next)
}

module.exports.updateBannerDataPurpose = (req, res, next) => {
  const userRole = req.session.user.role
  const {description, imgURL, id} = req.body


  if (userRole === 'Admin') {
    BannerPurpose.findByIdAndUpdate(id, req.body, {new: true})
      .then((data) => {
        res.status(201).json(data)
      })
      .catch(next)
  } else {
    req.session.destroy()
    res.status(204).json({message: '¡No tiene suficientes privilegios para realizar esta acción!'})
  }
}

module.exports.getVideoPurpose = (req, res, next) => {
  VideoPurpose.find()
    .then((data) => {
      res.status(201).json(data)
    })
    .catch(next)
}

module.exports.updateVideoPurpose = (req, res, next) => {
  const userRole = req.session.user.role
  const {desc, url, logo, id} = req.body


  if (userRole === 'Admin') {
    VideoPurpose.findByIdAndUpdate(id, req.body, {new: true})
      .then((data) => {
        res.status(201).json(data)
      })
      .catch(next)
  } else {
    req.session.destroy()
    res.status(204).json({message: '¡No tiene suficientes privilegios para realizar esta acción!'})
  }
}


module.exports.getTimeLinePurpose = (req, res, next) => {
  TimeLinePurpose.find()
    .then((data) => {
      res.status(201).json(data)
    })
    .catch(next)
}
/// pendiente add ///
module.exports.addTimeLinePurposeData = (req, res, next) => {
  const userRole = req.session.user.role
  const {description, imgURL, id} = req.body


  if (userRole === 'Admin') {
    TimeLinePurpose.findByIdAndUpdate(id, req.body, {new: true})
      .then((data) => {
        res.status(201).json(data)
      })
      .catch(next)
  } else {
    req.session.destroy()
    res.status(204).json({message: '¡No tiene suficientes privilegios para realizar esta acción!'})
  }
}

module.exports.getTitleFarmPurpose = (req, res, next) => {
  TitleFarmPurpose.find()
    .then((data) => {
      res.status(201).json(data[0])
    })
    .catch(next)
}

module.exports.updateTitleFarmDataPurpose = (req, res, next) => {
  const userRole = req.session.user.role
  const {title, id} = req.body


  if (userRole === 'Admin') {
    TitleFarmPurpose.findByIdAndUpdate(id, req.body, {new: true})
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