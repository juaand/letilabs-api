// models/nuestrasEmpresasComponents/bannerEmpresas.model.js
const {Schema, model} = require('mongoose')

const bannerProductosSchema = new Schema(
    {
        description: {
            type: String,
            required: true
        },
        description_eng: {
            type: String,
            required: true
        },
        description2: {
            type: String,
            required: true
        },
        description2_eng: {
            type: String,
            required: true
        },
        imgURL: {
            type: String,
            required: true
        },
        img2URL: {
            type: String,
            required: true
        },
        img3URL: {
            type: String,
            required: true
        },
    },
    {timestamps: true}
)

module.exports = model('BannerProductos', bannerProductosSchema)
