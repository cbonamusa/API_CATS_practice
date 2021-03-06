/* SCHEMA FOR CATS  */
const mongoose = require('mongoose');

const catsSchema = new mongoose.Schema({   
        center: {
            type: mongoose.Schema.Types.ObjectID,
            ref: "center",
            id: "_id",
            required: true
        },
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
        breed: {
            type: String,
            required: true,
        },
        fur: {
            type: String,
            required: false,
        },
        history: {
            type: String,
            required: false,
        },
        img: {
            required: false,
            //TO DO:  files - logic
        }
    },
    { 
        timestamps: true,
        versionKey: false
    }
);

//catsSchema.index({ center: 1 });
const Cat = mongoose.model('cat', catsSchema );
module.exports = Cat;