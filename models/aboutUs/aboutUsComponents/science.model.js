// models/science.model.js
const {Schema, model} = require('mongoose')

const scienceSchema = new Schema(
    {
        title: {
            type: String,
            required: true
        },
        title_eng: {
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
        imgURL: {
            type: String,
            required: true
        },
    },
    {timestamps: true}
)

module.exports = model('Science', scienceSchema)
