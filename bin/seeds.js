require('../config/db.config')
require('dotenv').config()

const User = require('../models/user.model')
const Vigilancia = require('../models/home/vigilancia.model')
const faker = require('faker')

const userN = 30
const vigilanciaN = 3


////////////////////////////////////////
////////////   HOME  ///////////////////
////////////////////////////////////////

const CarrouselHome = require('../models/home/carrouselHome.model')
const FarmacoVigilancia = require('../models/home/farmacoVigilancia.model')
const MeetPeopleWorkWithUsHome = require('../models/home/meetPeopleWorkWithUsHome.model')
const ModalFarmacoVigilancia = require('../models/home/modalFarmacoVigilancia.model')
const Portfolio = require('../models/home/portfolio.model')
const UnidadesNegocio = require('../models/home/unidadesNegocio.model')
const UsInfo = require('../models/home/usInfo.model')
const Video = require('../models/home/video.model')
const carrouselHomeData = require('../data/homeCarousel')
const portfolioData = require('../data/dataPortafolio')
const meetPeopleWorkWithUsData = require('../data/dataMeetPeopleWorkWhitUs')
const unidadesNegocioData = require('../data/unidadesNegocio')


Promise.all([
  CarrouselHome.deleteMany(),
  FarmacoVigilancia.deleteMany(),
  MeetPeopleWorkWithUsHome.deleteMany(),
  ModalFarmacoVigilancia.deleteMany(),
  Portfolio.deleteMany(),
  UnidadesNegocio.deleteMany(),
  UsInfo.deleteMany(),
  Video.deleteMany(),
])
  .then(() => {
    console.log('all databases cleaned')
    carrouselHomeData.forEach(unidad => {
      const carrouselHome = new CarrouselHome({
        title: unidad.title,
        name: unidad.name,
        img: unidad.img,
        desc: unidad.desc,
      })
      carrouselHome.save()
        .then(() => console.log(`carrouselHome created`))
        .catch(error => console.log(error))
    })
    const farmacoVigilancia = new FarmacoVigilancia({
      title: 'Farmacovigilancia',
      subTitle: '¿Tiene algún comentario o efecto adverso </br> de alguno de nuestro productos? ',
      buttonTitle: '¡Su opinión es importante para nosotros!',
    })
    farmacoVigilancia.save()
      .then(() => console.log(`farmacoVigilancia created`))
      .catch(error => console.log(error))
    meetPeopleWorkWithUsData.forEach(unidad => {
      const meetPeopleWorkWithUsHome = new MeetPeopleWorkWithUsHome({
        title: unidad.title,
        button: unidad.button,
        url: unidad.url,
        img: unidad.img,
      })
      meetPeopleWorkWithUsHome.save()
        .then(() => console.log(`meetPeopleWorkWithUsHome created`))
        .catch(error => console.log(error))
    })
    const modalFarmacoVigilancia = new ModalFarmacoVigilancia({
      title: '.Estamos para cuidarte',
      subTitle: 'Farmacovigilancia',
      description: 'Conscientes de la responsabilidad por ofrecer medicamentos de alta calidad, facilitamos la recolección, evaluación e investigación de la información sobre posibles reacciones adversas de nuestros medicamentos, para realizar correctivos y establecer la máxima seguridad terapéutica de los mismos.',
      blueDescription: 'Nos preocupa saber si alguno de nuestros productos le causó algún efecto adverso, así podemos trabajar para ayudarle.',
      name: 'Nombre del paciente',
      surname: 'Apellido del paciente',
      birthday: 'Fecha de nacimiento',
      gender: 'Género',
      medicament: 'Medicamento que tomó',
      prescrit: '¿El medicamento fue prescrito?',
      describe: 'Describa detalladamente el/los efectos presentados',
    })
    modalFarmacoVigilancia.save()
      .then(() => console.log(`modalFarmacoVigilancia created`))
      .catch(error => console.log(error))
    portfolioData.forEach(unidad => {
      const portfolio = new Portfolio({
        superiorTitle: unidad.superiorTitle,
        title: unidad.title,
        description: unidad.desc,
      })
      portfolio.save()
        .then(() => console.log(`portfolio created`))
        .catch(error => console.log(error))
    })
    unidadesNegocioData.forEach(unidad => {
      const unidadesNegocio = new UnidadesNegocio({
        mainTitle: unidad.mainTitle,
        name: unidad.name,
        logo: unidad.logo,
        desc: unidad.desc,
        url: unidad.url,
      })
      unidadesNegocio.save()
        .then(() => console.log(`portfolio created`))
        .catch(error => console.log(error))
    })
    const usInfo = new UsInfo({
      description: 'Grupo Leti es un laboratorio farmacéutico venezolano que por más de 70 años ha generado soluciones de salud con la producción y comercialización de un amplio portafolio de medicamentos, sustentado por nuestro destacado y comprometido talento humano. Somos pioneros en el desarrollo del sector, con tecnología de vanguardia y cumpliendo los más altos estándares de calidad globales para mejorar la vida de todos constante y oportunamente.',
      url: '/sobre-nosotros',
      buttonTitle: 'Conoce más sobre nosotros',
    })
    usInfo.save()
      .then(() => console.log(`usInfo created`))
      .catch(error => console.log(error))
    const video = new Video({
      url: 'https://firebasestorage.googleapis.com/v0/b/grupo-leti-fd84e.appspot.com/o/videos%2Fhome-video.mp4?alt=media&token=e5cf0b01-b8be-45c3-8793-2ec7c26ee6c0',
    })
    video.save()
      .then(() => console.log(`video created`))
      .catch(error => console.log(error))
  })
  .catch(error => console.log(error))

////////////////////////////////////////

/////////////////////////////////////////
///////////// AREAS TERAPEUTICAS /////////////
/////////////////////////////////////////

const BannerAT = require('../models/home/areasterapeuticas/bannerAT.model')
const TimeLineAT = require('../models/home/areasterapeuticas/timeLineAT.model')
const BottomCtaAT = require('../models/home/areasterapeuticas/bottomCtaAT.model')

const timeLineATData = require('../data/areasTeraData')
const bottomCtaATData = require('../data/bottomCtaATData')

Promise.all([
  BannerAT.deleteMany(),
  TimeLineAT.deleteMany(),
  BottomCtaAT.deleteMany(),
])
  .then(() => {
    console.log('all databases cleaned')
    const bannerAT = new BannerAT({
      title: 'Áreas terapéuticas',
      description: 'Atendemos una variedad de áreas terapéuticas para cubrir con las necesidades de salud de los venezolanos y asegurar el bienestar del país',
      imgURL: 'https://firebasestorage.googleapis.com/v0/b/grupo-leti-fd84e.appspot.com/o/images%2Fareas-terapeuticas-banner.png?alt=media&token=5023083b-cf80-4ef0-a1ea-b0809f9c57f3',
    })
    bannerAT.save()
      .then(() => console.log(`BannerAT created`))
      .catch(error => console.log(error))
    timeLineATData.forEach(unidad => {
      const timeLineAT = new TimeLineAT({
        mainTitle: unidad.mainTitle,
        imgURL: unidad.imgURL,
        desc: unidad.desc,
        title: unidad.title,
      })
      timeLineAT.save()
        .then(() => console.log(`timeLineAT created`))
        .catch(error => console.log(error))
    })
    bottomCtaATData.forEach(unidad => {
      const bottomCtaAT = new BottomCtaAT({
        title: unidad.title,
        buttonTitle: unidad.buttonTitle,
        buttonLink: unidad.buttonLink,
        img: unidad.img,
      })
      bottomCtaAT.save()
        .then(() => console.log(`BottomCtaAT created`))
        .catch(error => console.log(error))
    })
  })
  .catch(error => console.log(error))

