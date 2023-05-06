const {Schema, model} = require('mongoose')

const navSchema = new Schema(
    {
        nav_btn: {
            type: String,
            required: [true, 'El nombre del botón es requerido'],
            trim: true,
            maxlength: [200, 'El máximo de caracteres es 200']
        },
        nav_btn_eng: {
            type: String,
            required: [true, 'El nombre del botón es requerido'],
            trim: true,
            maxlength: [200, 'El máximo de caracteres es 200']
        },
        title: {
            type: String,
            required: [true, 'El título de la sección es requerido'],
            trim: true,
            maxlength: [100, 'El máximo de caracteres es 100']
        },
        title_eng: {
            type: String,
            required: [true, 'El título de la sección es requerido'],
            trim: true,
            maxlength: [100, 'El máximo de caracteres es 100']
        },
        desc: {
            type: String,
            required: [true, 'La descripción es requerida'],
            trim: true,
            maxlength: [400, 'El máximo de caracteres es 400']
        },
        desc_eng: {
            type: String,
            required: [true, 'La descripción es requerida'],
            trim: true,
            maxlength: [400, 'El máximo de caracteres es 400']
        },
        nav_cta: {
            type: String,
            required: [true, 'El texto del "CTA" es requerido'],
            trim: true,
            maxlength: [100, 'El máximo de caracteres es 100']
        },
        nav_cta_eng: {
            type: String,
            required: [true, 'El texto del "CTA" es requerido'],
            trim: true,
            maxlength: [100, 'El máximo de caracteres es 100']
        },
        nav_path: {
            type: String,
            required: [true, 'La URL del "CTA" es requerida'],
            trim: true,
            maxlength: [100, 'El máximo de caracteres es 100']
        },
        nav_path_eng: {
            type: String,
            required: [true, 'La URL del "CTA" es requerida'],
            trim: true,
            maxlength: [100, 'El máximo de caracteres es 100']
        },
        sub_nav: {
            sub_text: {
                type: String,
                trim: true,
                required: false,
                maxlength: [100, 'El máximo de caracteres es 100']
            },
            sub_text_eng: {
                type: String,
                trim: true,
                required: false,
                maxlength: [100, 'El máximo de caracteres es 100']
            },
            subNav_path: {
                type: String,
                trim: true,
                required: false,
                maxlength: [100, 'El máximo de caracteres es 100']
            },
            subNav_path_eng: {
                type: String,
                trim: true,
                required: false,
                maxlength: [100, 'El máximo de caracteres es 100']
            }
        }
    },
    {timestamps: true}
)

module.exports = model('Nav', navSchema)