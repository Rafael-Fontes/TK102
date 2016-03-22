var $Socket = require('./app/lib/Socket');
var $TK     = require('./app/modulo/tk102/Modulo');

var $socket = new $Socket();

//Modulo TK102
var $tk = new $TK();

$socket.setHost('172.31.15.149');
//$socket.setHost('localhost');
$socket.setPorta(16000);
$socket.setModuloNome('TK102');
$socket.setModuloInstancia($tk);
$socket.iniciaServidor();