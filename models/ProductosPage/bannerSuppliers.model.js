const {Schema, model} = require('mongoose')

const bannerSuppliersSchema = new Schema(
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
        imgURLFarmadon: {
            type: String,
            required: true
        },
        imgURLFarmabien: {
            type: String,
            required: true
        },
        URLFarmatodo: {
            type: String,
            required: true
        },
        URLLocatel: {
            type: String,
            required: true
        },
        URLFarmadon: {
            type: String,
            required: true
        },
        URLFarmabien: {
            type: String,
            required: true
        },
    },
    {timestamps: true}
)

module.exports = model('BannerSuppliers', bannerSuppliersSchema)
