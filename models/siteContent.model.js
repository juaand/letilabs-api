const {Schema, model} = require('mongoose')


const siteContentSchema = new Schema(
    {
        name: {
            type: String,
        },
        name_eng: {
            type: String,
        },
        url: {
            type: String,
        },
        url_eng: {
            type: String,
        },
        content: {
            type: String,
        },
        content_eng: {
            type: String,
        },
        type: {
            type: String,
        },
        type_eng: {
            type: String,
        }
    }
)

module.exports = model('SiteContent', siteContentSchema)