////////////////////////////////////////

////////////////////////////////////////
////////////   About Us  ///////////////
////////////////////////////////////////

const Banner = require('../models/aboutUs/aboutUsComponents/banner.model')
const Gallery = require('../models/aboutUs/aboutUsComponents/gallery.model')
const MarcandoPauta = require('../models/aboutUs/aboutUsComponents/marcandoPauta.model')
const Megat = require('../models/aboutUs/aboutUsComponents/megat.model')
const Timeline = require('../models/aboutUs/aboutUsComponents/timeline.model')

const dataGallery = require('../data/dataGallery')
const timelineData = require('../data/timeline')

Promise.all([
  Banner.deleteMany(),
  Gallery.deleteMany(),
  MarcandoPauta.deleteMany(),
  Megat.deleteMany(),
  Timeline.deleteMany(),
])
  .then(() => {
    console.log('all databases cleaned')
    const banner = new Banner({
      description: 'Desarrollamos soluciones de salud que marcan la diferencia en la vida de los venezolanos',
      imgURL: 'https://firebasestorage.googleapis.com/v0/b/grupo-leti-fd84e.appspot.com/o/images%2Fabout-us-bg.png?alt=media&token=a5452461-634a-4f31-828e-e7b3fe1a1170',
    })
    banner.save()
      .then(() => console.log(`banner created`))
      .catch(error => console.log(error))
    dataGallery.forEach(unidad => {
      const gallery = new Gallery({
        mainTitle: unidad.mainTitle,
        title: unidad.title,
        desc: unidad.desc,
        imgPath: unidad.imgPath,
      })
      gallery.save()
        .then(() => console.log(`gallery created`))
        .catch(error => console.log(error))
    })
    const marcandoPauta = new MarcandoPauta({
      description: 'Contamos con el mejor talento que con su ingenio e increíble calidad humana, trabajan muy comprometidos día a día por los venezolanos, velando por la salud de todo un país',
      imgURL: 'https://firebasestorage.googleapis.com/v0/b/grupo-leti-fd84e.appspot.com/o/images%2Fmarcando-pauta.png?alt=media&token=3d4b2d3b-fba5-4e1b-8cef-57350eaf650d',
    })
    marcandoPauta.save()
      .then(() => console.log(`marcandoPauta created`))
      .catch(error => console.log(error))
    const megat = new Megat({
      title: 'Laboratorios Leti en latinoamérica',
      description: 'Empresa homóloga de Laboratorios Leti que desarrolla productos de nuestro portafolio para los ecuatorianos',
      url: 'https://megat.com.ec/',
      buttonTitle: 'Conocer Megat',
    })
    megat.save()
      .then(() => console.log(`megat created`))
      .catch(error => console.log(error))
    timelineData.forEach(unidad => {
      const timeline = new Timeline({
        year: unidad.year,
        imgURL: unidad.imgURL,
        desc: unidad.desc,
      })
      timeline.save()
        .then(() => console.log(`timeline created`))
        .catch(error => console.log(error))
    })
  })
  .catch(error => console.log(error))

////////////////////////////////////////

/////////////////////////////////////////
////////// NUESTRAS EMPRESAS ////////////
/////////////////////////////////////////

const BannerEmpresas = require('../models/nuestrasEmpresas/bannerEmpresas.model')
const BannerProductos = require('../models/nuestrasEmpresas/bannerProductos.model')
const CuidarEmpresas = require('../models/nuestrasEmpresas/cuidarEmpresas.model')
const InnovarEmpresas = require('../models/nuestrasEmpresas/innovarEmpresas.model')
const MeetEmpresas = require('../models/nuestrasEmpresas/meetEmpresas.model')
const UnidadesNegocioEmpresas = require('../models/nuestrasEmpresas/unidadesNegocioEmpresas.model')
const Vadevecum = require('../models/vadevecum.model')


const meetEmpresasData = require('../data/dataMeetEmpresas')
const unidadesEmpresasData = require('../data/unidadesNegocioEmpresasData')
const vadevecumData = require('../data/vadevecum')

Promise.all([
  BannerEmpresas.deleteMany(),
  BannerProductos.deleteMany(),
  CuidarEmpresas.deleteMany(),
  InnovarEmpresas.deleteMany(),
  MeetEmpresas.deleteMany(),
  UnidadesNegocioEmpresas.deleteMany(),
  Vadevecum.deleteMany(),
])
  .then(() => {
    console.log('all databases cleaned')
    const bannerEmpresas = new BannerEmpresas({
      description: 'Sustentados por tres grandes unidades de negocio, que se ocupan de áreas específicas, y se integran entre ellas para lograr <span className="blue-text">mejores resultados</span>',
      imgURL: 'https://firebasestorage.googleapis.com/v0/b/grupo-leti-fd84e.appspot.com/o/images%2Four-companies-bg.png?alt=media&token=03850ed2-9969-4881-bca4-db7a075f4048',
    })
    bannerEmpresas.save()
      .then(() => console.log(`banner created`))
      .catch(error => console.log(error))
    unidadesEmpresasData.forEach(unidad => {
      const unidadesNegocioEmpresas = new UnidadesNegocioEmpresas({
        name: unidad.name,
        logo: unidad.logo,
        url: unidad.url,
        info: unidad.info,
      })
      unidadesNegocioEmpresas.save()
        .then(() => console.log(`unidadesNegocioEmpresas created`))
        .catch(error => console.log(error))
    })
    const bannerProductos = new BannerProductos({
      description: 'A través de esta relación de sinergia, es que logramos nuestros objetivos',
      description2: 'Ofrecer gran variedad y efectivos productos',
      imgURL: 'ulgarin.png',
      img2URL: 'azitomicina.png',
      img3URL: 'diklason.png',
    })
    bannerProductos.save()
      .then(() => console.log(`BannerProductos created`))
      .catch(error => console.log(error))
    const cuidarEmpresas = new CuidarEmpresas({
      description: 'Cuidar la salud de los venezolanos',
      imgURL: 'https://firebasestorage.googleapis.com/v0/b/grupo-leti-fd84e.appspot.com/o/images%2Fcuidar.png?alt=media&token=d4e8b6a0-d3d7-4808-8a7d-772344c55876',
    })
    cuidarEmpresas.save()
      .then(() => console.log(`cuidar empresas created`))
      .catch(error => console.log(error))
    const innovarEmpresas = new InnovarEmpresas({
      description: 'Innovar en el mercado farmacéutico',
    })
    innovarEmpresas.save()
      .then(() => console.log(`banner 4 created`))
      .catch(error => console.log(error))
    meetEmpresasData.forEach(unidad => {
      const meetEmpresas = new MeetEmpresas({
        title: unidad.title,
        button: unidad.button,
        url: unidad.url,
        img: unidad.img
      })
      meetEmpresas.save()
        .then(() => console.log(`MeetEmpresas created`))
        .catch(error => console.log(error))
    })
    vadevecumData.forEach(unidad => {
      const vadevecum = new Vadevecum({
        line: unidad.line,
        name: unidad.name,
        active_principle: unidad.active_principle,
        composition: unidad.composition,
        indication: unidad.indication,
        posology: unidad.posology,
        presentation: unidad.presentation,
        health_register: unidad.health_register,
        therapeutic_group: unidad.therapeutic_group,
        category: unidad.category,
        tv_spot: unidad.tv_spot,
        trademarks: unidad.trademarks,
        CPE: 'CPE' + Math.floor(Math.random() * 10000000000),
      })
      vadevecum.save()
        .then(() => console.log(`vadevecum created`))
        .catch(error => console.log(error))
    })
  })
  .catch(error => console.log(error))

