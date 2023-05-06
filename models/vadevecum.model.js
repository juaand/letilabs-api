// models/vadevecum.model.js
const {Schema, model} = require('mongoose')

const vadevecumSchema = new Schema(
    {
        line: {
            type: String,
            required: true
        },
        line_eng: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        name_eng: {
            type: String,
            required: true
        },
        active_principle: {
            type: String,
            required: true
        },
        active_principle_eng: {
            type: String,
            required: true
        },
        composition: {
            type: String,
            required: true
        },
        composition_eng: {
            type: String,
            required: true
        },
        indication: {
            type: String,
            required: true
        },
        indication_eng: {
            type: String,
            required: true
        },
        posology: {
            type: String,
            required: true
        },
        posology_eng: {
            type: String,
            required: true
        },
        presentation: {
            type: String,
            required: true
        },
        presentation_eng: {
            type: String,
            required: true
        },
        health_register: {
            type: String,
            required: true
        },
        health_eng: {
            type: String,
            required: true
        },
        therapeutic_group: {
            type: [String],
            required: true
        },
        therapeutic_group_eng: {
            type: [String],
            required: true
        },
        category: {
            type: String,
        },
        category_eng: {
            type: String,
        },
        tv_spot: {
            type: [String],
        },
        tv_spot_eng: {
            type: [String],
        },
        trademarks: {
            type: String,
        },
        trademarks_eng: {
            type: String,
        },
        show_in_home: {
            type: Boolean,
            default: false
        },
        show_in_products: {
            type: Boolean,
            default: true
        },
        picPath: {
            type: String,
            default: 'https://firebasestorage.googleapis.com/v0/b/grupoleti.appspot.com/o/images%2Fno-image.png?alt=media&token=b95b1265-ca58-4e6d-a5c8-4194203d1cd7'
        },
        QRpath: {
            type: String,
            default: 'https://firebasestorage.googleapis.com/v0/b/grupoleti.appspot.com/o/images%2Fbarcode.gif?alt=media&token=52345bca-761d-45c7-a0d4-5bf119d4ea1c'
        },
        util_life: {
            type: String,
            default: 'Sin información de vida útil de este medicamento.'
        },
        util_life_eng: {
            type: String,
            default: 'Sin información de vida útil de este medicamento.'
        },
        cpe: {
            type: String,
            default: 'Sin información del CPE de este medicamento.'
        },
        cpe_eng: {
            type: String,
            default: 'Sin información del CPE de este medicamento.'
        },
        how_to_use: {
            type: String,
            default: '- Sin información del uso de este medicamento.'
        },
        how_to_use_eng: {
            type: String,
            default: '- Sin información del uso de este medicamento.'
        },
        contraindications: {
            type: String,
            default: '- Sin información de las contraindicaciones de este medicamento.'
        },
        contraindications_eng: {
            type: String,
            default: '- Sin información de las contraindicaciones de este medicamento.'
        },
        adverse_reactions: {
            type: String,
            default: '- Sin información de las reacciones adversas de este medicamento.'
        },
        adverse_reactions_eng: {
            type: String,
            default: '- Sin información de las reacciones adversas de este medicamento.'
        },
        prospect: {
            type: String,
            default: '- Sin información de prospecto.'
        },
        prospect_eng: {
            type: String,
            default: '- Sin información de prospecto.'
        }
    },
    {timestamps: true}
)

module.exports = model('Vadevecum', vadevecumSchema)