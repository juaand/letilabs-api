require('../config/db.config')
require('dotenv').config()

const User = require('../models/user.model')
const Vigilancia = require('../models/home/homeComponents/vigilancia.model')
const faker = require('faker')

const userN = 30
const vigilanciaN = 3



////////////   HOME  ///////////////////

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


////////////   About Us  ///////////////

const Banner = require('../models/aboutUs/aboutUsComponents/banner.model')
const Gallery = require('../models/aboutUs/aboutUsComponents/gallery.model')
const MarcandoPauta = require('../models/aboutUs/aboutUsComponents/marcandoPauta.model')
const Megat = require('../models/aboutUs/aboutUsComponents/megat.model')
const Timeline = require('../models/aboutUs/aboutUsComponents/timeline.model')

const dataGallery = require('../data/dataGallery')
const timelineData = require('../data/timeline')

Promise.all([
  Banner.deleteMany(),
  FarmacoVigilancia.deleteMany(),
  MeetPeopleWorkWithUsHome.deleteMany(),
  ModalFarmacoVigilancia.deleteMany(),
  Portfolio.deleteMany(),
  UsInfo.deleteMany(),
  Video.deleteMany(),
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
          password: 'Mappet123',
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

  ////////////////////////////////////////


  ////////////////////////////////////////


  ////////////////////////////////////////


  ////////////////////////////////////////


  ////////////////////////////////////////


  ////////////////////////////////////////


  ////////////////////////////////////////