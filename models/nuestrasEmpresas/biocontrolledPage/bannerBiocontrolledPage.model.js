// models/nuestrasEmpresasComponents/bannerEmpresas.model.js
const {Schema, model} = require('mongoose')

const bannerBiocontrolledPageSchema = new Schema(
    {
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
        logoURL: {
            type: String,
            required: true
        },
    },
    {timestamps: true}
)

module.exports = model('BannerBiocontrolledPage', bannerBiocontrolledPageSchema)
