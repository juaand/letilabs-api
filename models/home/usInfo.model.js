// models/usInfo.model.js
const {Schema, model} = require('mongoose')

const usInfoSchema = new Schema(
    {
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
        age: {
            type: Number,
        },
        age_eng: {
            type: Number,
        }
    },
    {timestamps: true}
)

module.exports = model('UsInfo', usInfoSchema)