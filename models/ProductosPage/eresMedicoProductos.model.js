// models/nuestrasEmpresasComponents/equipoEmpresas.model.js
const {Schema, model} = require('mongoose')

const eresMedicoProductosSchema = new Schema(
    {
        findProductsTitle: {
            type: String,
            required: true
        },
        findProductsTitle_eng: {
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
        buttonTitle: {
            type: String,
            required: true
        },
        buttonTitle_eng: {
            type: String,
            required: true
        },
        imgURL: {
            type: String,
            required: true
        }
    },
    {timestamps: true}
)

module.exports = model('EresMedicoProductos', eresMedicoProductosSchema)
