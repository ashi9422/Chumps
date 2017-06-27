/**
 * Created by ashani on 5/6/2017.
 */
'use strict';

const express = require('express'),
    mongoose = require('mongoose');

const Schema = mongoose.Schema;

mongoose.set('debug', false);

const SupplierModel = mongoose.model('Supplier');
const Router = express.Router();

Router.get('/', (req, res) => {
    SupplierModel.find().exec().then(supplierdata => {
        res.json(supplierdata);
    }).catch(err => {
        console.error(err);
        res.sendStatus(500);
    });
});

Router.get('/:id', (req, res) => {
    SupplierModel.find({"_id":req.params.id}).exec().then(supplierdataspecific => {
        res.json(supplierdataspecific);
    }).catch(err => {
        console.error(err);
        res.sendStatus(500);
    });
});

Router.post('/', (req, res) => {
    //console.log(req);
    const supplier = new SupplierModel(req.body);
    supplier.save().then(supplier => {
        res.json(supplier);
    }).catch(err => {
        console.error(err);
        res.sendStatus(500);
    });
});

Router.put('/:id', (req, res) => {
    const details = req.body;
    delete details._id;
    const supplierId = req.params.id;
    SupplierModel.update({_id:req.params.id}, {$set: details}).then(supplierupdate => {
        console.log("sulier updateeeeeeeeeeeeeee");
        console.log(req.body);
        console.log(req.params.id);
        res.json(supplierupdate);
    }).catch(err => {
        console.error(err);
        res.sendStatus(500);
    });
});

Router.delete('/:id', (req, res) => {
    const details = req.body;
    delete details._id;
    const _id = req.params.id;
    SupplierModel.remove({_id:req.params.id}).then(supplierdelete => {
        res.sendStatus(200);
    }).catch(err => {
        console.error(err);
        res.sendStatus(500);
    });
});

module.exports = Router;
