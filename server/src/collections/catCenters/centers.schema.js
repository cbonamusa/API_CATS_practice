/* SCHEMA FOR CAT CENTERS */
const mongoose = require('mongoose');

const centerSchema = new mongoose.Schema({
        centerName: {
            type: String,
            required: true
        },
        location: {
            type: String,
            required: true
        },
        cats: [{
            type: mongoose.Schema.Types.ObjectID,
            ref: "cat"
        }]
    },
    { timestamps: true }
);
centerSchema.index({ centerName: 1 }, { unique: true });
module.exports = mongoose.model("center", centerSchema);