////////////////////////////////////////


/////////////////////////////////////////
///////////// LAB LETI PAGE /////////////
/////////////////////////////////////////

const BannerLetiPage = require('../models/nuestrasEmpresas/laboratoriosLetiPage/bannerLetiPage.model')
const InfoCardsLetiPage = require('../models/nuestrasEmpresas/laboratoriosLetiPage/infoCardsLetiPage.model')
const LetiTimeLine = require('../models/nuestrasEmpresas/laboratoriosLetiPage/letiTimeLine.model')
const EquipoLetiPage = require('../models/nuestrasEmpresas/laboratoriosLetiPage/equipoLetiPage.model')


const letiTimeLineData = require('../data/letiTimeline')
const letiData = require('../data/dataLeti')

Promise.all([
  BannerLetiPage.deleteMany(),
  InfoCardsLetiPage.deleteMany(),
  LetiTimeLine.deleteMany(),
  EquipoLetiPage.deleteMany(),
])
  .then(() => {
    console.log('all databases cleaned')
    const bannerLetiPage = new BannerLetiPage({
      description: 'Esta es la unidad que se encarga de desarrollar la gama de productos que abarca diferentes áreas terapéuticas: cardiovascular, metabolismo, gástrica, respiratoria, neurológicas, músculo-esqueléticas, dolor, antibióticos, vitaminas, tanto para el paciente pediátrico como para el paciente adulto.',
      imgURL: 'https://firebasestorage.googleapis.com/v0/b/grupo-leti-fd84e.appspot.com/o/images%2Fleti-banner-img.png?alt=media&token=d81fe978-12f7-4fc1-a66b-4d70a0c05f20',
      logoURL: 'https://firebasestorage.googleapis.com/v0/b/grupo-leti-fd84e.appspot.com/o/images%2Fleti.svg?alt=media&token=7b074feb-97aa-4ab9-bf8a-f0981dfff556'
    })
    bannerLetiPage.save()
      .then(() => console.log(`bannerletipage created`))
      .catch(error => console.log(error))
    letiData.forEach(unidad => {
      const infoCardsLetiPage = new InfoCardsLetiPage({
        title: unidad.title,
        info: unidad.info,
      })
      infoCardsLetiPage.save()
        .then(() => console.log(`infoCardsLetiPage created`))
        .catch(error => console.log(error))
    })
    letiTimeLineData.forEach(unidad => {
      const letiTimeLine = new LetiTimeLine({
        imgURL: unidad.imgURL,
        desc: unidad.desc,
        button: unidad.button,
        url: unidad.url
      })
      letiTimeLine.save()
        .then(() => console.log(`letiTimeLine created`))
        .catch(error => console.log(error))
    })
    const equipoLetiPage = new EquipoLetiPage({
      description: 'El laboratorio más grande y más importante por la cantidad de ventas que tenía, cantidad de productos, cantidad de categorías donde participaba.',
      person: 'Ramón, director de unidad',
      buttonTitle: 'Conoce nuestra filosofía',
      buttonLink: '/nuestra-filosofia',
      imgURL: 'https://firebasestorage.googleapis.com/v0/b/grupo-leti-fd84e.appspot.com/o/images%2Fequipo.jpg?alt=media&token=301345d4-0935-4285-9681-481ae645eb83',
    })
    equipoLetiPage.save()
      .then(() => console.log(`equipo leti page created`))
      .catch(error => console.log(error))
  })
  .catch(error => console.log(error))

////////////////////////////////////////

/////////////////////////////////////////
////////// BIOCONTROLLED PAGE ///////////
/////////////////////////////////////////

const BannerBiocontrolledPage = require('../models/nuestrasEmpresas/biocontrolledPage/bannerBiocontrolledPage.model')
const InfoCardsBiocontrolledPage = require('../models/nuestrasEmpresas/biocontrolledPage/infoCardsBiocontrolledPage.model')
const CarrouselBiocontrolledPage = require('../models/nuestrasEmpresas/biocontrolledPage/biocontrolledCarrousel.model')
const BiocontrolledTimeLine = require('../models/nuestrasEmpresas/biocontrolledPage/biocontrolledTimeLine.model')
const EquipoBiocontrolledPage = require('../models/nuestrasEmpresas/biocontrolledPage/equipoBiocontrolledPage.model')


const biocontrolledCarrousel = require('../data/biocontrolledCarousel')
const biocontrolledTimeLineData = require('../data/biocontrolledTimeline')
const dataBiocontrolled = require('../data/dataBiocontrolled')

Promise.all([
  BannerBiocontrolledPage.deleteMany(),
  InfoCardsBiocontrolledPage.deleteMany(),
  CarrouselBiocontrolledPage.deleteMany(),
  BiocontrolledTimeLine.deleteMany(),
  EquipoBiocontrolledPage.deleteMany(),
])
  .then(() => {
    console.log('all databases cleaned')
    const bannerBiocontrolledPage = new BannerBiocontrolledPage({
      description: 'Esta es la unidad de explorar nuevas maneras y eficaces maneras de desarrollar medicamentos, gracias a <span className="blue-text">Biocontrolled</span> es que nos mantenemos a la vanguardia y podemos seguir ofreciendo productos cada vez más beneficiosos.',
      imgURL: 'https://firebasestorage.googleapis.com/v0/b/grupo-leti-fd84e.appspot.com/o/images%2Fbiocontrolled-banner.png?alt=media&token=e91792ea-145f-4c05-89a2-f40c00bd9c02',
      logoURL: 'https://firebasestorage.googleapis.com/v0/b/grupo-leti-fd84e.appspot.com/o/images%2Fbiocontrolled.svg?alt=media&token=75a2a9f3-e198-4af0-b066-80d414f0715e',
    })
    bannerBiocontrolledPage.save()
      .then(() => console.log(`bannerletipage created`))
      .catch(error => console.log(error))
    dataBiocontrolled.forEach(unidad => {
      const infoCardsBiocontrolledPage = new InfoCardsBiocontrolledPage({
        title: unidad.title,
        info: unidad.info,
      })
      infoCardsBiocontrolledPage.save()
        .then(() => console.log(`infoCardsBiocontrolledPage created`))
        .catch(error => console.log(error))
    })
    biocontrolledCarrousel.forEach(unidad => {
      const carrouselBiocontrolledPage = new CarrouselBiocontrolledPage({
        title: unidad.title,
        info: unidad.info,
      })
      carrouselBiocontrolledPage.save()
        .then(() => console.log(`infoCardsBiocontrolledPage created`))
        .catch(error => console.log(error))
    })
    biocontrolledTimeLineData.forEach(unidad => {
      const biocontrolledTimeLine = new BiocontrolledTimeLine({
        imgURL: unidad.imgURL,
        desc: unidad.desc,
        buttonTitle: unidad.buttonTitle,
        buttonLink: unidad.buttonLink,
      })
      biocontrolledTimeLine.save()
        .then(() => console.log(`biocontrolledTimeLine created`))
        .catch(error => console.log(error))
    })
    const equipoBiocontrolledPage = new EquipoBiocontrolledPage({
      description: 'El laboratorio más grande y más importante por la cantidad de ventas que tenía, cantidad de productos, cantidad de categoríasdonde participaba.',
      person: 'Ramón, director de unidad',
      buttonTitle: 'Conoce nuestra filosofía',
      buttonLink: '/nuestra-filosofia',
      imgURL: 'https://firebasestorage.googleapis.com/v0/b/grupo-leti-fd84e.appspot.com/o/images%2Fbicontrolled-bottom.jpg?alt=media&token=3d433325-6f4f-43a8-ba39-1fccca368d5a',
    })
    equipoBiocontrolledPage.save()
      .then(() => console.log(`equipo Biocontrolled page created`))
      .catch(error => console.log(error))
  })
  .catch(error => console.log(error))

