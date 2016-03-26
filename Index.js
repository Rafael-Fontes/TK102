var $Socket = require('./app/lib/Socket');
var $TK     = require('./app/modulo/tk102/Modulo');
var $Util   = require('./app/lib/Util');
var $moment = require('moment');
var $BD     = require('./app/lib/BD');
var $BancoDados = require('./app/lib/BancoDados');
var $Autenticar = require('./app/lib/Autenticar');


var $socket = new $Socket();


//console.log(Object.prototype.toString.call(87897));

//Modulo TK102
var $tk = new $TK();

//$socket.setHost('172.31.15.149');
$socket.setHost('localhost');
$socket.setPorta(16000);
$socket.setModuloNome('TK102');
$socket.setModuloInstancia($tk);
$socket.iniciaServidor();


var dados = '160326201309';

var ano = dados.substr(0,2);
var mes = dados.substr(2,2);
var dia = dados.substr(4,2);
var hora = dados.substr(6,2);
var minu = dados.substr(8,2);
var segu = dados.substr(10,2);

console.log(segu);


//var $bd = new $BancoDados();
//$bd.login(19524, function ($dados) {
//    console.log($dados);
//});

//$autenticar = new $Autenticar();
//$autenticar.login(19524, function($obj){
//    if($obj.length === 0){
//        return;
//    }
//    console.log($obj.id);
//});

//
//var $bd = new $BD();
//var obj = {
//    id_modulo: '17751',
//    datahora : '2016-03-25 17:14:00',
//    latitude : '0.0000000000000',
//    longitude: '00000000',
//    velocidade: '50',
//    datahora_gravacao: '2016-03-25 17:14:00',
//    panico  : '1'
//};
//
//$bd.salvar01(obj);

//var $Mysql = require('./app/lib/Mysql');
//var $bd = new $Mysql();
//
//
//$bd.teste(function($resposta){
//    console.log($resposta);
//});

//var $BD = new require('./app/lib/BD');
//var $bd = new $BD();
//
//$bd.login(19524, function ($dados){
//    console.log($dados);
//});


//var $Autenticar = require('./app/lib/BD');
//var $autenticar = new $Autenticar();
//
//$autenticar.login(19524, function($dados){
//    console.log($dados);
//});