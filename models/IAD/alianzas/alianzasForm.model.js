const {Schema, model} = require('mongoose')

const alianzaFormSchema = new Schema({
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
    mail: {
        type: String,
        maxLength: [40, "El correo ha excedido el máximo de caracteres permitidos para el campo."],
        required: true
    },
    phone: {
        type: String,
        maxLength: [12, "El teléfono ha excedido el máximo de caracteres permitidos para el campo."],
        required: true
    },
    country: {
        type: String,
        required: true
    },
    company: {
        type: String,
        maxLength: [40, "El teléfono ha excedido el máximo de caracteres permitidos para el campo."],
        required: true
    },
    message: {
        type: String,
        maxLength: [500, "El mensaje ha excedido el máximo de caracteres permitidos para el campo."],
        required: true
    }
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

module.exports = model("AlianzaForm", alianzaFormSchema)