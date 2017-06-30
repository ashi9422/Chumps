'use strict';

const bodyParser = require('body-parser'),
    express = require('express'),
    mongoose = require('mongoose');
mongoose.Promise = global.Promise;

//import models and routes
require('./public/modules/supplier/supplier.model');
const supplierRouter=require('./public/modules/supplier/supplier.route');

require('./public/modules/stock/drugorder.model.js');
const drugOrderRouter=require('./public/modules/stock/drugorder.route.js');

require('./public/modules/drug/drug.model');
const drugRouter=require('./public/modules/drug/drug.route');

// require('./public/modules/ViewDispense/pres.model');
// const presRouter=require('./public/modules/ViewDispense/pres.route');

require('./public/modules/prescription/prescription.model');
const prescreptionRouter=require('./public/modules/prescription/prescription.route');


const app = express();
app.use(bodyParser.json());


//app.use(express.static(__dirname + '/public'));
//app.use(express.static(__dirname + '/bower_components'));

// mongoose.connect('mongodb://codechamps:codechamps123@ds129651.mlab.com:29651/codechamps', err => {
//     if (err) {
//         console.log(err);
//         //process.exit(1);
//     }
//     else {
//         console.log('connect to the database');
// }
// });

////////////////////////////////////////////////////////////////////////////////
//meka delete krnna epoo. meka mata test krnna daagatte - ashani
mongoose.connect('mongodb://localhost:27017/chumps', err => {
    if (err) {
        console.log(err);
        process.exit(1);
    }
    else
    {
        console.log("connected");
    }
});
///////////////////////////////////////////////////////////////////////////////////

app.use('/newsup', supplierRouter);
app.use('/newdrugorder',drugOrderRouter);
app.use('/newprescription',prescreptionRouter);
app.use('/newdrug',drugRouter);



app.use(express.static('public'));

app.get('/', (req, res, next) => {
    res.sendFile(__dirname + '/index.html');
});
app.get('/login', (req, res, next) => {
    res.sendFile(__dirname + '/login.html');
});
//
//
// app.get('/', (req, res, next) => {
//     res.sendFile(__dirname + '/public/index.html');
// });


app.listen(3000, function (err) {
    if(err){
        console.log(err);
    }else {
        console.log("server listen on port 3000")
    }
});
