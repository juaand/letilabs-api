// models/nuestrasEmpresasComponents/genvenTimeLine.model.js
const {Schema, model} = require('mongoose')

const genvenTimeLineSchema = new Schema(
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
        buttonText: {
            type: String
        },
        buttonText_eng: {
            type: String
        },
        buttonLink: {
            type: String
        },
        buttonLink_eng: {
            type: String
        },
    },
    {timestamps: true}
)

module.exports = model('GenvenTimeLine', genvenTimeLineSchema)
