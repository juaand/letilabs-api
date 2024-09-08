const {Schema, model} = require('mongoose')

const biocontrolledClinicalSchema = new Schema(
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
        info: {
            type: String,
            required: true
        },
        info_eng: {
            type: String,
            required: true
        },
        title_two: {
            type: String,
            required: true
        },
        title_two_eng: {
            type: String,
            required: true
        },
        description_two: {
            type: String,
            required: true
        },
        description_two_eng: {
            type: String,
            required: true
        },
    },
    {timestamps: true}
)

module.exports = model('BiocontrolledClinical', biocontrolledClinicalSchema)
