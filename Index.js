//Validator = require( 'validator.js' );
//
//var Assert    = Validator.Assert,
//    validator = new Validator.Validator();
//    
//    
//var object = {
//    name: 'john doe',
//    email: 'wrong@email',
//    firstname: null,
//    phone: null
//},
//          
//  constraint = {
//    name:      [ new Assert().NotBlank(), new Assert().Length( { min: 4, max: 25 } ) ],
//    email:     new Assert().Email(),
//    firstname: new Assert().NotBlank(),
//    phone:     new Assert().NotBlank()
//};
//
//
//var length = new Assert().Length( { min: 10 } );
//var notBlank = new Assert().NotBlank();
//
////var retorno = validator.validate(object, constraint);
//var retorno =  notBlank.check(null);
//
//console.log(retorno.value);


var teste = require('./app/lib/Util');

var retorno = teste.dirRaiz('app');
console.log(retorno);