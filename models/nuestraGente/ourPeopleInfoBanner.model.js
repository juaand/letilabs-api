// models/nuestrasEmpresasComponents/bannerEmpresas.model.js
const {Schema, model} = require('mongoose')

const ourPeopleInfoBannerSchema = new Schema(
    {
        backgroundURL: {
            type: String,
            required: true
        },
        mainDescription: {
            type: String,
            required: true
        },
        mainDescription_eng: {
            type: String,
            required: true
        },
        item: {
            iconURL: {
                type: String,
                required: true
            },
            number: {
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
            }
        },
    },
    {timestamps: true}
)

module.exports = model('OurPeopleInfoBanner', ourPeopleInfoBannerSchema)