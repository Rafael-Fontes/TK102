/*
 Documento  : ServidorTCP.js
 Criado     : 17/03/2016
 Modificado : 17/03/2016
 Autor      : rafaelk-f@hotmail.com
 
 Descrição  :
 
 */

var app = require('http').createServer();
var io = require('socket.io')(app);

exports.ServidorTCP = function ()
{
    io.on('connection', function (socket)
    {
        socket.emit('news', {hello: 'world'});
        socket.on('my other event', function (data)
        {
            console.log(data);
        });
    });
    
    return io;
};