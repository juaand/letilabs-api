// models/farmacoVigilancia.model.js
const {Schema, model} = require('mongoose')

const farmacoVigilanciaSchema = new Schema(
    {
        title: {
            type: String,
            required: true
        },
        title_eng: {
            type: String,
            required: true
        },
        subTitle: {
            type: String,
            required: true
        },
        subTitle_eng: {
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
    },
    {timestamps: true}
)

module.exports = model('FarmacoVigilancia', farmacoVigilanciaSchema)
