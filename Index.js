var $Socket = require('./app/lib/Socket');
var $TK     = require('./app/modulo/tk102/Modulo');

var $socket = new $Socket();


//console.log(Object.prototype.toString.call(87897));

//Modulo TK102
var $tk = new $TK();

//$socket.setHost('172.31.15.149');
//$socket.setHost('localhost');
//$socket.setPorta(16000);
//$socket.setModuloNome('TK102');
//$socket.setModuloInstancia($tk);
//$socket.iniciaServidor();



var $Mysql = require('./app/lib/Mysql');
var $bd = new $Mysql();


var $retorno = $bd.getLogin('751374');
//console.log($retorno);