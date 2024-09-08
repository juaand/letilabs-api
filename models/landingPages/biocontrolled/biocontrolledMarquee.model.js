const {Schema, model} = require('mongoose')

const biocontrolledMarqueeSchema = new Schema(
    {
        text: {
            type: String,
            required: true
        },
        text_eng: {
            type: String,
            required: true
        },
    },
    {timestamps: true}
)

module.exports = model('BiocontrolledMarquee', biocontrolledMarqueeSchema)
