var express    = require('express');
var logger     = require('morgan');
var bodyParser = require('body-parser');


var app = express();


app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


module.exports = app;