////////////////////////////////////////

/////////////////////////////////////////
////////////// GENVEN PAGE //////////////
/////////////////////////////////////////

const BannerGenvenPage = require('../models/nuestrasEmpresas/genvenPage/bannerGenvenPage.model')
const VideoGenvenPage = require('../models/nuestrasEmpresas/genvenPage/videoGenvenPage.model')
const ProductosGenvenPage = require('../models/nuestrasEmpresas/genvenPage/genvenProductos.model')
const GenvenTimeLine = require('../models/nuestrasEmpresas/genvenPage/genvenTimeLine.model')
const EquipoGenvenPage = require('../models/nuestrasEmpresas/genvenPage/equipoGenvenPage.model')

const genvenTimeLineData = require('../data/genvenTimeline')

Promise.all([
  BannerGenvenPage.deleteMany(),
  VideoGenvenPage.deleteMany(),
  ProductosGenvenPage.deleteMany(),
  GenvenTimeLine.deleteMany(),
  EquipoGenvenPage.deleteMany(),
])
  .then(() => {
    console.log('all databases cleaned')
    const bannerGenvenPage = new BannerGenvenPage({
      description: '<span className="blue-text">Genven Genéricos Venezolanos,</span> es nuestra línea de genéricos de Laboratorios Leti S.A.V, con más de 25 años en el mercado farmacéutico venezolano.<br /><br />Esta planta de manufactura cuenta con <span className="blue-text">tecnología de punta y estrictos controles de calidad</span> en el proceso de fabricación de sus productos, lo que se traduce en medicamentos de comprobada eficacia terapéutica, que cumplen con los rigurosos controles exigidos por las Autoridades Sanitarias nacionales.',
      logoURL: 'https://firebasestorage.googleapis.com/v0/b/grupo-leti-fd84e.appspot.com/o/images%2Fgenven.svg?alt=media&token=d36a1da6-0a37-4ce4-891c-f2c850d7c0be',
      imgURL: 'https://firebasestorage.googleapis.com/v0/b/grupo-leti-fd84e.appspot.com/o/images%2Fgenven-banner-img.png?alt=media&token=ce53e790-b710-405d-911d-cb7e6750bdc9'
    })
    bannerGenvenPage.save()
      .then(() => console.log(`bannerletipage created`))
      .catch(error => console.log(error))
    const videoGenvenPage = new VideoGenvenPage({
      videoURL: 'https://firebasestorage.googleapis.com/v0/b/grupo-leti-fd84e.appspot.com/o/videos%2Fhome-video.mp4?alt=media&token=e5cf0b01-b8be-45c3-8793-2ec7c26ee6c0',
    })
    videoGenvenPage.save()
      .then(() => console.log(`videoGenvenPage created`))
      .catch(error => console.log(error))
    const productosGenvenPage = new ProductosGenvenPage({
      description: 'Ofrecemos terapias en las principales áreas terapéuticas: Cardiovascular, anti-infecciosos, anti-inflamatorios y analgésicos.',
      buttonTitle: 'Conoce los productos',
      buttonLink: '/productos',
      img1URL: 'https://firebasestorage.googleapis.com/v0/b/grupo-leti-fd84e.appspot.com/o/images%2Fgenven001.png?alt=media&token=2000cb23-d4f5-47f5-82bf-e97013766e2d',
      img2URL: 'https://firebasestorage.googleapis.com/v0/b/grupo-leti-fd84e.appspot.com/o/images%2Fgenven002.png?alt=media&token=a3c89546-c25d-4086-83ce-8f428d06b909',
      img3URL: 'https://firebasestorage.googleapis.com/v0/b/grupo-leti-fd84e.appspot.com/o/images%2Fgenven003.png?alt=media&token=febba31c-02cf-4473-8427-0542de8174e2',
    })
    productosGenvenPage.save()
      .then(() => console.log(`equipo Biocontrolled page created`))
      .catch(error => console.log(error))
    genvenTimeLineData.forEach(unidad => {
      const genvenTimeLine = new GenvenTimeLine({
        imgURL: unidad.imgURL,
        desc: unidad.desc,
        buttonText: unidad.buttonText,
        buttonLink: unidad.buttonLink,
      })
      genvenTimeLine.save()
        .then(() => console.log(`genvenTimeLine created`))
        .catch(error => console.log(error))
    })
    const equipoGenvenPage = new EquipoGenvenPage({
      description: 'El laboratorio más grande y más importante por la cantidad de ventas que tenía, cantidad de productos, cantidad de categoríasdonde participaba.',
      person: 'Ramón, director de unidad',
      buttonTitle: 'Conoce nuestra filosofía',
      buttonLink: '/nuestra-filosofia',
      imgURL: 'https://firebasestorage.googleapis.com/v0/b/grupo-leti-fd84e.appspot.com/o/images%2Fequipo.jpg?alt=media&token=301345d4-0935-4285-9681-481ae645eb83',
    })
    equipoGenvenPage.save()
      .then(() => console.log(`equipo Genven page created`))
      .catch(error => console.log(error))
  })
  .catch(error => console.log(error))

////////////////////////////////////////

///////////////////////////////////////////
/////// INVESTIGACIÓN Y DESARROLLO ////////
///////////////////////////////////////////

const BannerID = require('../models/IAD/IDcomponents/bannerID.model')
const InfoCardsID = require('../models/IAD/IDcomponents/infoCardsID.model')
const ObjetivosID = require('../models/IAD/IDcomponents/objetivosID.model')
const BottomCtaID = require('../models/IAD/IDcomponents/bottomCtaID.model')

const infocardsIDData = require('../data/dataIyd')
const objetivosIDData = require('../data/dataGoals')
const bottomCtaIDData = require('../data/bottomCtaIDData')

Promise.all([
  BannerID.deleteMany(),
  InfoCardsID.deleteMany(),
  ObjetivosID.deleteMany(),
  BottomCtaID.deleteMany(),
])
  .then(() => {
    console.log('all databases cleaned')
    const bannerID = new BannerID({
      title: 'Pilares de I&D',
      description: 'Para nosotros siempre ha sido prioridad contar con la tecnlogía e infraestructura que nos permita desarrollar los mejores productos, y además en las cantidades necesarias para cuidar de la salud de todo el país.',
      imgURL: 'https://firebasestorage.googleapis.com/v0/b/grupo-leti-fd84e.appspot.com/o/images%2Fiyd-banner.png?alt=media&token=42a2a76e-12e4-468f-9dd8-3fbae9914089',
    })
    bannerID.save()
      .then(() => console.log(`BannerAT created`))
      .catch(error => console.log(error))
    infocardsIDData.forEach(unidad => {
      const infoCardsID = new InfoCardsID({
        picPath: unidad.picPath,
        title: unidad.title,
        info: unidad.info,
        btn: unidad.btn,
      })
      infoCardsID.save()
        .then(() => console.log(`infoCardsID created`))
        .catch(error => console.log(error))
    })
    objetivosIDData.forEach(unidad => {
      const objetivosID = new ObjetivosID({
        title: unidad.title,
        desc: unidad.desc,
        name: unidad.name,
      })
      objetivosID.save()
        .then(() => console.log(`ObjetivosID created`))
        .catch(error => console.log(error))
    })
    bottomCtaIDData.forEach(unidad => {
      const bottomCtaID = new BottomCtaID({
        title: unidad.title,
        buttonTitle: unidad.buttonTitle,
        buttonLink: unidad.buttonLink,
        img: unidad.img,
      })
      bottomCtaID.save()
        .then(() => console.log(`BottomCtaID created`))
        .catch(error => console.log(error))
    })
  })
  .catch(error => console.log(error))

