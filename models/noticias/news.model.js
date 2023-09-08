const {Schema, model} = require('mongoose')


const blogSchema = new Schema(
    {
        title: {
            type: String,
        },
        subTitle: {
            type: String,
        },
        urlToPic: {
            type: String,
            required: [true, 'La imagen de la noticia es obligatorio'],
        },
        content: {
            type: String,
            required: [true, 'El contenido de la noticia es obligatorio'],
        },
        outstanding: {
            type: Boolean,
            required: [true, 'Outstanding is required'],
        },
        tag: {
            type: [String],
            required: [true, 'Seleccione al menos una etiqueta para la noticia'],
        },
        publishDate: {
            type: Date,
            required: [true, 'PublishDate is required'],
        }
    },
    {
        timestamps: true,
        toJSON: {
            virtuals: true,
            transform: (doc, ret) => {
                ret.id = doc._id
                delete ret._id
                delete ret.__v
                delete ret.updatedAt
                return ret
            }
        }
    }
)

module.exports = model('Blog', blogSchema)