// controllers/admin.controllers.js

const Vigilancia = require('../models/home/vigilancia.model')
const UsInfo = require('../models/home/usInfo.model')
const CarouselInicio = require('../models/home/carrouselHome.model')
const UnidadesInicio = require('../models/home/unidadesNegocio.model')
const PortfolioInicio = require('../models/home/portfolio.model')
const FarmacoInicio = require('../models/home/farmacoVigilancia.model')
const ModalFarmacoInicio = require('../models/home/modalFarmacoVigilancia.model')
const TimeLine = require('../models/aboutUs/aboutUsComponents/timeline.model')
const Banner = require('../models/aboutUs/aboutUsComponents/banner.model')
const MarcandoPauta = require('../models/aboutUs/aboutUsComponents/marcandoPauta.model')
const Megat = require('../models/aboutUs/aboutUsComponents/megat.model')
const Science = require('../models/aboutUs/aboutUsComponents/science.model')
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
const TherapeuticGroup = require('../models/therapeutic_group.model')
const Video = require('../models/home/video.model')
const BottomHomeData = require('../models/home/meetPeopleWorkWithUsHome.model')
const BannerPurpose = require('../models/propositoYResponsabilidad/bannerProposito.model')
const VideoPurpose = require('../models/propositoYResponsabilidad/videoProposito.model')
const TimeLinePurpose = require('../models/propositoYResponsabilidad/propositoTimeLine.model')
const BannerOurPeople = require('../models/nuestraGente/bannerNuestraGente.model')
const InfoCardsOurPeople = require('../models/nuestraGente/tresEquiposNuestraGente.model')
const EquipoOurPeople = require('../models/nuestraGente/equipoNuestraGente.model')
const BottomOurPeople = require('../models/nuestraGente/bottomCtaNuestraGente.model')
const Carreras = require('../models/nuestraGente/carrerasNuestraGente.model')
const BannerTeamsOurPeople = require('../models/nuestraGente/bannerEquiposNuestraGente.model')
const InfoBannerOurPeople = require('../models/nuestraGente/ourPeopleInfoBanner.model')
const BannerBtm = require('../models/nuestraGente/bannerBtm.model')
const CookieInfo = require('../models/home/cookie.model')
const Rrss = require('../models/home/rrss.model')
const Nav = require('../models/navbar/navbarComponents/dataNav.model')

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
  const {description, url, buttonTitle, age, description_eng, url_eng, buttonTitle_eng, age_eng, id} = req.body


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

