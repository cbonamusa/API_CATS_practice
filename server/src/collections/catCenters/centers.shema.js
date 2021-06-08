/* SCHEMA FOR CAT CENTERS */
const mongoose = require('mongoose');

const centers = new mongoose.Schema({
    center_name: {
        type: String,
        required: true
    },
    location: {
        
    }
})