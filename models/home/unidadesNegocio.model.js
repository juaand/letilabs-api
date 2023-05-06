// models/unidadesNegocio.model.js
const {Schema, model} = require('mongoose')

const unidadesNegocioSchema = new Schema(
    {
        mainTitle: {
            type: String,
            required: [true, 'Título de la sesión es requerido'],
        },
        mainTitle_eng: {
            type: String,
            required: [true, 'Título de la sesión es requerido'],
        },
        name: {
            type: String,
            required: true
        },
        name_eng: {
            type: String,
            required: true
        },
        logo: {
            type: String,
            required: true
        },
        desc: {
            type: String,
            required: true
        },
        desc_eng: {
            type: String,
            required: true
        },
        url: {
            type: String,
            required: true
        },
        url_eng: {
            type: String,
            required: true
        },
    },
    {timestamps: true}
)

module.exports = model('UnidadesNegocio', unidadesNegocioSchema)