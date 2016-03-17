var app   = require('./app/App');
var debug = require('debug')('app:server');
var http  = require('http');

var logger      = require('./app/lib/Logger');
var gerarLogger = logger.logger();


var porta = 3000;
app.set('porta', porta);


var server = http.createServer(app);


server.listen(porta, function ()
{
    gerarLogger.info({'message': 'Servidor iniciado na porta ' + porta});
});