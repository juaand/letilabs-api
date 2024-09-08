const {Schema, model} = require('mongoose')

const biocontrolledWhoWeAreSchema = new Schema(
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
    },
    {timestamps: true}
)

module.exports = model('BiocontrolledWhoWeAre', biocontrolledWhoWeAreSchema)
