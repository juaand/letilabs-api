const {Schema, model} = require('mongoose')

const bannerFarmatodoLocatelSchema = new Schema(
    {
        title: {
            type: String,
            required: true
        },
        title_eng: {
            type: String,
            required: true
        },
        imgURLFarmatodo: {
            type: String,
            required: true
        },
        imgURLLocatel: {
            type: String,
            required: true
        },
    },
    {timestamps: true}
)

module.exports = model('BannerFarmatodoLocatel', bannerFarmatodoLocatelSchema)
