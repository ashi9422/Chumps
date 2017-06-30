'use strict';

const express = require('express'),
    mongoose = require('mongoose');

const Schema = mongoose.Schema;

mongoose.set('debug', false);

const PrescriptionModel = mongoose.model('Prescription');
const Router = express.Router();

Router.get('/', (req, res) => {
    PrescriptionModel.find().exec().then(prescriptiondata => {
        res.json(prescriptiondata);
    }).catch(err => {
        console.error(err);
        res.sendStatus(500);
    });
});

Router.get('/:id', (req, res) => {
    PrescriptionModel.find({"_id":req.params.id}).exec().then(pescriptiondataspecific => {
        res.json(prescriptiondataspecific);
    }).catch(err => {
        console.error(err);
        res.sendStatus(500);
    });
});

Router.post('/', (req, res) => {
    //console.log(req);
    const prescription = new PrescriptionModel(req.body);
    prescription.save().then(prescription => {
        res.json(prescription);
    }).catch(err => {
        console.error(err);
        res.sendStatus(500);
    });
});

Router.put('/:id', (req, res) => {
    const details = req.body;
    delete details._id;
    const prescriptionId = req.params.id;
    PrescriptionModel.update({_id:req.params.id}, {$set: details}).then(prescriptionupdate => {
        console.log("Prescription updateeeeeeeeeeeeeee");
        console.log(req.body);
        console.log(req.params.id);
        res.json(prescriptionupdate);
    }).catch(err => {
        console.error(err);
        res.sendStatus(500);
    });
});

Router.delete('/:id', (req, res) => {
    const details = req.body;
    delete details._id;
    const _id = req.params.id;
    PrescriptionModel.remove({_id:req.params.id}).then(prescriptiondelete => {
        res.sendStatus(200);
    }).catch(err => {
        console.error(err);
        res.sendStatus(500);
    });
});

module.exports = Router;
