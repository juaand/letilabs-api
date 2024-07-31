// models/nuestrasEmpresasComponents/bannerTecnologiaEmpresas.model.js
const {Schema, model} = require('mongoose')

const landingBioletisanInfoSchema = new Schema(
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
        icon_url: {
            type: String,
            required: true
        },
        item_tag: {
            type: String,
            required: true
        },
        item_tag_eng: {
            type: String,
            required: true
        },
        item_description: {
            type: String,
            required: true
        },
        item_description_eng: {
            type: String,
            required: true
        },
    },
    {timestamps: true}
)

module.exports = model('LandingBioletisanInfo', landingBioletisanInfoSchema)
