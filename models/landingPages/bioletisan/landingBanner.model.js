// models/nuestrasEmpresasComponents/bannerTecnologiaEmpresas.model.js
const {Schema, model} = require('mongoose')

const landingBannerSchema = new Schema(
    {
        title: {
            type: String,
            required: true
        },
        title_eng: {
            type: String,
            required: true
        },
        subtitle: {
            type: String,
            required: true
        },
        subtitle_eng: {
            type: String,
            required: true
        },
        imgURLOne: {
            type: String,
            required: true
        },
        imgURLTwo: {
            type: String,
            required: true
        },
        imgURLThree: {
            type: String,
            required: true
        },
    },
    {timestamps: true}
)

module.exports = model('LandingBanner', landingBannerSchema)
