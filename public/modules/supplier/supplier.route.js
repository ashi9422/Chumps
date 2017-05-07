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
    SupplierModel.find().exec().then(suppliers => {
        res.json(suppliers);
    }).catch(err => {
        console.error(err);
        res.sendStatus(500);
    });
});

Router.get('/:id', (req, res) => {
    SupplierModel.findById(req.params.id).exec().then(supplier => {
        res.json(supplier || {});
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
    const supplier = req.body;
    delete supplier._id;
    const supplierId = req.params.id;
    DriverModel.findByIdAndUpdate(supplierId, {$set: supplier}).then(supplierDb => {
        res.json(supplier);
    }).catch(err => {
        console.error(err);
        res.sendStatus(500);
    });
});

Router.delete('/:id', (req, res) => {
    SupplierModel.findByIdAndRemove(req.params.id).then((supplier) => {
        return SupplierModel.remove({_id: {$in: supplierId}});
    }).then(() => {
        res.sendStatus(200);
    }).catch(err => {
        console.error(err);
        res.sendStatus(500);
    });
});

module.exports = Router;
