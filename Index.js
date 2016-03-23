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



//var $Mysql = require('./app/lib/Mysql');
//var $bd = new $Mysql();
//
//
//$bd.teste(function($resposta){
//    console.log($resposta);
//});

var $BD = new require('./app/lib/BD');
var $bd = new $BD();

$bd.login(751374, function ($dados){
    console.log($dados);
});
