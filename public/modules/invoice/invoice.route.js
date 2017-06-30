/**
 * Created by ashani on 7/1/2017.
 */
'use strict';

const express = require('express'),
    mongoose = require('mongoose');

const Schema = mongoose.Schema;

mongoose.set('debug', false);

const InvoiceModel = mongoose.model('Invoice');
const Router = express.Router();

Router.get('/', (req, res) => {
    InvoiceModel.find().exec().then(invoicedata => {
        res.json(invoicedata);
    }).catch(err => {
        console.error(err);
        res.sendStatus(500);
    });
});

Router.get('/:id', (req, res) => {
    InvoiceModel.find({"_id":req.params.id}).exec().then(invoicedataspecific => {
        res.json(invoicedataspecific);
    }).catch(err => {
        console.error(err);
        res.sendStatus(500);
    });
});

Router.post('/', (req, res) => {
    //console.log(req);
    const invoice = new InvoiceModel(req.body);
    invoice.save().then(invoice => {
        res.json(invoice);
    }).catch(err => {
        console.error(err);
        res.sendStatus(500);
    });
});

Router.put('/:id', (req, res) => {
    const details = req.body;
    delete details._id;
    const invoiceId = req.params.id;
    InvoiceModel.update({_id:req.params.id}, {$set: details}).then(invoiceupdate => {
        console.log("invoice updateeeeeeeeeeeeeee");
        console.log(req.body);
        console.log(req.params.id);
        res.json(invoiceupdate);
    }).catch(err => {
        console.error(err);
        res.sendStatus(500);
    });
});

Router.delete('/:id', (req, res) => {
    const details = req.body;
    delete details._id;
    const _id = req.params.id;
    InvoiceModel.remove({_id:req.params.id}).then(invoicedelete => {
        res.sendStatus(200);
    }).catch(err => {
        console.error(err);
        res.sendStatus(500);
    });
});

module.exports = Router;