////////////////////////////////////////

///////////////////////////////////////////
/////// INVESTIGACIÓN Y DESARROLLO ////////
/////////////// TECNOLOGÍA ////////////////
///////////////////////////////////////////

const BannerTecnologiaID = require('../models/IAD/tecnologia/bannerTecnologiaID.model')
const VideoTecnologiaID = require('../models/IAD/tecnologia/videoTecnologiaID.model')
const MapTecnologiaID = require('../models/IAD/tecnologia/mapTecnologiaID.model')
const BottomCtaTecnologiaID = require('../models/IAD/tecnologia/bottomCtaTecnologiaID.model')
const CarrouselTecnologiaID = require('../models/IAD/tecnologia/carrouselTecnologiaID.model')

const bottomCtaTecnologiaIDData = require('../data/bottomCtaIDData')
const carrouselTecnologiaData = require('../data/tecnologiaCarousel')

Promise.all([
  BannerTecnologiaID.deleteMany(),
  VideoTecnologiaID.deleteMany(),
  CarrouselTecnologiaID.deleteMany(),
  MapTecnologiaID.deleteMany(),
  BottomCtaTecnologiaID.deleteMany(),
])
  .then(() => {
    console.log('all databases cleaned')
    const bannerTecnologiaID = new BannerTecnologiaID({
      title: 'Tecnología',
      description: 'Nuestra planta está ubicada en Guarenas, estado Miranda, y es la planta producción de fármacos más grande a nivel nacional. Cuenta con la única planta de cefalosporínicos existentes en Venezuela y una de las pocas penicilínicos, siendo modelo de Latinoamérica.',
      imgURL: 'https://firebasestorage.googleapis.com/v0/b/grupo-leti-fd84e.appspot.com/o/images%2Ftech-banner.png?alt=media&token=0bc5ad56-b419-4bda-893e-14f1a9093c8d',
    })
    bannerTecnologiaID.save()
      .then(() => console.log(`BannerTecnologiaID created`))
      .catch(error => console.log(error))
    const videoTecnologiaID = new VideoTecnologiaID({
      title: '¡Recorre nuestras instalaciones!',
      videoURL: 'https://firebasestorage.googleapis.com/v0/b/grupo-leti-fd84e.appspot.com/o/videos%2Fhome-video.mp4?alt=media&token=e5cf0b01-b8be-45c3-8793-2ec7c26ee6c0',
    })
    videoTecnologiaID.save()
      .then(() => console.log(`videoTecnologiaID created`))
      .catch(error => console.log(error))
    carrouselTecnologiaData.forEach(unidad => {
      const carrouselTecnologiaID = new CarrouselTecnologiaID({
        mainTitle: unidad.mainTitle,
        title: unidad.title,
        description: unidad.description,
        imgURL: unidad.imgURL,
      })
      carrouselTecnologiaID.save()
        .then(() => console.log(`carrouselTecnologiaID created`))
        .catch(error => console.log(error))
    })
    const mapTecnologiaID = new MapTecnologiaID({
      description: 'Esta planta está en permanente evolución y actualización, lo que nos permite ofrecer lo mejor para el país.',
      mapURL: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3923.3027990354635!2d-66.60681018437528!3d10.476778867515785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c2bab2979a6bf65%3A0x65628f1b4b1ee745!2sLaboratorios%20Leti%20S.A.V!5e0!3m2!1ses!2ses!4v1639765114758!5m2!1ses!2ses',
    })
    mapTecnologiaID.save()
      .then(() => console.log(`mapTecnologiaAT created`))
      .catch(error => console.log(error))
    bottomCtaTecnologiaIDData.forEach(unidad => {
      const bottomCtaTecnologiaID = new BottomCtaTecnologiaID({
        title: unidad.title,
        buttonTitle: unidad.buttonTitle,
        buttonLink: unidad.buttonLink,
        img: unidad.img,
      })
      bottomCtaTecnologiaID.save()
        .then(() => console.log(`BottomCtaTecnologiaID created`))
        .catch(error => console.log(error))
    })
  })
  .catch(error => console.log(error))

////////////////////////////////////////

///////////////////////////////////////////
/////// INVESTIGACIÓN Y DESARROLLO ////////
////////////// MANUFACTURA ////////////////
///////////////////////////////////////////

const BannerManufacturaID = require('../models/IAD/manufactura/bannerManufacturaID.model')
const CarrouselManufacturaID = require('../models/IAD/manufactura/manufacturaCarrousel.model')
const CertificadoManufacturaID = require('../models/IAD/manufactura/certificadoManufacturaID.model')
const BottomCtaManufacturaID = require('../models/IAD/manufactura/bottomCtaManufacturaID.model')

const manufactureCarrousel = require('../data/manufactureCarousel')
const manufactureCertificates = require('../data/certificatesManufactureID')
const bottomCtaManufacturaIDData = require('../data/bottomCtaManufacturaIDData')

Promise.all([
  BannerManufacturaID.deleteMany(),
  CarrouselManufacturaID.deleteMany(),
  CertificadoManufacturaID.deleteMany(),
  BottomCtaManufacturaID.deleteMany(),
])
  .then(() => {
    console.log('all databases cleaned')
    const bannerManufacturaID = new BannerManufacturaID({
      title: 'Manufactura',
      description: 'Diariamente se manufacturan XX cantidades de todo tipo de medicinas, que salen de la planta para ser distribuidos en todo el país.',
      imgURL: 'https://firebasestorage.googleapis.com/v0/b/grupo-leti-fd84e.appspot.com/o/images%2Fmanufacture-banner.png?alt=media&token=90c2f962-8066-4a20-bc09-548f0289a714',
    })
    bannerManufacturaID.save()
      .then(() => console.log(`BannerManufacturaID created`))
      .catch(error => console.log(error))
    manufactureCertificates.forEach(certificate => {
      const certificadoManufacturaID = new CertificadoManufacturaID({
        title: certificate.title,
        desc: certificate.desc,
        imgURL: certificate.imgURL,
      })
      certificadoManufacturaID.save()
        .then(() => console.log(`certificadoManufacturaID created`))
        .catch(error => console.log(error))
    })
    manufactureCarrousel.forEach(unidad => {
      const carrouselManufacturaID = new CarrouselManufacturaID({
        title: unidad.title,
        info: unidad.info,
      })
      carrouselManufacturaID.save()
        .then(() => console.log(`CarrouselManufacturaID created`))
        .catch(error => console.log(error))
    })
    bottomCtaManufacturaIDData.forEach(unidad => {
      const bottomCtaManufacturaID = new BottomCtaManufacturaID({
        title: unidad.title,
        buttonTitle: unidad.buttonTitle,
        buttonLink: unidad.buttonLink,
        img: unidad.img,
      })
      bottomCtaManufacturaID.save()
        .then(() => console.log(`BottomCtaManufacturaID created`))
        .catch(error => console.log(error))
    })
  })
  .catch(error => console.log(error))

