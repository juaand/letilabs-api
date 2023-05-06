// models/nuestrasEmpresasComponents/bannerTecnologiaEmpresas.model.js
const {Schema, model} = require('mongoose')

const bannerProductosPageSchema = new Schema(
    {
        title: {
            type: String,
            required: true
        },
        title_eng: {
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
        imgURL: {
            type: String,
            required: true
        },
        button1Title: {
            type: String,
            required: true
        },
        button1Title_eng: {
            type: String,
            required: true
        },
        button1Link: {
            type: String,
            required: true
        },
        button1Link_eng: {
            type: String,
            required: true
        },
        button2Title: {
            type: String,
            required: true
        },
        button2Title_eng: {
            type: String,
            required: true
        },
        button2Link: {
            type: String,
            required: true
        },
        button2Link_eng: {
            type: String,
            required: true
        },
    },
    {timestamps: true}
)

module.exports = model('BannerProductosPage', bannerProductosPageSchema)
