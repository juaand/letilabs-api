// models/nuestrasEmpresasComponents/bannerTecnologiaEmpresas.model.js
const {Schema, model} = require('mongoose')

const landingSocialSchema = new Schema(
    {
        background: {
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
        description: {
            type: String,
            required: true
        },
        description_eng: {
            type: String,
            required: true
        },
        link: {
            type: String,
            required: true
        },
    },
    {timestamps: true}
)

module.exports = model('LandingSocial', landingSocialSchema)