////////////////////////////////////////

///////////////////////////////////////////
/////// INVESTIGACIÓN Y DESARROLLO ////////
//////////////// ALIANZAS /////////////////
///////////////////////////////////////////

const BannerAlianzasID = require('../models/IAD/alianzas/bannerAlianzasID.model')
const CarrouselTitleAlianzasID = require('../models/IAD/alianzas/alianzaTitleCarrousel.model')
const ContribucionAlianzasID = require('../models/IAD/alianzas/contribucionAlianzasID.model')
const BottomCtaAlianzasID = require('../models/IAD/alianzas/bottomCtaAlianzasID.model')
const CarrouselLogoAlianzasID = require('../models/IAD/alianzas/alianzaLogosCarrousel.model')
const bottomCtaAlianzasIDData = require('../data/bottomCtaAlianzasIDData')
const logoAlianzasData = require('../data/dataLogoAlianzas')

Promise.all([
  BannerAlianzasID.deleteMany(),
  CarrouselTitleAlianzasID.deleteMany(),
  ContribucionAlianzasID.deleteMany(),
  BottomCtaAlianzasID.deleteMany(),
  CarrouselLogoAlianzasID.deleteMany(),
])
  .then(() => {
    console.log('all databases cleaned')
    const bannerAlianzasID = new BannerAlianzasID({
      title: 'Alianzas',
      description: 'Para lograr nuestro propósito de cuidar de la salud de los venezolanos, es importante contar con aliados que aporten al proceso y nos ayuden a ofrecer lo mejor.',
      imgURL: 'https://firebasestorage.googleapis.com/v0/b/grupo-leti-fd84e.appspot.com/o/images%2Falliances-banner.png?alt=media&token=2f295eb6-d6f2-46ad-9a7d-594a4f3b627d',
    })
    bannerAlianzasID.save()
      .then(() => console.log(`BannerAlianzasID created`))
      .catch(error => console.log(error))
    const contribucionAlianzasID = new ContribucionAlianzasID({
      title: '¡Tu contribución cuenta!',
      desc: '¿Quieres aliarte con nosotros?<br>Compártenos tu iniciativa aquí o contáctanos.',
      phone: '+582123602511',
      email: 'comunicaciones.leti@leti.com.ve',
    })
    contribucionAlianzasID.save()
      .then(() => console.log(`contribucionAlianzasID  created`))
      .catch(error => console.log(error))
    logoAlianzasData.forEach(logo => {
      const carrouselLogoAlianzasID = new CarrouselLogoAlianzasID({
        title: logo.title,
        picPath: logo.picPath,
      })
      carrouselLogoAlianzasID.save()
        .then(() => console.log(`CarrouselLogoAlianzasID created`))
        .catch(error => console.log(error))
    })
    const carrouselTitleAlianzasID = new CarrouselTitleAlianzasID({
      title: 'Nuestros aliados en el tiempo',
    })
    carrouselTitleAlianzasID.save()
      .then(() => console.log(`carrouselTitleAlianzasID created`))
      .catch(error => console.log(error))
    bottomCtaAlianzasIDData.forEach(unidad => {
      const bottomCtaAlianzasID = new BottomCtaAlianzasID({
        title: unidad.title,
        buttonTitle: unidad.buttonTitle,
        buttonLink: unidad.buttonLink,
        img: unidad.img,
      })
      bottomCtaAlianzasID.save()
        .then(() => console.log(`BottomCtaAlianzasID created`))
        .catch(error => console.log(error))
    })
  })
  .catch(error => console.log(error))

////////////////////////////////////////

////////////////////////////////////////////
/////// PROPOSITO Y RESPONSABILIDAD ////////
///////////////////////////////////////////

const BannerProposito = require('../models/propositoYResponsabilidad/bannerProposito.model')
const VideoProposito = require('../models/propositoYResponsabilidad/videoProposito.model')
const TimeLineProposito = require('../models/propositoYResponsabilidad/propositoTimeLine.model')
const TituloFormProposito = require('../models/propositoYResponsabilidad/farmTitleProposito.model')

const timelinePropositoData = require('../data/purposeTimeline')

Promise.all([
  BannerProposito.deleteMany(),
  VideoProposito.deleteMany(),
  TimeLineProposito.deleteMany(),
  TituloFormProposito.deleteMany(),
])
  .then(() => {
    console.log('all databases cleaned')
    const bannerProposito = new BannerProposito({
      description: 'Ratificamos nuestro compromiso con Venezuela para marcar la diferencia en la vida de todos los venezolanos, acompañándolos en todo momento.',
      imgURL: 'https://firebasestorage.googleapis.com/v0/b/grupo-leti-fd84e.appspot.com/o/images%2Fpurpose-bg.png?alt=media&token=7f5e73af-34bf-4911-9ee7-36fc4a4ef2fc',
    })
    bannerProposito.save()
      .then(() => console.log(`bannerProposito created`))
      .catch(error => console.log(error))
    const videoProposito = new VideoProposito({
      title: 'Propósito y responsabilidad social',
      videoURL: 'https://firebasestorage.googleapis.com/v0/b/grupo-leti-fd84e.appspot.com/o/videos%2Fhome-video.mp4?alt=media&token=e5cf0b01-b8be-45c3-8793-2ec7c26ee6c0',
    })
    videoProposito.save()
      .then(() => console.log(`videoProposito created`))
      .catch(error => console.log(error))
    const tituloFormProposito = new TituloFormProposito({
      title: 'Estamos para cuidarte',
      desc: 'Conscientes de la responsabilidad por ofrecer medicamentos de alta calidad, facilitamos la recolección, evaluación e investigación de la información sobre posibles reacciones adversas de nuestros medicamentos, para realizar correctivos y establecer la máxima seguridad terapéutica de los mismos.<br/><br/><p class="blue-text">Nos preocupa saber si alguno de nuestros productos le causó algún efecto adverso, así podemos trabajar para ayudarle.</p>',
      subtitle: 'Farmacovigilancia'
    })
    tituloFormProposito.save()
      .then(() => console.log(`TituloFormProposito created`))
      .catch(error => console.log(error))
    timelinePropositoData.forEach(unidad => {
      const timeLineProposito = new TimeLineProposito({
        desc: unidad.desc,
        imgURL: unidad.imgURL,
      })
      timeLineProposito.save()
        .then(() => console.log(`timeLineProposito created`))
        .catch(error => console.log(error))
    })
  })
  .catch(error => console.log(error))

////////////////////////////////////////

////////////////////////////////////////////
/////// NUESTRA GENTE ////////
///////////////////////////////////////////

const BannerNuestraGente = require('../models/nuestraGente/bannerNuestraGente.model')
const TresEquiposNuestraGente = require('../models/nuestraGente/tresEquiposNuestraGente.model')
const EquipoNuestraGente = require('../models/nuestraGente/equipoNuestraGente.model')
const BottomCtaNuestraGente = require('../models/nuestraGente/bottomCtaNuestraGente.model')
const CarrerasNuestraGente = require('../models/nuestraGente/carrerasNuestraGente.model')
const BannerTeamOurPeople = require('../models/nuestraGente/bannerEquiposNuestraGente.model')

const tresEquiposNuestraGenteData = require('../data/dataOurPeople')
const bottomCtaNuestraGenteData = require('../data/bottomCtaNuestraGenteData')

