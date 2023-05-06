// models/nuestrasEmpresasComponents/videoTecnologiaEmpresas.model.js
const {Schema, model} = require('mongoose')

const contribucionAlianzasIDSchema = new Schema(
    {
        title: {
            type: String,
            required: true
        },
        title_eng: {
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
        phone: {
            type: String,
            required: true
        },
        phone_eng: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        email_eng: {
            type: String,
            required: true
        },
    },
    {timestamps: true}
)

module.exports = model('ContribucionAlianzasID', contribucionAlianzasIDSchema)
