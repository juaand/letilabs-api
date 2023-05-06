// models/nuestrasEmpresasComponents/cuidarEmpresas.model.js
const {Schema, model} = require('mongoose')

const cuidarEmpresasSchema = new Schema(
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
    },
    {timestamps: true}
)

module.exports = model('cuidarEmpresas', cuidarEmpresasSchema)
