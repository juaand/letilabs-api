// models/nuestrasEmpresasComponents/bannerTecnologiaEmpresas.model.js
const {Schema, model} = require('mongoose')

const landingBioletisanTechPlaceSchema = new Schema(
    {
        place_link: {
            type: String,
            required: true
        },
        place_url: {
            type: String,
            required: true
        },
    },
    {timestamps: true}
)

module.exports = model('LandingBioletisanTechPlace', landingBioletisanTechPlaceSchema)
