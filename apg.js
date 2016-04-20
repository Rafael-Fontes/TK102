//var $Redis = require('ioredis');


//var $redis = new $Redis({
//    port: 6379,
//    host: '127.0.0.1',
//    family: 4,
//    password: '',
//    db: 0
//});


//$redis.set('minhaChave:01', 'Ola, isso e um teste', 'EX', 60);
//$redis.hmset('minhaChave:01', {chave : 'valor'});
//
////$redis.set('apagar:01', 'bar');
//
//$redis.get('minhaChave:01', function (err, result)
//{
//  if(err){
//      console.log(err);
//      return;
//  }
//  console.log(result.chave);
//});


var $Redis = require('./app/lib/Redis');

var $objRedis = new $Redis();
var $chave = $objRedis.criarChave('868683020094227');

$objRedis.busca($chave, function($dados){
    console.log($dados);
});

//
//var $DB = require('./app/lib/BancoDados');
//
//var $obj = new $DB();
//$obj.login('868683020094227', function($dados){
//    console.log($dados);
//});