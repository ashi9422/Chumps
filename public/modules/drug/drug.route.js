/**
 * Created by ashani on 6/27/2017.
 */
'use strict';

const express = require('express'),
    mongoose = require('mongoose');

const Schema = mongoose.Schema;

mongoose.set('debug', false);

const DrugModel = mongoose.model('Drug');
const Router = express.Router();

Router.get('/', (req, res) => {
    DrugModel.find().exec().then(drugdata => {
        res.json(drugdata);
    }).catch(err => {
        console.error(err);
        res.sendStatus(500);
    });
});

Router.get('/:id', (req, res) => {
    DrugModel.find({"_id":req.params.id}).exec().then(drugdataspecific => {
        res.json(drugdataspecific);
    }).catch(err => {
        console.error(err);
        res.sendStatus(500);
    });
});

Router.post('/', (req, res) => {
    //console.log(req);
    const drug = new DrugModel(req.body);
    drug.save().then(drug => {
        res.json(drug);
    }).catch(err => {
        console.error(err);
        res.sendStatus(500);
    });
});

Router.put('/:id', (req, res) => {
    const details = req.body;
    delete details._id;
    const drugId = req.params.id;
    DrugModel.update({_id:req.params.id}, {$set: details}).then(drugupdate => {
        console.log("drugupdate updateeeeeeeeeeeeeee");
        console.log(req.body);
        console.log(req.params.id);
        res.json(drugupdate);
    }).catch(err => {
        console.error(err);
        res.sendStatus(500);
    });
});

Router.delete('/:id', (req, res) => {
    const details = req.body;
    delete details._id;
    const _id = req.params.id;
    DrugModel.remove({_id:req.params.id}).then(drugdelete => {
        res.sendStatus(200);
    }).catch(err => {
        console.error(err);
        res.sendStatus(500);
    });
});

module.exports = Router;

