var $Socket = require('./app/lib/Socket');
var $TK     = require('./app/modulo/tk102/Modulo');
var $Util   = require('./app/lib/Util');
var $moment = require('moment');
var $BancoDados = require('./app/lib/BancoDados');
var $Autenticar = require('./app/lib/Autenticar');
var $Redis      = require('./app/lib/Redis');


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


//var $redis = new $Redis();
//
//console.log($redis.criarChave('1111'));
//
//
//$redis.salvar('usuario:0980997098:imei', {obj: 'Meu obj'});
//
//$redis.busca('usuario:0980997098:imei', function($dados){
//    console.log($dados);
//});


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