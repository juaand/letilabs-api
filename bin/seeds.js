require('../config/db.config')
require('dotenv').config()

const User = require('../models/user.model')
const Vigilancia = require('../models/home/homeComponents/vigilancia.model')
const faker = require('faker')
const Blog = require('../models/blog.model')

const userN = 30
const vigilanciaN = 3


////////////////////////////////////////
////////////   HOME  ///////////////////
////////////////////////////////////////

const CarrouselHome = require('../models/home/homeComponents/carrouselHome.model')
const FarmacoVigilancia = require('../models/home/homeComponents/farmacoVigilancia.model')
const MeetPeopleWorkWithUsHome = require('../models/home/homeComponents/meetPeopleWorkWithUsHome.model')
const ModalFarmacoVigilancia = require('../models/home/homeComponents/modalFarmacoVigilancia.model')
const Portfolio = require('../models/home/homeComponents/portfolio.model')
const UnidadesNegocio = require('../models/home/homeComponents/unidadesNegocio.model')
const UsInfo = require('../models/home/homeComponents/usInfo.model')
const Video = require('../models/home/homeComponents/video.model')
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
      url: 'play.svg',
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

const BannerAT = require('../models/home/homeComponents/areasterapeuticas/bannerAT.model')
const TimeLineAT = require('../models/home/homeComponents/areasterapeuticas/timeLineAT.model')
const BottomCtaAT = require('../models/home/homeComponents/areasterapeuticas/bottomCtaAT.model')

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
      imgURL: 'areas-terapeuticas-banner.png',
    })
    bannerAT.save()
      .then(() => console.log(`BannerAT created`))
      .catch(error => console.log(error))
    timeLineATData.forEach(unidad => {
      const timeLineAT = new TimeLineAT({
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

const BannerEmpresas = require('../models/nuestrasEmpresasComponents/bannerEmpresas.model')
const BannerProductos = require('../models/nuestrasEmpresasComponents/bannerProductos.model')
const CuidarEmpresas = require('../models/nuestrasEmpresasComponents/cuidarEmpresas.model')
const InnovarEmpresas = require('../models/nuestrasEmpresasComponents/innovarEmpresas.model')
const MeetEmpresas = require('../models/nuestrasEmpresasComponents/meetEmpresas.model')
const UnidadesNegocioEmpresas = require('../models/nuestrasEmpresasComponents/unidadesNegocioEmpresas.model')
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
      imgURL: 'cuidar.png',
    })
    cuidarEmpresas.save()
      .then(() => console.log(`cuidar empresas created`))
      .catch(error => console.log(error))
    const innovarEmpresas = new InnovarEmpresas({
      description: 'Innovar en el mercado farmacéutico',
      imgURL: '.',
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

const BannerLetiPage = require('../models/nuestrasEmpresasComponents/laboratoriosLetiPage/bannerLetiPage.model')
const InfoCardsLetiPage = require('../models/nuestrasEmpresasComponents/laboratoriosLetiPage/infoCardsLetiPage.model')
const LetiTimeLine = require('../models/nuestrasEmpresasComponents/laboratoriosLetiPage/letiTimeLine.model')
const EquipoLetiPage = require('../models/nuestrasEmpresasComponents/laboratoriosLetiPage/equipoLetiPage.model')


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
      imgURL: 'leti.svg',
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
      description: 'Cuidar la salud de los venezolanos',
      person: 'Ramón, director de unidad',
      buttonTitle: 'Conoce nuestra filosofía',
      buttonLink: '/equipo',
      imgURL: 'equipo.jpg',
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

const BannerBiocontrolledPage = require('../models/nuestrasEmpresasComponents/biocontrolledPage/bannerBiocontrolledPage.model')
const InfoCardsBiocontrolledPage = require('../models/nuestrasEmpresasComponents/biocontrolledPage/infoCardsBiocontrolledPage.model')
const CarrouselBiocontrolledPage = require('../models/nuestrasEmpresasComponents/biocontrolledPage/biocontrolledCarrousel.model')
const BiocontrolledTimeLine = require('../models/nuestrasEmpresasComponents/biocontrolledPage/biocontrolledTimeLine.model')
const EquipoBiocontrolledPage = require('../models/nuestrasEmpresasComponents/biocontrolledPage/equipoBiocontrolledPage.model')


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
      imgURL: 'biocontrolled-banner.png',
      logo: 'biocontrolled.svg',
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
      imgURL: 'bicontrolled-bottom.jpg',
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

const BannerGenvenPage = require('../models/nuestrasEmpresasComponents/genvenPage/bannerGenvenPage.model')
const VideoGenvenPage = require('../models/nuestrasEmpresasComponents/genvenPage/videoGenvenPage.model')
const ProductosGenvenPage = require('../models/nuestrasEmpresasComponents/genvenPage/genvenProductos.model')
const GenvenTimeLine = require('../models/nuestrasEmpresasComponents/genvenPage/genvenTimeLine.model')
const EquipoGenvenPage = require('../models/nuestrasEmpresasComponents/genvenPage/equipoGenvenPage.model')

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
      imgURL: 'genven.svg',
    })
    bannerGenvenPage.save()
      .then(() => console.log(`bannerletipage created`))
      .catch(error => console.log(error))
    const videoGenvenPage = new VideoGenvenPage({
      videoURL: 'video',
    })
    videoGenvenPage.save()
      .then(() => console.log(`videoGenvenPage created`))
      .catch(error => console.log(error))
    const productosGenvenPage = new ProductosGenvenPage({
      description: 'Ofrecemos terapias en las principales áreas terapéuticas: Cardiovascular, anti-infecciosos, anti-inflamatorios y analgésicos.',
      buttonTitle: 'Conoce los productos',
      buttonLink: '/productos',
      img1URL: 'genven001.png',
      img2URL: 'genven002.png',
      img3URL: 'genven003.png',
    })
    productosGenvenPage.save()
      .then(() => console.log(`equipo Biocontrolled page created`))
      .catch(error => console.log(error))
    genvenTimeLineData.forEach(unidad => {
      const genvenTimeLine = new GenvenTimeLine({
        imgURL: unidad.imgURL,
        desc: unidad.desc,
      })
      genvenTimeLine.save()
        .then(() => console.log(`genvenTimeLine created`))
        .catch(error => console.log(error))
    })
    const equipoGenvenPage = new EquipoGenvenPage({
      description: 'El laboratorio más grande y más importante por la cantidad de ventas que tenía, cantidad de productos, cantidad de categoríasdonde participaba.',
      person: 'Ramón, director de unidad',
      buttonTitle: 'Conoce nuestra filosofía',
      buttonLink: '/equipo',
      imgURL: 'equipo.jpg',
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

const BannerID = require('../models/I+D/I+D components/bannerID.model')
const InfoCardsID = require('../models/I+D/I+D components/infoCardsID.model')
const ObjetivosID = require('../models/I+D/I+D components/objetivosID.model')
const BottomCtaID = require('../models/I+D/I+D components/bottomCtaID.model')

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
      imgURL: 'iyd-banner.png',
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
        desc: unidad.desc,
        title: unidad.title,
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

const BannerTecnologiaID = require('../models/I+D/tecnologia/bannerTecnologiaID.model')
const VideoTecnologiaID = require('../models/I+D/tecnologia/videoTecnologiaID.model')
const MapTecnologiaID = require('../models/I+D/tecnologia/mapTecnologiaID.model')
const BottomCtaTecnologiaID = require('../models/I+D/tecnologia/bottomCtaTecnologiaID.model')
const CarrouselTecnologiaID = require('../models/I+D/tecnologia/carrouselTecnologiaID.model')

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
      imgURL: 'tech-banner.png',
    })
    bannerTecnologiaID.save()
      .then(() => console.log(`BannerTecnologiaID created`))
      .catch(error => console.log(error))
    const videoTecnologiaID = new VideoTecnologiaID({
      title: 'Tecnología',
      videoURL: 'tech-video-bg.jpg',
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

const BannerManufacturaID = require('../models/I+D/manufactura/bannerManufacturaID.model')
const CarrouselManufacturaID = require('../models/I+D/manufactura/manufacturaCarrousel.model')
const CertificadoManufacturaID = require('../models/I+D/manufactura/certificadoManufacturaID.model')
const BottomCtaManufacturaID = require('../models/I+D/manufactura/bottomCtaManufacturaID.model')

const manufactureCarrousel = require('../data/manufactureCarousel')
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
      imgURL: 'manufacture-banner.png',
    })
    bannerManufacturaID.save()
      .then(() => console.log(`BannerManufacturaID created`))
      .catch(error => console.log(error))
    const certificadoManufacturaID = new CertificadoManufacturaID({
      title: 'Cumplimos con todas las regulaciones',
      desc: 'Para producir medicamentos en Venezuela, primero hay que cumplir con varias exigencias para asegurar que el producto sea seguro y de calidad.',
      imgURL: 'certificado.jpg',
      imgDesc: '(Certificado, sello o documento que avale el cumplimiento)',
    })
    certificadoManufacturaID.save()
      .then(() => console.log(`certificadoManufacturaID created`))
      .catch(error => console.log(error))
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

const BannerAlianzasID = require('../models/I+D/alianzas/bannerAlianzasID.model')
const CarrouselTitleAlianzasID = require('../models/I+D/alianzas/alianzaTitleCarrousel.model')
const ContribucionAlianzasID = require('../models/I+D/alianzas/contribucionAlianzasID.model')
const BottomCtaAlianzasID = require('../models/I+D/alianzas/bottomCtaAlianzasID.model')
const CarrouselLogoAlianzasID = require('../models/I+D/alianzas/alianzaLogosCarrousel.model')
const bottomCtaAlianzasIDData = require('../data/bottomCtaAlianzasIDData')

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
      imgURL: 'alliances-banner.png',
    })
    bannerAlianzasID.save()
      .then(() => console.log(`BannerAlianzasID created`))
      .catch(error => console.log(error))
    const contribucionAlianzasID = new ContribucionAlianzasID({
      title: '¡Tu contribución cuenta!',
      desc1: '¿Quieres aliarte con nosotros?',
      desc2: 'Compártenos tu iniciativa aquí o contáctanos.',
      phone: '+582123602511',
      email: 'comunicaciones.leti@leti.com.ve',
    })
    contribucionAlianzasID.save()
      .then(() => console.log(`contribucionAlianzasID  created`))
      .catch(error => console.log(error))
    const carrouselLogoAlianzasID = new CarrouselLogoAlianzasID({})
    carrouselLogoAlianzasID.save()
      .then(() => console.log(`CarrouselLogoAlianzasID created`))
      .catch(error => console.log(error))
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
      title: 'Propósito y responsabilidad social',
      description: 'Ratificamos nuestro compromiso con Venezuela para marcar la diferencia en la vida de todos los venezolanos, acompañándolos en todo momento.',
      imgURL: 'purpose-bg.png',
    })
    bannerProposito.save()
      .then(() => console.log(`bannerProposito created`))
      .catch(error => console.log(error))
    const videoProposito = new VideoProposito({
      title: 'Propósito y responsabilidad social',
      videoURL: 'purpose-video.jpg',
    })
    videoProposito.save()
      .then(() => console.log(`videoProposito created`))
      .catch(error => console.log(error))
    const tituloFormProposito = new TituloFormProposito({
      title: 'Estamos para cuidarte',
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
const CarrerasNuestraGente = require('../models/nuestraGente/carrerasNuestraGente.model copy')

const tresEquiposNuestraGenteData = require('../data/dataOurPeople')
const bottomCtaNuestraGenteData = require('../data/bottomCtaNuestraGenteData')

Promise.all([
  BannerNuestraGente.deleteMany(),
  TresEquiposNuestraGente.deleteMany(),
  EquipoNuestraGente.deleteMany(),
  BottomCtaNuestraGente.deleteMany(),
  CarrerasNuestraGente.deleteMany(),
])
  .then(() => {
    console.log('all databases cleaned')
    const bannerNuestraGente = new BannerNuestraGente({
      title: 'Contamos con un talento humano especializado que tienen años trabajando en el campo, y más importante, trabajando con nosotros',
      description: 'Gracias a nuestro talento es posible desarrollar nuestro amplio y diverso portafolio, que cuidan de la salud de todo el país.',
      imgURL: 'our-people-bg.png',
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
      buttonLink: '/posiciones',
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
      imgURL: 'director-image.jpg',
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
  })
  .catch(error => console.log(error))

////////////////////////////////////////

////////////////////////////////////////////
/////////////// PRODUCTOS /////////////////
///////////////////////////////////////////

const BannerProductosPage = require('../models/ProductosPage/bannerProductosPage.model')
const EresMedicoProductos = require('../models/ProductosPage/eresMedicoProductos.model')

Promise.all([
  BannerProductos.deleteMany(),
  EresMedicoProductos.deleteMany(),
  BannerProductosPage.deleteMany(),
])
  .then(() => {
    console.log('all databases cleaned')
    const bannerProductosPage = new BannerProductosPage({
      title: 'Trabajamos cada día para poner nuestros conocimientos y habilidades al servicio de las personas:',
      description: 'Desarrollando y poniendo a su disposición productos que abarquen una amplia gama de necesidades.',
      imgURL: 'products-banner.png',
      button1Title: 'Conoce todos los productos',
      button1Link: '/listado-de-productos',
      button2Title: 'Descubre nuestras áreas terapéuticas',
      button2Link: '/areas-tearapeuticas',
    })
    bannerProductosPage.save()
      .then(() => console.log(`bannerProductosPage created`))
      .catch(error => console.log(error))
    const eresMedicoProductos = new EresMedicoProductos({
      title: '¿Eres médico y quieres información especial sobre algún producto?',
      buttonTitle: 'Escríbenos aquí',
      imgURL: 'products-bottom-bg.jpg',
    })
    eresMedicoProductos.save()
      .then(() => console.log(`eresMedicoProductos created`))
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
          name: faker.name.findName(),
          email: faker.internet.email(),
          username: faker.internet.userName(),
          avatar: faker.image.image(),
          bio: faker.lorem.paragraph(),
          createdAt: faker.date.past(),
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

Promise.all([
  Blog.deleteMany()
])
  .then(() => {
    console.log('blog cleaned')
    for (let i = 1; i < 20; i++) {
      const blog = new Blog({
        title: faker.lorem.sentence(),
        subTitle: faker.lorem.sentence(),
        urlToPic: `https://picsum.photos/id/${i + 1000}/1440/800`,
        content: faker.lorem.paragraphs(40),
        outstanding: i === 6 ? true : false,
        publishDate: faker.date.past(),
        tag: faker.random.arrayElement(["Grupo Leti", "Educativo", "Innovación", "Nuestra gente", "Investigación", "Salud y bienestar"]),
      })
      blog.save()
        .then(() => console.log(`new added`))
        .catch(error => console.log(error))
    }
  })
  .catch(error => console.log(error))

  ////////////////////////////////////////


  ////////////////////////////////////////


  ////////////////////////////////////////


  ////////////////////////////////////////


  ////////////////////////////////////////


  ////////////////////////////////////////