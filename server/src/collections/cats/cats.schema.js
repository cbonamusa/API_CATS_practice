/* SCHEMA FOR CATS  */
const mongoose = require('mongoose');

const catsSchema = new mongoose.Schema({   
        name: {
            type: String,
            required: true,
            trim: false,
            maxlength: 30
        },
        age: {
            type: String,
            required: true,
            trim: true
        },
        race: {
            type: String,
            required: true,
        },
        fur: {
            type: String,
            required: true,
        },
        history: {
            type: String,
            required: false,
        },
        location: {
            type: String,
            required: true,
        },
        img: {
            required: false,
        }
    },
    { timestamps: true }
);

const Cat = mongoose.model('cat', catsSchema );
module.exports = Cat;