// models/nuestrasEmpresasComponents/videoTecnologiaEmpresas.model.js
const {Schema, model} = require('mongoose')

const videoTecnologiaIDSchema = new Schema(
    {
        title: {
            type: String,
            required: true
        },
        title_eng: {
            type: String,
            required: true
        },
        videoURL: {
            type: String,
            required: true
        },
    },
    {timestamps: true}
)

module.exports = model('VideoTecnologiaID', videoTecnologiaIDSchema)
