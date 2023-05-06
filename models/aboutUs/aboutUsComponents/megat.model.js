// models/megat.model.js
const {Schema, model} = require('mongoose')

const megatSchema = new Schema(
    {
        title: {
            type: String,
            required: true
        },
        title_eng: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        description_eng: {
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
        buttonTitle: {
            type: String,
            required: true
        },
        buttonTitle_eng: {
            type: String,
            required: true
        },
        logoURL: {
            type: String,
            required: true,
            default: 'https://firebasestorage.googleapis.com/v0/b/grupoleti.appspot.com/o/images%2Fmegat.svg?alt=media&token=4367be0e-5643-4cac-86d2-1b19959cd34d'
        }
    },
    {timestamps: true}
)

module.exports = model('Megat', megatSchema)
