// models/nuestrasEmpresasComponents/letiTimeLine.model.js
const {Schema, model} = require('mongoose')

const letiTimeLineSchema = new Schema(
    {
        imgURL: {
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
    },
    {timestamps: true}
)

module.exports = model('LetiTimeLine', letiTimeLineSchema)