module.exports.updateBottomCtaData = (req, res, next) => {
  const userRole = req.session.user.role
  const {title, img, button, url, title_eng, button_eng, url_eng, id} = req.body

  if (userRole === 'Admin') {
    BottomHomeData.findByIdAndUpdate(id, req.body, {new: true})
      .then(() => {
        BottomHomeData.find()
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

module.exports.getCookieInfo = (req, res, next) => {
  CookieInfo.find()
    .then((data) => {
      res.status(201).json(data[0])
    })
    .catch(next)
}

module.exports.updateCookieInfo = (req, res, next) => {
  const userRole = req.session.user.role
  const {info, info_eng, id} = req.body

  if (userRole === 'Admin') {
    CookieInfo.findByIdAndUpdate(id, req.body, {new: true})
      .then((data) => {
        res.status(201).json(data)
      })
      .catch(next)
  } else {
    req.session.destroy()
    res.status(204).json({message: '¡No tiene suficientes privilegios para realizar esta acción!'})
  }
}

module.exports.getRrssInfo = (req, res, next) => {
  Rrss.find()
    .then((data) => {
      res.status(201).json(data)
    })
    .catch(next)
}

module.exports.updateRrssInfo = (req, res, next) => {
  const userRole = req.session.user.role
  const {facebook, linkedin, whatsapp, id} = req.body

  if (userRole === 'Admin') {
    Rrss.findByIdAndUpdate(id, req.body, {new: true})
      .then((data) => {
        res.status(201).json(data)
      })
      .catch(next)
  } else {
    req.session.destroy()
    res.status(204).json({message: '¡No tiene suficientes privilegios para realizar esta acción!'})
  }
}

module.exports.updateVideoData = (req, res, next) => {
  const userRole = req.session.user.role
  const {url, url_eng, id} = req.body

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

module.exports.updateUnidadesNegocioTitle = (req, res, next) => {
  const userRole = req.session.user.role
  const {mainTitle, mainTitle_eng} = req.body

  if (userRole === 'Admin') {
    UnidadesInicio.find()
      .then(response => {
        response.forEach(element => {
          element.mainTitle = mainTitle
          element.mainTitle_eng = mainTitle_eng
          element.save()
        })
        res.status(201).json(response)
      })
      .catch(next)
  } else {
    req.session.destroy()
    res.status(204).json({message: '¡No tiene suficientes privilegios para realizar esta acción!'})
  }
}

module.exports.updateUnidadesInicio = (req, res, next) => {
  const userRole = req.session.user.role
  const {logo, desc, url, desc_eng, url_eng, id} = req.body

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

module.exports.updatePortfolioInicio = (req, res, next) => {
  const userRole = req.session.user.role
  const {title, description, title_eng, description_eng, id} = req.body


  if (userRole === 'Admin') {
    PortfolioInicio.findByIdAndUpdate(id, req.body, {new: true})
      .then(() => {
        PortfolioInicio.find()
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

module.exports.createPortfolioInicio = (req, res, next) => {
  const userRole = req.session.user.role
  const {superiorTitle, title, description, superiorTitle_eng, title_eng, description_eng} = req.body

  if (userRole === 'Admin') {
    PortfolioInicio.create(req.body)
      .then(() => {
        PortfolioInicio.find()
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

module.exports.updateTitlePortfolioInicio = (req, res, next) => {
  const userRole = req.session.user.role
  const {superiorTitle, superiorTitle_eng} = req.body

  if (userRole === 'Admin') {
    PortfolioInicio.find()
      .then(response => {
        response.forEach(element => {
          element.superiorTitle = superiorTitle
          element.superiorTitle_eng = superiorTitle_eng
          element.save()
        })
        res.status(201).json(response)
      })
      .catch(next)
  } else {
    req.session.destroy()
    res.status(204).json({message: '¡No tiene suficientes privilegios para realizar esta acción!'})
  }
}

module.exports.deletePortfolioItem = (req, res, next) => {
  const userRole = req.session.user.role

  if (userRole === 'Admin') {
    PortfolioInicio.findByIdAndDelete(req.params.id)
      .then(() => {
        PortfolioInicio.find()
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

module.exports.getVadevecumData = (req, res, next) => {
  Vadevecum.find()
    .sort({name: 1})
    .then((data) => {
      res.status(201).json(data)
    })
    .catch(next)
}

module.exports.getTherapeuticGroupsData = (req, res, next) => {
  TherapeuticGroup.find()
    .sort({tag: 1})
    .then((data) => {
      res.status(201).json(data)
    })
    .catch(next)
}

module.exports.updatePortfolioData = (req, res, next) => {
  const userRole = req.session.user.role
  const {title, description, title_eng, description_eng, id} = req.body


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

module.exports.getModalFarmacoInicio = (req, res, next) => {
  ModalFarmacoInicio.find()
    .then((data) => {
      res.status(201).json(data[0])
    })
    .catch(next)
}

module.exports.updateModalFarmaco = (req, res, next) => {
  const userRole = req.session.user.role
  const {title, subTitle, description, title_eng, subTitle_eng, description_eng, id} = req.body

  if (userRole === 'Admin') {
    ModalFarmacoInicio.findByIdAndUpdate(id, req.body, {new: true})
      .then(() => {
        ModalFarmacoInicio.find()
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

module.exports.updateFarmacoData = (req, res, next) => {
  const userRole = req.session.user.role
  const {title, subTitle, buttonTitle, title_eng, subTitle_eng, buttonTitle_eng, id} = req.body

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
    .sort({year: 1})
    .then((data) => {
      res.status(201).json(data)
    })
    .catch(next)
}

module.exports.updateTimeLineAboutUs = (req, res, next) => {
  const userRole = req.session.user.role
  const {year, desc, imgURL, desc_eng, id} = req.body

  if (userRole === 'Admin') {
    TimeLine.findByIdAndUpdate(id, req.body, {new: true})
      .then(() => {
        TimeLine.find()
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

module.exports.addTimeLineAboutUs = (req, res, next) => {
  const userRole = req.session.user.role
  const {year, imgURL, desc, desc_eng} = req.body

  if (userRole === 'Admin') {
    TimeLine.create(req.body)
      .then(() => {
        TimeLine.find()
          .sort({year: 1})
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

module.exports.deleteTimeLineAboutUs = (req, res, next) => {
  const userRole = req.session.user.role

  if (userRole === 'Admin') {
    TimeLine.findByIdAndDelete(req.params.id)
      .then(() => {
        TimeLine.find()
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

module.exports.getBanner = (req, res, next) => {
  Banner.find()
    .then((data) => {
      res.status(201).json(data[0])
    })
    .catch(next)
}

module.exports.updateBannerData = (req, res, next) => {
  const userRole = req.session.user.role
  const {description, imgURL, description_eng, id} = req.body


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
  const {description, imgURL, description_eng, id} = req.body


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

module.exports.getScience = (req, res, next) => {
  Science.find()
    .then((data) => {
      res.status(201).json(data[0])
    })
    .catch(next)
}

module.exports.updateMegatData = (req, res, next) => {
  const userRole = req.session.user.role
  const {title, description, url, buttonTitle, title_eng, description_eng, url_eng, buttonTitle_eng, id} = req.body


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

module.exports.updateScienceData = (req, res, next) => {
  const userRole = req.session.user.role
  const {title, desc, imgURL, title_eng, desc_eng, id} = req.body


  if (userRole === 'Admin') {
    Science.findByIdAndUpdate(id, req.body, {new: true})
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

module.exports.deleteGalleryItem = (req, res, next) => {
  const userRole = req.session.user.role

  if (userRole === 'Admin') {
    Gallery.findByIdAndDelete(req.params.id)
      .then(() => {
        Gallery.find()
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

module.exports.updateGalleryAboutUs = (req, res, next) => {
  const userRole = req.session.user.role
  const {year, desc, imgURL, desc_eng, id} = req.body

  if (userRole === 'Admin') {
    Gallery.findByIdAndUpdate(id, req.body, {new: true})
      .then(() => {
        Gallery.find()
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

module.exports.addGalleryAboutUs = (req, res, next) => {
  const userRole = req.session.user.role
  const {mainTitle, title, imgPath, desc, mainTitle_eng, title_eng, desc_eng} = req.body

  if (userRole === 'Admin') {
    Gallery.create(req.body)
      .then(() => {
        Gallery.find()
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

module.exports.updateGalleryTitle = (req, res, next) => {
  const userRole = req.session.user.role
  const {mainTitle, mainTitle_eng} = req.body

  if (userRole === 'Admin') {
    Gallery.find()
      .then(response => {
        response.forEach(element => {
          element.mainTitle = mainTitle
          element.mainTitle_eng = mainTitle_eng
          element.save()
        })
        res.status(201).json(response)
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
  BannerOC.find()
    .then((data) => {
      res.status(201).json(data[0])
    })
    .catch(next)
}

module.exports.updateBannerDataOC = (req, res, next) => {
  const userRole = req.session.user.role
  const {description, imgURL, description_eng, id} = req.body


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
  .sort({_id: 1})
    .then((data) => {
      res.status(201).json(data)
    })
    .catch(next)
}

module.exports.updateOurCompaniesOC = (req, res, next) => {
  const userRole = req.session.user.role
  const {name, logo, info, url, name_eng, info_eng, url_eng, id} = req.body

  if (userRole === 'Admin') {
    OurCompaniesOC.findByIdAndUpdate(id, req.body, {new: true})
      .then(() => {
        OurCompaniesOC.find()
          .then((data) => {
            res.status(201).json(data)
          })
      })
      .catch(next)
  } else {
    req.session.destroy()
    res.status(204).json({message: '¡No tiene suficientes privilegios para realizar esta acción!'})
  }
}

module.exports.deleteOCNegocio = (req, res, next) => {
  const userRole = req.session.user.role

  if (userRole === 'Admin') {
    OurCompaniesOC.findByIdAndDelete(req.params.id)
      .then(() => {
        OurCompaniesOC.find()
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

module.exports.getBannerProductsOC = (req, res, next) => {
  ProductsBannerOC.find()
    .then((data) => {
      res.status(201).json(data[0])
    })
    .catch(next)
}

module.exports.updateBannerProductsOC = (req, res, next) => {
  const userRole = req.session.user.role
  const {description, description2, imgURL, img2URL, img3URL, description_eng, description2_eng, id} = req.body


  if (userRole === 'Admin') {
    ProductsBannerOC.findByIdAndUpdate(id, req.body, {new: true})
      .then((data) => {
        res.status(201).json(data)
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
  const {description, imgURL, description_eng, id} = req.body


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
  const {description, imgURL, description_eng, id} = req.body

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
  const {title, url, button, img, title_eng, url_eng, button_eng, id} = req.body

  if (userRole === 'Admin') {
    BottomOC.findByIdAndUpdate(id, req.body, {new: true})
      .then(() => {
        BottomOC.find()
          .then((data) => {
            res.status(201).json(data)
          })
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
  const {description, imgURL, logoURL, description_eng, id} = req.body

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
  const {title, info, title_eng, info_eng, id} = req.body


  if (userRole === 'Admin') {
    OurCompaniesOCInfoCardsLeti.findByIdAndUpdate(id, req.body, {new: true})
      .then(() => {
        OurCompaniesOCInfoCardsLeti.find()
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

module.exports.deleteLetiInfoCard = (req, res, next) => {
  const userRole = req.session.user.role

  if (userRole === 'Admin') {
    OurCompaniesOCInfoCardsLeti.findByIdAndDelete(req.params.id)
      .then(() => {
        OurCompaniesOCInfoCardsLeti.find()
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

module.exports.createLetiInfoCard = (req, res, next) => {
  const userRole = req.session.user.role
  const {title, info, title_eng, info_eng} = req.body

  if (userRole === 'Admin') {
    OurCompaniesOCInfoCardsLeti.create(req.body)
      .then(() => {
        OurCompaniesOCInfoCardsLeti.find()
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

module.exports.getEquipoLetiOC = (req, res, next) => {
  EquipoLetiPageOC.find()
    .then((data) => {
      res.status(201).json(data[0])
    })
    .catch(next)
}

module.exports.updateEquipoLetiOC = (req, res, next) => {
  const userRole = req.session.user.role
  const {description, imgURL, buttonTitle, buttonLink, description_eng, buttonTitle_eng, buttonLink_eng, id} = req.body


  if (userRole === 'Admin') {
    EquipoLetiPageOC.findByIdAndUpdate(id, req.body, {new: true})
      .then((data) => {
        res.status(201).json(data)
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

module.exports.updateTimeLineLetiData = (req, res, next) => {
  const userRole = req.session.user.role
  const {desc, url, imgURL, button, desc_eng, url_eng, button_eng, id} = req.body


  if (userRole === 'Admin') {
    TimeLineLetiOC.findByIdAndUpdate(id, req.body, {new: true})
      .then(() => {
        TimeLineLetiOC.find()
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

module.exports.deleteTimeLineLeti = (req, res, next) => {
  const userRole = req.session.user.role

  if (userRole === 'Admin') {
    TimeLineLetiOC.findByIdAndDelete(req.params.id)
      .then(() => {
        TimeLineLetiOC.find()
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

/// pendiente add ///
module.exports.addTimeLineLetiData = (req, res, next) => {
  const userRole = req.session.user.role
  const {desc, url, imgURL, button, desc_eng, url_eng, button_eng} = req.body


  if (userRole === 'Admin') {
    TimeLineLetiOC.create({desc, url, imgURL, button, desc_eng, url_eng, button_eng})
      .then(() => {
        TimeLineLetiOC.find()
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
  const {description, imgURL, logoURL, description_eng, id} = req.body


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
  const {title, info, title_eng, info_eng, id} = req.body


  if (userRole === 'Admin') {
    OurCompaniesOCInfoCardsBiocontrolled.findByIdAndUpdate(id, req.body, {new: true})
      .then(() => {
        OurCompaniesOCInfoCardsBiocontrolled.find()
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

module.exports.createBiocontrolledInfoCard = (req, res, next) => {
  const userRole = req.session.user.role
  const {title, info, title_eng, info_eng} = req.body

  if (userRole === 'Admin') {
    OurCompaniesOCInfoCardsBiocontrolled.create(req.body)
      .then(() => {
        OurCompaniesOCInfoCardsBiocontrolled.find()
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

module.exports.deleteBiocontrolledInfoCard = (req, res, next) => {
  const userRole = req.session.user.role

  if (userRole === 'Admin') {
    OurCompaniesOCInfoCardsBiocontrolled.findByIdAndDelete(req.params.id)
      .then(() => {
        OurCompaniesOCInfoCardsBiocontrolled.find()
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

module.exports.getEquipoBiocontrolledOC = (req, res, next) => {
  EquipoBiocontrolledPageOC.find()
    .then((data) => {
      res.status(201).json(data[0])
    })
    .catch(next)

}

module.exports.updateEquipoBiocontrolledOC = (req, res, next) => {
  const userRole = req.session.user.role
  const {description, imgURL, buttonTitle, buttonLink, description_eng, buttonTitle_eng, buttonLink_eng, id} = req.body


  if (userRole === 'Admin') {
    EquipoBiocontrolledPageOC.findByIdAndUpdate(id, req.body, {new: true})
      .then((data) => {
        res.status(201).json(data)
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

module.exports.updateTimeLineBiocontrolledData = (req, res, next) => {
  const userRole = req.session.user.role
  const {description, imgURL, buttonTitle, buttonLink, description_eng, buttonTitle_eng, buttonLink_eng, id} = req.body


  if (userRole === 'Admin') {
    TimeLineBiocontrolledOC.findByIdAndUpdate(id, req.body, {new: true})
      .then(() => {
        TimeLineBiocontrolledOC.find()
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

module.exports.deleteTimeLineBiocontrolled = (req, res, next) => {
  const userRole = req.session.user.role

  if (userRole === 'Admin') {
    TimeLineBiocontrolledOC.findByIdAndDelete(req.params.id)
      .then(() => {
        TimeLineBiocontrolledOC.find()
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

/// pendiente add ///
module.exports.addTimeLineBiocontrolledData = (req, res, next) => {
  const userRole = req.session.user.role
  const {desc, imgURL, buttonTitle, buttonLink, desc_eng, buttonTitle_eng, buttonLink_eng, id} = req.body


  if (userRole === 'Admin') {
    TimeLineBiocontrolledOC.create(req.body)
      .then(() => {
        TimeLineBiocontrolledOC.find()
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

module.exports.getCarrouselBiocontrolled = (req, res, next) => {
  CarrouselBiocontrolledOC.find()
    .then((data) => {
      res.status(201).json(data)
    })
    .catch(next)

}

module.exports.updateCarrouselBiocontrolledData = (req, res, next) => {
  const userRole = req.session.user.role
  const {info, info_eng, id} = req.body

  if (userRole === 'Admin') {
    CarrouselBiocontrolledOC.findByIdAndUpdate(id, req.body, {new: true})
      .then(() => {
        CarrouselBiocontrolledOC.find()
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

module.exports.updateCarrouselTitle = (req, res, next) => {
  const userRole = req.session.user.role
  const {title, title_eng} = req.body

  if (userRole === 'Admin') {
    CarrouselBiocontrolledOC.find()
      .then(response => {
        response.forEach(element => {
          element.title = title
          element.title_eng = title_eng
          element.save()
        })
        res.status(201).json(response)
      })
      .catch(next)
  } else {
    req.session.destroy()
    res.status(204).json({message: '¡No tiene suficientes privilegios para realizar esta acción!'})
  }

}

module.exports.deleteBioCarrouselItem = (req, res, next) => {
  const userRole = req.session.user.role

  if (userRole === 'Admin') {
    CarrouselBiocontrolledOC.findByIdAndDelete(req.params.id)
      .then(() => {
        CarrouselBiocontrolledOC.find()
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

/// pendiente add ///
module.exports.addCarrouselBiocontrolledData = (req, res, next) => {
  const userRole = req.session.user.role
  const {title, info, title_eng, info_eng, id} = req.body


  if (userRole === 'Admin') {
    CarrouselBiocontrolledOC.create(req.body)
      .then(() => {
        CarrouselBiocontrolledOC.find()
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
  const {description, imgURL, logoURL, description_eng, id} = req.body


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
  const {videoURL, id} = req.body


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
  const {description, imgURL, buttonTitle, buttonLink, description_eng, buttonTitle_eng, buttonLink_eng, id} = req.body


  if (userRole === 'Admin') {
    EquipoGenvenPageOC.findByIdAndUpdate(id, req.body, {new: true})
      .then((data) => {
        res.status(201).json(data)
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
  const {desc, imgURL, buttonText, buttonLink, desc_eng, buttonText_eng, buttonLink_eng} = req.body

  if (userRole === 'Admin') {
    TimeLineGenvenOC.create(req.body)
      .then(() => {
        TimeLineGenvenOC.find()
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

module.exports.getProductosGenven = (req, res, next) => {
  ProductosGenvenOC.find()
    .then((data) => {
      res.status(201).json(data[0])
    })
    .catch(next)
}

module.exports.updateProductosGenvenData = (req, res, next) => {
  const userRole = req.session.user.role
  const {description, buttonTitle, buttonLink, img1URL, img2URL, img3URL, description_eng, buttonTitle_eng, buttonLink_eng, id} = req.body


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

module.exports.updateGenvenTimeline = (req, res, next) => {
  const userRole = req.session.user.role
  const {desc, buttonLink, imgURL, buttonText, desc_eng, buttonLink_eng, buttonText_eng, id} = req.body

  if (userRole === 'Admin') {
    TimeLineGenvenOC.findByIdAndUpdate(id, req.body, {new: true})
      .then(() => {
        TimeLineGenvenOC.find()
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

module.exports.deleteTimeLineGenven = (req, res, next) => {
  const userRole = req.session.user.role

  if (userRole === 'Admin') {
    TimeLineGenvenOC.findByIdAndRemove(req.params.id)
      .then(() => {
        TimeLineGenvenOC.find()
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

/// pendiente add ///
module.exports.addProductosGenvenData = (req, res, next) => {
  const userRole = req.session.user.role
  const {description, buttonTitle, buttonLink, img1URL, img2URL, img3URL, description_eng, buttonTitle_eng, buttonLink_eng} = req.body


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
  const {description, imgURL, title, description_eng, title_eng, id} = req.body


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
  const {mainTitle, imgURL, title, info, mainTitle_eng, title_eng, info_eng, id} = req.body

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
  const {title, description, person, imgURL, buttonTitle, buttonLink, title_eng, description_eng, person_eng, buttonTitle_eng, buttonLink_eng, id} = req.body

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
  const {imgURL, mainTitle, mainTitle_eng, id} = req.body

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

module.exports.getInfoBannerOP = (req, res, next) => {
  InfoBannerOurPeople.find()
    .then((data) => {
      res.status(201).json(data)
    })
    .catch(next)
}

module.exports.updateInfoBannerDataOurPeople = (req, res, next) => {
  const userRole = req.session.user.role
  const {mainDescription, backgroundURL, item, mainDescription_eng, id} = req.body

  if (userRole === 'Admin') {
    InfoBannerOurPeople.findByIdAndUpdate(id, req.body, {new: true, useFindAndModify: false})
        .then((data) => {
          res.status(201).json(data)
        })
        .catch(next)
  } else {
    req.session.destroy()
    res.status(204).json({message: '¡No tiene suficientes privilegios para realizar esta acción!'})
  }
}

module.exports.updateInfoBannerDataOurPeopleDet = (req, res, next) => {
  const userRole = req.session.user.role
  const {desc, iconURL, number, desc_eng, id} = req.body
  const {whole} = req.body
  const previousId = whole._id

  for (let i = 0; i < whole.item.length; i++) {
    if (whole.item[i]._id === id) {
      whole.item[i].desc = desc;
      whole.item[i].iconURL = iconURL;
      whole.item[i].number = number;
      whole.item[i].desc_eng = desc_eng;
    }
  }

  if (userRole === 'Admin') {
    InfoBannerOurPeople.findByIdAndUpdate(previousId, whole, {new: true, useFindAndModify: false})
        .then((data) => {
          res.status(201).json(data.item)
        })
        .catch(next)
  } else {
    req.session.destroy()
    res.status(204).json({message: '¡No tiene suficientes privilegios para realizar esta acción!'})
  }
}

module.exports.getBannerBtm = (req, res, next) => {
  BannerBtm.find()
    .then((data) => {
      res.status(201).json(data)
    })
    .catch(next)
}

module.exports.updateBannerBtm = (req, res, next) => {
  const userRole = req.session.user.role
  const {description, imgURL, description_eng, id} = req.body

  if (userRole === 'Admin') {
    BannerBtm.findByIdAndUpdate(id, req.body, {new: true})
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
  const {title, info, title_eng, info_eng} = req.body

  if (userRole === 'Admin') {
    InfoCardsOurPeople.create({title, info, title_eng, info_eng})
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
  const {title, buttonLink, buttonTitle, img, title_eng, buttonLink_eng, buttonTitle_eng, id} = req.body


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
  const {title, description, url, buttonTitle, title_eng, description_eng, url_eng, buttonTitle_eng, id} = req.body


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
  const {description, imgURL, description_eng, id} = req.body


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
  const {videoURL, id} = req.body

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
  const {desc, imgURL, desc_eng} = req.body

  if (userRole === 'Admin') {
    TimeLinePurpose.create(req.body)
      .then(() => {
        TimeLinePurpose.find()
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

module.exports.deleteTimeLinePurposeData = (req, res, next) => {
  const userRole = req.session.user.role
  const id = req.params.id

  if (userRole === 'Admin') {
    TimeLinePurpose.findByIdAndDelete(id)
      .then(() => {
        TimeLinePurpose.find()
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

module.exports.updateTimeLinePurpose = (req, res, next) => {
  const userRole = req.session.user.role
  const {desc, imgURL, desc_eng, id} = req.body

  if (userRole === 'Admin') {
    TimeLinePurpose.findByIdAndUpdate(id, req.body, {new: true})
      .then(() => {
        TimeLinePurpose.find()
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

module.exports.updateTitleFarmDataPurpose = (req, res, next) => {
  const userRole = req.session.user.role
  const {title, title_eng, id} = req.body


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
  const {name, picPath, QRpath, line, composition, health_register, active_principle, posology, presentation, indication, therapeutic_group, category, util_life, cpe, how_to_use, contraindications, adverse_reactions, prospect, show_in_products, name_eng, line_eng, composition_eng, health_register_eng, active_principle_eng, posology_eng, presentation_eng, indication_eng, therapeutic_group_eng, category_eng, util_life_eng, cpe_eng, how_to_use_eng, contraindications_eng, adverse_reactions_eng, prospect_eng} = req.body

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
  const {name, picPath, QRpath, line, composition, health_register, active_principle, posology, presentation, indication, therapeutic_group, category, util_life, cpe, how_to_use, contraindications, adverse_reactions, prospect, show_in_products, name_eng, line_eng, composition_eng, health_register_eng, active_principle_eng, posology_eng, presentation_eng, indication_eng, therapeutic_group_eng, category_eng, util_life_eng, cpe_eng, how_to_use_eng, contraindications_eng, adverse_reactions_eng, prospect_eng} = req.body

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

module.exports.getNavData = (req, res, next) => {
    Nav.find()
      .sort({_id: 1})
      .then(data => {
        res.status(201).json(data)
      })
      .catch(next)

}

module.exports.updateNavData = (req, res, next) => {
  const userRole = req.session.user.role
  const {title, desc, nav_btn, nav_cta, title_eng, desc_eng, nav_btn_eng, nav_cta_eng, id} = req.body

  if (userRole === 'Admin') {
    Nav.findByIdAndUpdate(id, req.body, {new: true})
      .then(() => {
        Nav.find()
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