// models/nuestrasEmpresasComponents/bannerTecnologiaEmpresas.model.js
const {Schema, model} = require('mongoose')

const landingNewItemSchema = new Schema(
    {
        tag: {
            type: String,
            required: true
        },
        tag_eng: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        title_eng: {
            type: String,
            required: true
        },
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
        image_url: {
            type: String,
            required: true
        },
    },
    {timestamps: true}
)

module.exports = model('LandingNewItem', landingNewItemSchema)
