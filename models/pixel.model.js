const {Schema, model} = require('mongoose')

const pixelSchema = new Schema(
    {
        facebook1: {
            type: String,
        },
        facebook2: {
            type: String,
        },
        google: {
            type: String,
        },
        google2: {
            type: String,
        }
    }
)

module.exports = model('Pixel', pixelSchema)