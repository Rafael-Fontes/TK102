var path      = require('path');

var Validator = require('validator.js');
var Assert    = Validator.Assert;
var validator = new Validator.Validator();





/**
 * Verifica se a variavel existe
 * 
 * @param variavel
 * @return boolean
 */
exports.isset = function (variavel)
{
   return (typeof variavel !== 'undefined');
};





/**
 * Se nenhum parametro for informado retorna o diretorio raiz
 * Se o primeiro parametro for informado retorna o diretorio solicitado
 * Se o sergundo paramentro for informado retorna um arquivo
 * 
 * @param endereco
 * @return String
 */
exports.dirRaiz = function(endereco)
{
    if(!this.isset(endereco)){
        endereco = null;
    }
    
    var retorno = validator.validate(
        { endereco : endereco }, 
        { endereco : [new Assert().NotBlank(), new Assert().NotNull()] }
    );
    
    if(retorno === true){
        return path.normalize(path.resolve(__dirname, '../../') +'/'+ endereco);
    }
    
    //Diretorio raiz do projeto
    return path.normalize(path.resolve(__dirname, '../../'));
};