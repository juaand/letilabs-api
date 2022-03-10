const {Schema, model} = require('mongoose')


const siteContentSchema = new Schema(
  {
    name: {
      type: String,
    },
    url: {
      type: String,
    },
    content: {
      type: String,
    },
    type: {
      type: String,
    }
  }
)

module.exports = model('SiteContent', siteContentSchema)