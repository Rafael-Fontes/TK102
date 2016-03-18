var tk102 = require('./modulo/tk102/ServidorTCP');
var logger = require('./lib/Logger');
var xxx = require('./lib/Constante');

var Validator = require('validator.js');
var Assert = Validator.Assert;

var xxx = Validator.Validator().validate( 'foo', [
  new Assert().Length( { min: 4, max: 100 } ),
  new Assert().IsString()
] );

console.log(xxx); 
 
//var gerarLogger = logger.logger();


tk102.ServidorTCP().listen(3000, function() {
   // gerarLogger.info({chave : 'valor'});
    console.log('Servidor ouvindo a porta 3000');
    
   
});