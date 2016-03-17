/*
 Documento  : ServidorTCP.js
 Criado     : 17/03/2016
 Modificado : 17/03/2016
 Autor      : rafaelk-f@hotmail.com
 
 Descrição  :
 
 */

var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function (req, res)
{
    console.log("Página index");
});

io.on('connection', function (socket)
{
    socket.on('chat message', function (msg)
    {
        io.emit('chat message', msg);
    });
});

http.listen(3000, function ()
{
    console.log('listening on *:3000');
});
