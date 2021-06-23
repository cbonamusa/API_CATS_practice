/* SCHEMA FOR CAT CENTERS */
const mongoose = require('mongoose');

const centerSchema = new mongoose.Schema({
        centerName: {
            type: String,
            required: true,
            trim: true
        },
        location: {
            type: String,
            required: true
        },
        address: {
            type: String,
            required: false
        },
        contactPhone: {
            type: Number,
            required: true
        },
        contactEmail: {
            type: String,
            required: false
        },
        cats: [{
            type: mongoose.Schema.Types.ObjectID,
            ref: "cat",
            default: 'No cats yet'
        }]
    },
    { 
        timestamps: false,
        versionKey: false
    }
);
//centerSchema.index({ centerName: 1 }, { unique: true });
module.exports = mongoose.model("center", centerSchema);