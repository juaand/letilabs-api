const {Schema, model} = require('mongoose')

const biocontrolledModifiedSchema = new Schema(
    {
        title_one: {
            type: String,
        },
        title_one_eng: {
            type: String,
        },
        title_two: {
            type: String,
        },
        title_two_eng: {
            type: String,
        },
        title_three: {
            type: String,
        },
        title_three_eng: {
            type: String,
        },
        description: {
            type: String,
            required: true
        },
        description_eng: {
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

module.exports = model('BiocontrolledModified', biocontrolledModifiedSchema)
