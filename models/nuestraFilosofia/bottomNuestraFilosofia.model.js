// models/megat.model.js
const {Schema, model} = require('mongoose')

const bottomNuestraFilosofiaSchema = new Schema(
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
        buttonLink: {
            type: String,
            required: true
        },
        buttonLink_eng: {
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
        },
    },
    {timestamps: true}
)

module.exports = model('BottomNuestraFilosofia', bottomNuestraFilosofiaSchema)
