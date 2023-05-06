// models/cookie.model.js
const {Schema, model} = require('mongoose')

const cookieSchema = new Schema(
    {
        info: {
            type: String,
            required: true
        },
        info_eng: {
            type: String,
            required: true
        },
    },
    {timestamps: true}
)

module.exports = model('Cookie', cookieSchema)