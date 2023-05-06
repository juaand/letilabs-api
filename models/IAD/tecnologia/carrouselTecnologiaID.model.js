// models/nuestrasEmpresasComponents/carrouselTecnologiaEmpresas.model.js
const {Schema, model} = require('mongoose')

const carrouselTecnologiaIDSchema = new Schema(
    {
        mainTitle: {
            type: String,
            required: true
        },
        mainTitle_eng: {
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
        imgURL: {
            type: String,
            required: true
        },
    },
    {timestamps: true}
)

module.exports = model('carrouselTecnologiaID', carrouselTecnologiaIDSchema)
