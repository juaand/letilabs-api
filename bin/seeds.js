require('../config/db.config')
require('dotenv').config()

const User = require('../models/user.model')
const Spot = require('../models/spot.model')
const Comment = require('../models/comment.model')
const Pet = require('../models/pet.model')
const Like = require('../models/like.model')
const Blog = require('../models/blog.model')
const faker = require('faker')
const database = require('../data/mappet.json')

const userN = 30
const spotN = 3
const commentN = 3
const blogN = 10
const petN = 3

const userIds = []
const spotIds = []


////////////////////////////


const HomeSearch = require('../models/home/homeSearch.model');
const HomePage = require('../models/home/home.model')
const unidadesNegocio = require('../data/unidadesNegocio')
const portfolioData = require('../data/dataPortafolio')
const bussinessUnitsDescs = []; 
const portfolioTitles = [];
const portfolioDescs = [];

unidadesNegocio.forEach(unidad => {
  bussinessUnitsDescs.push(unidad.desc)
})
portfolioData.forEach(unidad => {
  portfolioTitles.push(unidad.title)
  portfolioDescs.push(unidad.desc)
})


Promise.all([
  HomeSearch.deleteMany(),
  HomePage.deleteMany()
])
.then(() => {
  console.log('all databases cleaned')
  const homeSearch = new HomeSearch({
    url: 'https://letilabs-dev.herokuapp.com/',
    genericContentAboutUs: 'Laboratorios Leti es un laboratorio farmacéutico venezolano que desde hace 70 años, crea soluciones de salud a través de la producción y comercialización de un amplio portafolio de medicamentos desarrollados con tecnología y seguridad, de la mano de un talento humano caliﬁcado que trabaja día a día para acompañar a los venezolanos.',
    aboutUsButtonTitle: 'Conoce más sobre nosotros',
    carrouselTitle: 'Nuestros productos',
    bussinesUnitsTitle: 'Nos conformamos de 3 unidades de negocio',
    bussinesUnitsDescriptions: bussinessUnitsDescs,
    portfolio4TypesTitle: 'Nuestro portafolio cuenta con 4 tipos de medicamentos',
    portfolio4TypesTitles: portfolioTitles,
    portfolio4TypesDescriptions: portfolioDescs,
    knowThemallButtonTitle: 'Conócelos todos',
    findProductTitle: 'Encuentra un producto...',
    farmacología: {
      title: 'Farmacovigilancia',
      question: '¿Tuviste algún efecto adverso con alguno de nuestros productos?',
      buttonTitle: 'Infórmanos aquí',
    }
  })
  const aboutUsSearch = new AboutUsSearch({
    developingSolutionsTitle: '',
    contentWithSecondImg: '',
    secondSliderTitle: '',
    timeLine: portfolioDescs,
    letiLabLatamTitle: '',
    megatDescription: '',
    megatButtonTitle: ''
  })
  homeSearch.save()
    .then(() => console.log(`hamepageSearch created`))
    .catch(error => console.log(error))
})
.catch(error => console.log(error))


Promise.all([
  User.deleteMany(),
  Spot.deleteMany(),
  Pet.deleteMany(),
  Comment.deleteMany(),
  Like.deleteMany(),
  Blog.deleteMany()
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
            userIds.push(u._id)
            console.log(`user added: ${u.name}`)
            for (k = 0; k < petN; k++) {
              const pet = new Pet({
                creatorId: u._id,
                animal: faker.random.arrayElement(['Dog', 'Cat', 'Bird']),
                name: faker.name.firstName(),
                age: faker.random.number(),
                breed: faker.lorem.word(),
                avatar: faker.random.image('animal')
              })
              pet.save()
                .then(() => console.log(`pet added to ${u.name}`))
                .catch(error => console.log(error))
            }

            for (let m = 0; m < spotN; m++) {
              const spot = new Spot({
                creatorId: userIds[Math.floor(Math.random() * userIds.length)],
                name: faker.lorem.words(),
                content: faker.lorem.paragraph(),
                pictures: faker.random.image(),
                url: faker.internet.url(),
                // category: database[m].category,
                category: faker.random.arrayElement([
                  'activities',
                  'animal-shelter',
                  'beach',
                  'events',
                  'grooming',
                  'hiking',
                  'hotel',
                  'ong',
                  'park',
                  'pipican',
                  'restaurants',
                  'services',
                  'store',
                  'tour',
                  'training',
                  'veterinary',
                  'veterinary',
                  'walk'
                ]),
                lat: database[m].geometry.coordinates[1],
                lng: database[m].geometry.coordinates[0],
                rate: faker.random.number({min: 0, max: 5}).toFixed(1),
                phone: faker.phone.phoneNumber(),
                city: faker.random.arrayElement([
                  'Madrid',
                  'Barcelona',
                  'Valencia',
                  'Bilbao',
                  'Sevilla',
                  'A Coruña',
                  'Gijón',
                  'Santander',
                  'León',
                  'Albacete',
                  'Murcia',
                  'Galicia',
                  'San Sebastian'
                ]),
                address: faker.address.streetAddress(),
                zipCode: faker.address.zipCode(),
                days: faker.random.arrayElement([
                  'Mon',
                  'Tue',
                  'Wed',
                  'Thu',
                  'Fri',
                  'Sat',
                  'Sun'
                ]),
                open: [10,14],
                close: [16,20],
                email: faker.internet.email(),
                instagram: faker.name.firstName(),
                facebook: faker.internet.url(),
                createdAt: faker.date.past()
              })
              spot.save()
                .then(s => {
                  spotIds.push(s._id)
                  console.log(`spot added`)
                  for (let k = 0; k < commentN; k++) {
                    const comment = new Comment({
                      authorId: userIds[Math.floor(Math.random() * userIds.length)],
                      spotId: s._id,
                      content: faker.lorem.paragraph(),
                      createdAt: faker.date.past()
                    })
                    comment.save()
                      .then(c => console.log(`comment added by ${c.authorId}`))
                      .catch(error => console.log(error))
                  }
                })
                .catch(error => console.log(error))
            }
          })
          .catch(error => console.log(error))
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
          .then(u => {
            console.log(`Editor added ${u._id}`)
            for (let i = 0; i < blogN; i++) {
              const blog = new Blog({
                title: faker.name.jobTitle(),
                content: faker.lorem.paragraphs(faker.random.number({min: 5, max: 30})),
                authorId: u._id,
                picPath: faker.random.image(),
                tags: faker.random.arrayElement([
                  'activities',
                  'animal-shelter',
                  'beach',
                  'events',
                  'grooming',
                  'hiking',
                  'hotel',
                  'ong',
                  'park',
                  'pipican',
                  'restaurants',
                  'services',
                  'store',
                  'tour',
                  'training',
                  'veterinary',
                  'veterinary',
                  'walk'
                ])
              })
              blog.save()
                .then(b => console.log(`blog added for editor ${b.authorId}`))
                .catch(error => console.log(error))
            }
          })
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