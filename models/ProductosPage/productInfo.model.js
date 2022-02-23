const {Schema, model} = require('mongoose')

const productInfoSchema = new Schema({
    name: {
        type: String,
        maxLength: [50, "El nombre ha llegado al máximo de caracteres permitidos."]
    },
    lastname: {
        type: String,
        maxLength: [75, "El apellido ha llegado al máximo de caracteres permitidos."]
    },
    work: {
        type: String,
        maxLength: [75, "El nombre de la institución ha llegado al máximo de caracteres permitidos."]
    },
    years: {
        type: String,
        maxLength: [2, "El número de años ha llegado al máximo de caracteres permitidos."]
    },
    speciality: {
        type: String,
        maxLength: [75, "La especialidad ha llegado al máximo de caracteres permitidos."]
    },
    license: {
        type: String,
        maxLength: [35, "La licencia ha llegado al máximo de caracteres permitidos."]
    },
    info: {
        type: String,
        maxLength: [450, "La información ha llegado al máximo de caracteres permitidos."]
    },
    mail: {
        type: String,
        maxLength: [100, "El correo ha llegado al máximo de caracteres permitidos."]
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

module.exports = model("ProductInfo", productInfoSchema)