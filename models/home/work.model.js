const {Schema, model} = require('mongoose')

const workSchema = new Schema({
    name: {
        type: String,
        maxLength: [50, "El nombre ha llegado al máximo de caracteres permitidos."],
        required: true
    },
    lastname: {
        type: String,
        maxLength: [75, "El apellido ha llegado al máximo de caracteres permitidos."],
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        maxLength: [15, "Teléfono ha excedido el máximo de caracteres permitidos para el campo."],
        required: true
    },
    country: {
        type: String,
        maxLength: [20, "País ha excedido el máximo de caracteres permitidos para el campo."],
        required: true
    },
    city: {
        type: String,
        maxLength: [20, "Ciudad ha excedido el máximo de caracteres permitidos para el campo."],
        required: true
    },
    cv: {
        type: String,
        required: true
    },
    linkedin: {
        type: String,
        maxLength: [400, "Linkedin ha excedido el máximo de caracteres permitidos para el campo."]
    },
}, {
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
})

module.exports = model("Work", workSchema)