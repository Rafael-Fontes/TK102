#!/usr/bin/env node

var app   = require('./app/App');
var debug = require('debug')('app:server');
var http  = require('http');


var port = 3000;
app.set('port', port);


var server = http.createServer(app);
var io = require("socket.io").listen(server);


server.listen(port);


io.on("connection", function(socket){
    console.log("Usuário Conectado");
});