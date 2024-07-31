// models/nuestrasEmpresasComponents/bannerTecnologiaEmpresas.model.js
const {Schema, model} = require('mongoose')

const landingBioletisanTechInfoSchema = new Schema(
    {
        link: {
            type: String,
            required: true
        },
        link_eng: {
            type: String,
            required: true
        },
        link_url: {
            type: String,
            required: true
        },
        bg_url: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        description_eng: {
            type: String,
            required: true
        },
    },
    {timestamps: true}
)

module.exports = model('LandingBioletisanTechInfo', landingBioletisanTechInfoSchema)
