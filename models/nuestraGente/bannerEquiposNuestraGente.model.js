// models/nuestrasEmpresasComponents/videoTecnologiaEmpresas.model.js
const { Schema, model} = require('mongoose')

const bannerTeamOurPeopleSchema = new Schema(
  {
    mainTitle: {
      type: String,
      required: true
    },
    imgURL: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
)

module.exports = model('BannerTeamOurPeople', bannerTeamOurPeopleSchema)
