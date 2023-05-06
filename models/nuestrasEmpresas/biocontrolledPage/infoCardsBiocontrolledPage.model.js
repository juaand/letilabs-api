// models/nuestrasEmpresasComponents/bannerEmpresas.model.js
const {Schema, model} = require('mongoose')

const infoCardsBiocontrolledPageSchema = new Schema(
    {
        title: {
            type: String,
            required: true
        },
        title_eng: {
            type: String,
            required: true
        },
        info: {
            type: String,
            required: true
        },
        info_eng: {
            type: String,
            required: true
        },
    },
    {timestamps: true}
)

module.exports = model('InfoCardsBiocontrolledPage', infoCardsBiocontrolledPageSchema)
