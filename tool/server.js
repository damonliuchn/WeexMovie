var express = require('express');
var app = express();
var router = express.Router();
var fs = require("fs");
var path = require("path");

app.use('/dist',express.static('dist'));
app.use('/node_modules',express.static('node_modules'));
// app.use('/', router);
var port = 10004;
app.listen(port);
console.log('Magic happens on port ' + port);
