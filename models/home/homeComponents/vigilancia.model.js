const {Schema, model} = require('mongoose')

const vigilanciaSchema = new Schema({
    date: {
        type: Date
    },
    effects: {
        type: String,
        maxLength: [400, "Efecto(s) secundario(s) ha excedido el máximo de caracteres permitidos para el campo."]
    },
    lastname: {
        type: String,
        maxLength: [75, "El apellido ha llegado al máximo de caracteres permitidos."]
    },
    name: {
        type: String,
        maxLength: [50, "El nombre ha llegado al máximo de caracteres permitidos."]
    },
    medicine: {
        type: String,
        required: true
    },
    prescribed: {
        type: String,
        enum: ['Si', 'No']
    },
    sex: {
        type: String,
        enum: ['F', 'M']
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

module.exports = model("Vigilancia", vigilanciaSchema)