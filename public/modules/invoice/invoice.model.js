/**
 * Created by ashani on 7/1/2017.
 */
'use strict';

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const InvoiceSchema = new Schema ({
    InvoiceNo:{
        type:String,
        required:true
    },
    PatientName:{
        type:String,
        required:true
    },
    PatientTelephone:{
        type:String,
        required:true
    },
    Date:{
        type:String,
        required:true
    },
    Time:{
        type:String,
        required:true
    },
    Amount:{
        type:String,
        required:true
    },
    Status:{
        type:String,
        required:true
    }
});

const Invoice = mongoose.model('Invoice', InvoiceSchema );
module.exports = Invoice;

