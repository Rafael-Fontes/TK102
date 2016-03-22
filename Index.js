var Socket = require('./app/lib/Socket');

var socket = new Socket();

socket.setHost('localhost');
socket.setPorta(16000);
socket.setModuloNome('TK102');
socket.iniciaServidor();
