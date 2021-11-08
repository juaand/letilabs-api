const {Schema, model} = require('mongoose')

const vigilanciaSchema = new Schema({
    date: {
        type: Date
    },
    effects: {
        type: String
    },
    lastname: {
        type: String
    },
    name: {
        type: String
    },
    medicine: {
        type: String
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





