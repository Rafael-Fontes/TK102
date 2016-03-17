var app   = require('./app/App');
var debug = require('debug')('app:server');
var http  = require('http');

//var xxx = require('./app/lib/ServidorTCP');
//xxx.ServidorTCP();


var logger      = require('./app/lib/Logger');
var gerarLogger = logger.logger();


var porta = 3000;
app.set('porta', porta);




var server = http.createServer(app);
var io     = require('socket.io')(server);

io.on('connection', function (socket) {
  socket.emit('news', { hello: 'world' });
  socket.on('my other event', function (data) {
    console.log(data);
  });
});

server.listen(3000, function ()
{
    console.log('Servidor iniciado na porta 3000');
    gerarLogger.info({'message': 'Servidor iniciado na porta ' + porta});
});

