// models/timeline.model.js
const {Schema, model} = require('mongoose')

const timelineSchema = new Schema(
    {
        year: {
            type: Number,
            required: true
        },
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
    },
    {timestamps: true}
)

module.exports = model('Timeline', timelineSchema)
