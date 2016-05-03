var $Socket = require('./app/lib/Socket');
var $TK     = require('./app/modulo/tk102/Modulo');
var $Util   = require('./app/lib/Util');
var $moment = require('moment');
var $BancoDados = require('./app/lib/BancoDados');
var $Autenticar = require('./app/lib/Autenticar');
var $Redis      = require('./app/lib/Redis');


var $socket = new $Socket();


//Modulo TK102
var $tk = new $TK();

$socket.setHost('172.31.5.42');
//$socket.setHost('localhost');
$socket.setPorta(16001);
$socket.setModuloNome('TK102');
$socket.setModuloInstancia($tk);
$socket.iniciaServidor();
