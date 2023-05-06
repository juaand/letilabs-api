// models/nuestrasEmpresasComponents/mapTecnologiaEmpresas.model.js
const {Schema, model} = require('mongoose')

const mapTecnologiaIDSchema = new Schema(
    {
        description: {
            type: String,
            required: true
        },
        description_eng: {
            type: String,
            required: true
        },
        mapURL: {
            type: String,
            required: true
        },
    },
    {timestamps: true}
)

module.exports = model('MapTecnologiaID', mapTecnologiaIDSchema)
