/**
 * Created by ashani on 6/27/2017.
 */
'use strict';

const express = require('express'),
    mongoose = require('mongoose');

const Schema = mongoose.Schema;

mongoose.set('debug', false);

const DrugOrderModel = mongoose.model('DrugOrder');
const Router = express.Router();

Router.get('/', (req, res) => {
    DrugOrderModel.find().exec().then(drugorderdata => {
        res.json(drugorderdata);
    }).catch(err => {
        console.error(err);
        res.sendStatus(500);
    });
});

Router.get('/:id', (req, res) => {
    DrugOrderModel.find({"_id":req.params.id}).exec().then(drugorderdataspecific => {
        res.json(drugorderdataspecific);
    }).catch(err => {
        console.error(err);
        res.sendStatus(500);
    });
});

Router.post('/', (req, res) => {
    //console.log(req);
    const drugorder = new DrugOrderModel(req.body);
    drugorder.save().then(drugorder => {
        res.json(drugorder);
    }).catch(err => {
        console.error(err);
        res.sendStatus(500);
    });
});

Router.put('/:id', (req, res) => {
    const details = req.body;
    delete details._id;
    const drugorderId = req.params.id;
    DrugOrderModel.update({_id:req.params.id}, {$set: details}).then(drugorderupdate => {
        console.log("drugorderupdate updateeeeeeeeeeeeeee");
        console.log(req.body);
        console.log(req.params.id);
        res.json(drugorderupdate);
    }).catch(err => {
        console.error(err);
        res.sendStatus(500);
    });
});

Router.delete('/:id', (req, res) => {
    const details = req.body;
    delete details._id;
    const _id = req.params.id;
    DrugOrderModel.remove({_id:req.params.id}).then(drugorderdelete => {
        res.sendStatus(200);
    }).catch(err => {
        console.error(err);
        res.sendStatus(500);
    });
});

module.exports = Router;
