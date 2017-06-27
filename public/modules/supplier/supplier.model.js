/**
 * Created by ashani on 5/6/2017.
 */
'use strict';

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const SupplierSchema = new Schema ({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    }
});

const Supplier = mongoose.model('Supplier', SupplierSchema );
module.exports = Supplier;

