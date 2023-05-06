// models/meetEmpresas.model.js
const {Schema, model, ObjectId} = require('mongoose')

const meetEmpresasSchema = new Schema(
    {
        title: {
            type: String,
            required: true
        },
        title_eng: {
            type: String,
            required: true
        },
        button: {
            type: String,
            required: true
        },
        button_eng: {
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
        img: {
            type: String,
            required: true
        },
    },
    {timestamps: true}
)

module.exports = model('MeetEmpresas', meetEmpresasSchema)