Promise.all([
  BannerNuestraGente.deleteMany(),
  TresEquiposNuestraGente.deleteMany(),
  EquipoNuestraGente.deleteMany(),
  BottomCtaNuestraGente.deleteMany(),
  CarrerasNuestraGente.deleteMany(),
  BannerTeamOurPeople.deleteMany(),
])
  .then(() => {
    console.log('all databases cleaned')
    const bannerNuestraGente = new BannerNuestraGente({
      title: 'Contamos con un talento humano especializado que tienen años trabajando en el campo, y más importante, trabajando con nosotros',
      description: 'Gracias a nuestro talento es posible desarrollar nuestro amplio y diverso portafolio, que cuidan de la salud de todo el país.',
      imgURL: 'https://firebasestorage.googleapis.com/v0/b/grupo-leti-fd84e.appspot.com/o/images%2Four-people-bg.png?alt=media&token=bc1b0135-e8f9-4a4d-a203-aec26f9c10e1',
    })
    bannerNuestraGente.save()
      .then(() => console.log(`bannerNuestraGente created`))
      .catch(error => console.log(error))
    tresEquiposNuestraGenteData.forEach(unidad => {
      const tresEquiposNuestraGente = new TresEquiposNuestraGente({
        mainTitle: unidad.mainTitle,
        imgURL: unidad.imgURL,
        title: unidad.title,
        info: unidad.info,
      })
      tresEquiposNuestraGente.save()
        .then(() => console.log(`tresEquiposNuestraGente created`))
        .catch(error => console.log(error))
    })
    const carrerasNuestraGente = new CarrerasNuestraGente({
      title: 'Carreras',
      description: 'Entérate de las posiciones que tenemos abiertas en el grupo',
      buttonTitle: 'Trabaja con nosotros',
      buttonLink: 'https://www.linkedin.com/company/laboratorios-leti-s-a-v-/jobs/',
    })
    carrerasNuestraGente.save()
      .then(() => console.log(`carrerasNuestraGente created`))
      .catch(error => console.log(error))
    const equipoNuestraGente = new EquipoNuestraGente({
      buttonTitle: 'Conoce nuestra filosofía',
      buttonLink: '/nuestra-filosofia',
      title: 'Liderados por profesionales de trayectoria',
      description: '(Cita director de Laboratorios Leti)',
      person: 'Nombre director',
      imgURL: 'https://firebasestorage.googleapis.com/v0/b/grupo-leti-fd84e.appspot.com/o/images%2Fdirector-image.jpg?alt=media&token=61c4bf70-48a7-4d08-b197-529c4dac43dc',
    })
    equipoNuestraGente.save()
      .then(() => console.log(`equipoNuestraGente created`))
      .catch(error => console.log(error))
    bottomCtaNuestraGenteData.forEach(unidad => {
      const bottomCtaNuestraGente = new BottomCtaNuestraGente({
        title: unidad.title,
        buttonTitle: unidad.buttonTitle,
        buttonLink: unidad.buttonLink,
        img: unidad.img,
      })
      bottomCtaNuestraGente.save()
        .then(() => console.log(`bottomCtaNuestraGente created`))
        .catch(error => console.log(error))
    })
    const bannerTeamOurPeople = new BannerTeamOurPeople({
      mainTitle: 'Somos tres equipos trabajando en constante sinergia',
      imgURL: 'https://firebasestorage.googleapis.com/v0/b/grupo-leti-fd84e.appspot.com/o/images%2Fourpeople-infocards.jpg?alt=media&token=7a89ddd9-cfca-460a-aa16-7e26e3145f69'
    })
    bannerTeamOurPeople.save()
      .then(() => console.log(`bannerTeamOurPeople created`))
      .catch(error => console.log(error))
    })
      .catch(error => console.log(error))

    /////////////////////////////////////////
    ////////// OUR PHILOSOPHY PAGE ///////////
    /////////////////////////////////////////

    const BannerNuestraFilosofia = require('../models/nuestraFilosofia/bannerNuestraFilosofia.model')
    const InfoCardsNuestraFilosofia = require('../models/nuestraFilosofia/infoCardsNuestraFilosofia.model')
    const BottomNuestraFilosofia = require('../models/nuestraFilosofia/bottomNuestraFilosofia.model')
    const LetterNuestraFilosofia = require('../models/nuestraFilosofia/letterNuestraFilosofia.model')
    const infoCardsNuestraFilosofiaData = require('../data/infoCardsNuestraFilosofiaData')

    Promise.all([
      BannerNuestraFilosofia.deleteMany(),
      InfoCardsNuestraFilosofia.deleteMany(),
      BottomNuestraFilosofia.deleteMany(),
      LetterNuestraFilosofia.deleteMany(),
    ])
      .then(() => {
        console.log('all databases cleaned')
        const bannerNuestraFilosofia = new BannerNuestraFilosofia({
          title: 'Filosofía Leti',
          description: 'Todos los líderes de cada unidad y demás áreas de trabajo, trabajan en conjunto para promover la relación de sinergia entre todas las empresas y así lograr los mejores resultados.<br/><br/> Contamos con un talento humano excepcional y altamente calificado que trabaja día a día generando soluciones para los venezolanos, bajo los principios y ética del grupo.',
          imgURL: 'https://firebasestorage.googleapis.com/v0/b/grupo-leti-fd84e.appspot.com/o/images%2Four-philosophy-banner.png?alt=media&token=5b738b9d-5294-4850-bcb0-e7d69f2ba250',
        })
        bannerNuestraFilosofia.save()
          .then(() => console.log(`bannerNuestraFilosofia created`))
          .catch(error => console.log(error))
        infoCardsNuestraFilosofiaData.forEach(unidad => {
          const infoCardsNuestraFilosofia = new InfoCardsNuestraFilosofia({
            title: unidad.title,
            picPath: unidad.picPath,
          })
          infoCardsNuestraFilosofia.save()
            .then(() => console.log(`infoCardsNuestraFilosofia created`))
            .catch(error => console.log(error))
        })
        const bottomNuestraFilosofia = new BottomNuestraFilosofia({
          title: '¿Buscas una oportunidad de crecimiento?',
          description: '¡Siempre estamos en busca de nuevos talentos!<br/> Encuentra posiciones abiertas',
          buttonTitle: 'Consultar',
          buttonLink: 'https://www.linkedin.com/company/laboratorios-leti-s-a-v-/jobs/',
          imgURL: 'https://firebasestorage.googleapis.com/v0/b/grupo-leti-fd84e.appspot.com/o/images%2Fred-bubbles.png?alt=media&token=eceff76f-a5ce-499b-b8b9-2998e330b6aa'
        })
        bottomNuestraFilosofia.save()
          .then(() => console.log(`bottomNuestraFilosofia created`))
          .catch(error => console.log(error))
        const letterNuestraFilosofia = new LetterNuestraFilosofia({
          mainTitle: 'Carta del CEO<br/>Dr. José Massa',
          body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br/><br/>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.',
          imgURL: 'https://firebasestorage.googleapis.com/v0/b/grupo-leti-fd84e.appspot.com/o/images%2Fsign.png?alt=media&token=2d073775-7221-4079-945e-46da677e2bf7',
        })
        letterNuestraFilosofia.save()
          .then(() => console.log(`letterNuestraFilosofia created`))
          .catch(error => console.log(error))
      })
      .catch(error => console.log(error))


    ////////////////////////////////////////////
    /////////////// PRODUCTOS /////////////////
    ///////////////////////////////////////////

    const BannerProductosPage = require('../models/productosPage/bannerProductosPage.model')
    const EresMedicoProductos = require('../models/productosPage/eresMedicoProductos.model')
    const BannerProducstList = require('../models/productosPage/bannerProductsList.model')

    Promise.all([
      BannerProductos.deleteMany(),
      EresMedicoProductos.deleteMany(),
      BannerProductosPage.deleteMany(),
      BannerProducstList.deleteMany(),
    ])
      .then(() => {
        console.log('all databases cleaned')
        const bannerProductosPage = new BannerProductosPage({
          title: 'Trabajamos cada día para poner nuestros conocimientos y habilidades al servicio de las personas:',
          description: 'Desarrollando y poniendo a su disposición productos que abarquen una amplia gama de necesidades.',
          imgURL: 'https://firebasestorage.googleapis.com/v0/b/grupo-leti-fd84e.appspot.com/o/images%2Fproducts-banner.png?alt=media&token=599872b3-8daa-4a6e-b652-7f9190d42a7c',
          button1Title: 'Conoce todos los productos',
          button1Link: '/listado-de-productos',
          button2Title: 'Descubre nuestras áreas terapéuticas',
          button2Link: '/areas-tearapeuticas',
        })
        bannerProductosPage.save()
          .then(() => console.log(`bannerProductosPage created`))
          .catch(error => console.log(error))
        const eresMedicoProductos = new EresMedicoProductos({
          findProductsTitle: 'Buscas un medicamento en específico?<br/>¡Encuéntralo aquí!',
          title: '¿Eres médico y quieres información especial sobre algún producto?',
          buttonTitle: 'Escríbenos aquí',
          imgURL: 'https://firebasestorage.googleapis.com/v0/b/grupo-leti-fd84e.appspot.com/o/images%2Fproducts-bottom-bg.jpg?alt=media&token=834bcbe8-a6fe-4e15-bd33-4e7376b9c097',
          farmacoTitle: 'Farmacovigilancia',
          farmacoDesc: '¿Tiene algún comentario o <br/>efecto adverso de alguno de nuestro productos?<br/>¡Su opinión es importante para nosotros!',
          farmacoBtn: 'Infórmanos aquí'
        })
        eresMedicoProductos.save()
          .then(() => console.log(`eresMedicoProductos created`))
          .catch(error => console.log(error))
        const bannerProductsList = new BannerProducstList({
          title: 'Listado de productos',
          description: 'Nuestro amplio portafolio de productos incluye muchas marcas reconocidas que forman parte de la historia del <strong>Grupo Leti.</strong> ',
          imgURL: 'https://firebasestorage.googleapis.com/v0/b/grupo-leti-fd84e.appspot.com/o/images%2Flistado-bg.png?alt=media&token=b56b950c-b930-442c-b72e-80bf89ddf97a'
        })
        bannerProductsList.save()
          .then(() => console.log(`bannerProductsList created`))
          .catch(error => console.log(error))
      })
      .catch(error => console.log(error))

    ////////////////////////////////////////

    ////////////   USERS  //////////////////

    Promise.all([
      User.deleteMany(),
      Vigilancia.deleteMany(),
    ])
      .then(() => {
        console.log('all databases cleaned')
        for (let i = 1; i < userN; i++) {
          if (i < 20) {
            const user = new User({
              name: faker.name.findName(),
              email: faker.internet.email(),
              username: faker.internet.userName(),
              avatar: faker.image.image(),
              bio: faker.lorem.paragraph(),
              createdAt: faker.date.past(),
              password: 'GrupoLeti123',
              activation: {
                active: true
              }
            })
            user.save()
              .then(u => {
                console.log(`user ${u.name} created`)
                for (let j = 0; j < vigilanciaN; j++) {
                  const vigilancia = new Vigilancia({
                    date: faker.date.past(),
                    effects: faker.lorem.paragraph(),
                    lastname: faker.name.lastName(),
                    name: faker.name.firstName(),
                    medicine: faker.random.arrayElement(['Alivet', 'Antux', 'Letisan', 'Migren', 'Monosulpa']),
                    prescribed: faker.random.arrayElement(['Si', 'No']),
                    sex: faker.random.arrayElement(['F', 'M']),
                    email: faker.internet.email()
                  })
                  vigilancia.save()
                    .then(vig => {
                      console.log(`FarmacoVigilancia added by ${vig.name}`)
                    })
                    .catch(error => console.log(error))
                }
              })
          } else if (i >= 20 && i < 29) {
            const user = new User({
              name: faker.name.findName(),
              email: faker.internet.email(),
              username: faker.internet.userName(),
              avatar: faker.image.image(),
              bio: faker.lorem.paragraph(),
              createdAt: faker.date.past(),
              role: 'Editor',
              password: 'Editor123',
              activation: {
                active: true
              }
            })
            user.save()
          } else {
            const user = new User({
              name: 'Grupo Leti',
              email: 'grupoleti.dev@gmail.com',
              username: 'grupoleti',
              avatar: 'https://firebasestorage.googleapis.com/v0/b/grupo-leti-fd84e.appspot.com/o/images%2Fgrupo-leti.svg?alt=media&token=d088b2c4-601e-4000-94b9-656399a20271',
              bio: 'Administrador del sitio Grupo Leti',
              createdAt: new Date(),
              role: 'Admin',
              password: 'Admin123',
              activation: {
                active: true
              }
            })
            user.save()
              .then(() => console.log(`admin added`))
              .catch(error => console.log(error))
          }
        }
      })
      .catch(error => console.log(error))

    /////////////////NEWS////////////////////

    const Blog = require('../models/noticias/news.model')
    const NewsTitle = require('../models/noticias/newsTitle.model')
    const Tags = require('../models/noticias/tags.model')
    const NewsTag = require('../data/newsTags')

    Promise.all([
      Blog.deleteMany(),
      NewsTitle.deleteMany(),
      Tags.deleteMany()
    ])
      .then(() => {
        console.log('blog cleaned')
        NewsTag.forEach(el => {
          const newTag = new Tags({
            tag: el.tag,
          })
          newTag.save()
            .then(() => console.log(`tag created`))
            .catch(error => console.log(error))
        })
        for (let i = 1; i < 20; i++) {
          const blog = new Blog({
            title: faker.lorem.sentence(),
            subTitle: faker.lorem.sentence(),
            urlToPic: `https://picsum.photos/id/${i + 1000}/1440/800`,
            content: faker.lorem.paragraphs(40),
            outstanding: i === 6 ? true : false,
            publishDate: faker.date.past(),
            tag: faker.random.arrayElement(["Grupo Leti", "Educación", "Innovación", "Nuestra gente", "Investigación", "Salud y bienestar"]),
          })
          blog.save()
            .then(() => console.log(`new added`))
            .catch(error => console.log(error))
        }
        const newstitle = new NewsTitle({
          lastestTitle: 'Lo último',
          mostTitle: 'Lo más leído',
          searchTitle: 'Artículos',
          picPath: 'https://firebasestorage.googleapis.com/v0/b/grupo-leti-fd84e.appspot.com/o/images%2Fleti-news-img.jpg?alt=media&token=a503a04f-75d1-4d97-91ed-25baa145796e'
        })
        newstitle.save()
          .then(() => console.log(`newstitle added`))
          .catch(error => console.log(error))
      })
      .catch(error => console.log(error))


  ////////////////////////////////////////


  ////////////////////////////////////////


  ////////////////////////////////////////


  ////////////////////////////////////////


  ////////////////////////////////////////