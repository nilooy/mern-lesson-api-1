const mongoose = require('mongoose')

// declare the schema
const PatientSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,

    },
}, {timestamps: true});

module.exports = mongoose.model('patient', PatientSchema)