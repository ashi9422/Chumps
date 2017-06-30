'use strict';

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const PrescriptionSchema = new Schema ({
    doctorid: {
        type: String,
        required: true
    },
    patientid: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    date: {
        type: String,
        required: true
    }
});

const Prescription = mongoose.model('Prescription', PrescriptionSchema );
module.exports = Prescription;