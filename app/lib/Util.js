
(function()
{
    'use strict';

    var $path      = require('path');
    var $Validator = require('validator.js');
    var $Assert    = $Validator.Assert;
    var $validator = new $Validator.Validator();

    function Util()
    {

        /**
        * Verifica se a variavel existe
        *
        * @param $variavel
        * @return boolean
        */
        this.isset = function($variavel)
        {
            return (typeof $variavel !== undefined);
        };




        /**
        * Verifica se o obj informado é um array
        *
        * @param $array
        * @return boolean
        */
        this.isArray = function ($array)
        {
            return Object.prototype.toString.call($array) === '[object Array]';
        };




        /**
        * Verifica se o objeto informado é uma string
        *
        * @param $string
        * @return boolean
        */
        this.isString = function ($string)
        {
            return Object.prototype.toString.call($string) === '[object String]';
        };




        /**
        * Verifica se o objeto informado é um objeto
        *
        * @param $obj
        * @return boolean
        */
        this.isObject = function ($obj)
        {
            return Object.prototype.toString.call($obj) === '[object Object]';
        };




        /**
        * Verifica se o objeto informado esta vazio
        *
        * @param $obj
        * @return boolean
        */
        this.isEmptyObject = function ($obj)
        {
            for (var property in $obj){
                return false;
            }

          return true;
        };




        /**
        * Verifica se a variavel esta vazias
        *
        * @param $variavel
        * @return boolean
        */
        this.isEmpty = function ($variavel)
        {
            var $vazio = [null, false, 0, '0', '', ' '];
            
            for(var i = 0; i <= $vazio.length; i++){
                if($variavel === $vazio[i]){
                    return true;
                }
            }
            
            return false;
        };




        /**
        * Se nenhum parametro for informado retorna o diretorio raiz
        * Se o parametro endereço for informado retorna o diretorio solicitado ou arquivo
        *
        * @param endereco
        * @return String
        */
        this.dirRaiz = function(endereco)
        {
            if(!this.isset(endereco)){
                endereco = null;
            }

            var retorno = $validator.validate(
                { endereco : endereco },
                { endereco : [new $Assert().NotBlank(), new $Assert().NotNull()] }
            );

            if(retorno === true){
                return $path.normalize($path.resolve(__dirname, '../../') +'/'+ endereco);
            }

            //Diretorio raiz do projeto
            return $path.normalize($path.resolve(__dirname, '../../'));
        };


    };

    //Exporta a classe
    module.exports = Util;

})(this);
