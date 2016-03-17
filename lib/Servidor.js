var app     = require('express')();
var http    = require('http').Server(app);
var io      = require('socket.io')(http);
var winston = require('winston');


var logger = new (winston.Logger)({
    transports: [
      new (winston.transports.Console)(),
      new (winston.transports.File)({ filename: 'somefile.log' })
    ]
});
  

http.listen(3000, function ()
{
    logger.log('info', 'Servidor iniciado na porta 3000');
});
