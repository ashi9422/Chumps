/**
 * Created by ashani on 6/27/2017.
 */
'use strict';

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const DrugOrderSchema = new Schema ({
    drugname: {
        type: String,
        required: true
    },

    quantity: {
        type: Number,
        required: true
    },

    supplier: {
        type: String,
        required: true
    },

    orderdate: {
        type: Date,
        required: true
    },
    status: {
        type: String,
        required: true
    }
});

const DrugOrder = mongoose.model('DrugOrder', DrugOrderSchema );
module.exports = DrugOrder;