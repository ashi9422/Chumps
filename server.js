'use strict';

const bodyParser = require('body-parser'),
    express = require('express'),
    mongoose = require('mongoose');
mongoose.Promise = global.Promise;

//import models and routes
require('./public/modules/supplier/supplier.model');
const supplierRouter=require('./public/modules/supplier/supplier.route');


const app = express();
app.use(bodyParser.json());


//app.use(express.static(__dirname + '/public'));
//app.use(express.static(__dirname + '/bower_components'));

mongoose.connect('mongodb://codechamps:codechamps123@ds129651.mlab.com:29651/codechamps', err => {
    if (err) {
        console.log(err);
        //process.exit(1);
    }
    else {
        console.log('connect to the database');
}
});
app.use('/newsupplier', supplierRouter);

app.use(express.static('public'));

app.get('/', (req, res, next) => {
    res.sendFile(__dirname + '/index.html');
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
