/**
 * Created by ashani on 6/30/2017.
 */
'use strict';

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const DrugSchema = new Schema ({
    itemName: {
        type: String,
        required: true
    },
    batchNo: {
        type: Number,
        required: true
    },
    packingType: {
        type: String,
        required: true
    },
    manufacturer: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    addedDate: {
        type: String,
        required: true
    },
    expiryDate: {
        type: String,
        required: true
    },
    sellingPrice: {
        type: Number,
        required: true
    }


});

const Drug = mongoose.model('Drug', DrugSchema );
module.exports = Drug;

