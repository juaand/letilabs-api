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
      subTitle: '¿Tuviste algún efecto adverso con alguno de nuestro productos?',
      buttonTitle: 'Infórmanos aquí',
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
      description: 'Facilita la recolección, vigilancia, investigación y evaluación de la información sobre reacciones adversas de los medicamentos, lo que permite realizar correctivos y establecer la seguridad terapéutica de los mismos.',
      blueDescription: 'Nos preocupa saber si alguno de nuestros productos le causó algún efecto adverso, así podemos trabajar para ayudarlo.',
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
      description: 'Laboratorios Leti es un laboratorio farmacéutico venezolano que desde hace 70 años, crea soluciones de salud a través de la producción y comercialización de un amplio portafolio de medicamentos desarrollados con tecnología y seguridad, de la mano de un talento humano caliﬁcado que trabaja día a día para acompañar a los venezolanos.',
      url: '/sobre-nosotros',
      buttonTitle: 'Conoce más sobre nosotros',
    })
    usInfo.save()
      .then(() => console.log(`usInfo created`))
      .catch(error => console.log(error))
    const video = new Video({
      url: './images/play.svg',
    })
    video.save()
      .then(() => console.log(`video created`))
      .catch(error => console.log(error))
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
      description: 'Desarrollamos soluciones que marcan la diferencia en la vida de los venezolanos',
      imgURL: './images/play.svg',
    })
    banner.save()
      .then(() => console.log(`banner created`))
      .catch(error => console.log(error))
    dataGallery.forEach(unidad => {
      const gallery = new Gallery({
        mainTitle: unidad.mainTitle,
        title: unidad.title,
        imgPath: unidad.imgPath,
      })
      gallery.save()
        .then(() => console.log(`gallery created`))
        .catch(error => console.log(error))
    })
    const marcandoPauta = new MarcandoPauta({
      description: 'Contamos con un talento humano calificado y cualificado que con su ingenio e increíble calidad humana, trabajan día a día por los venezolanos que velan por su salud y la de los demás',
      imgURL: './images/play.svg',
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


const meetEmpresasData = require('../data/dataMeetEmpresas')
const unidadesEmpresasData = require('../data/unidadesNegocioEmpresasData')

Promise.all([
  BannerEmpresas.deleteMany(),
  BannerProductos.deleteMany(),
  CuidarEmpresas.deleteMany(),
  InnovarEmpresas.deleteMany(),
  MeetEmpresas.deleteMany(),
  UnidadesNegocioEmpresas.deleteMany(),
])
  .then(() => {
    console.log('all databases cleaned')
    const bannerEmpresas = new BannerEmpresas({
      description: 'Nos conformamos por tres grandes unidades de negocio, que se dedican a diferentes áreas, pero trabajan entre ellas para lograr <span className="blue-text">mejores resultados</span>',
      imgURL: '/images/our-companies-bg.png',
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
      imgURL: './images/ulgarin.png',
      img2URL: './images/azitomicina.png',
      img3URL: './images/diklason.png',
    })
    bannerProductos.save()
      .then(() => console.log(`BannerProductos created`))
      .catch(error => console.log(error))
    const cuidarEmpresas = new CuidarEmpresas({
      description: 'Cuidar la salud de los venezolanos',
      imgURL: './images/cuidar.png',
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
      imgURL: './images/laboratorios-leti.svg',
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
      imgURL: './images/equipo.jpg',
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
      imgURL: './images/biocontrolled.svg',
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
      })
      biocontrolledTimeLine.save()
        .then(() => console.log(`biocontrolledTimeLine created`))
        .catch(error => console.log(error))
    })
    const equipoBiocontrolledPage = new EquipoBiocontrolledPage({
      description: 'El laboratorio más grande y más importante por la cantidad de ventas que tenía, cantidad de productos, cantidad de categoríasdonde participaba.',
      person: 'Ramón, director de unidad',
      buttonTitle: 'Conoce nuestra filosofía',
      buttonLink: '/equipo',
      imgURL: './images/equipo.jpg',
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
      imgURL: './images/genven.svg',
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
      img1URL: './images/genven001.png',
      img2URL: './images/genven002.png',
      img3URL: './images/genven003.png',
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
      imgURL: './images/equipo.jpg',
    })
    equipoGenvenPage.save()
      .then(() => console.log(`equipo Genven page created`))
      .catch(error => console.log(error))
  })
  .catch(error => console.log(error))

////////////////////////////////////////


////////////   USERS  //////////////////

Promise.all([
  User.deleteMany(),
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
        urlToPic: `https://picsum.photos/id/${i+1000}/1440/800`,
        content: faker.lorem.paragraphs(),
        outstanding: false,
        publishDate: faker.date.past(),
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