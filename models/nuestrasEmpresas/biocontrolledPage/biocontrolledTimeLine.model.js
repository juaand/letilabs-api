// models/nuestrasEmpresasComponents/biocontrolledTimeLine.model.js
const {Schema, model} = require('mongoose')

const biocontrolledTimeLineSchema = new Schema(
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
        buttonTitle: {
            type: String,
        },
        buttonTitle_eng: {
            type: String,
        },
        buttonLink: {
            type: String,
        },
        buttonLink_eng: {
            type: String,
        },
    },
    {timestamps: true}
)

module.exports = model('BiocontrolledTimeLine', biocontrolledTimeLineSchema)
