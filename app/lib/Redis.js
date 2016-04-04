/*
    Documento  : Redis.js
    Criado     : 24/03/2016
    Modificado : 24/03/2016
    Autor      :
    URL        : https://www.npmjs.com/package/ioredis
    Descrição  :
        Contem a conexÃ£o e as querys do Redis
*/

(function()
{

    var $Redis  = require('ioredis');
    var $Util   = require('./Util');
    var $Logger = require('./Logger');


    /**
     * Classe
     */
    function Redis()
    {

        /**
         * @return app/lib/Util
         */
        var getUtil = function()
        {
            return (new $Util());
        };




        /**
         * @return app/lib/Logger
         */
        var getLogger = function()
        {
            return (new $Logger());
        };




        /**
         * @return app/lib/Redis
         */
        var getConexao = function()
        {
            var redis = new $Redis({
                port    : 6379,
                host    : '127.0.0.1',
                family  : 4,
                password: '',
                db      : 0
            });

            return redis;
        };




        /**
         * Metodo usado na construção de chaves para os dados do Redis
         * 
         * @param   {Int}   $imei
         * @returns {String}
         */
        this.criarChave = function($imei)
        {
            return 'usuario:' +$imei+ ':obj';
        };




        /**
         * Metodo utilizado para pesquisa no formato hash
         * Nome das chaves deve seguir o padrãp: tipo-de-objeto:indentificador:nome-campo.
         *
         * @param {String}   $chave
         * @param {Function} $retorno
         * @return Object
         *
         * Exemplo
         * $chave   => usuario:0980997098:dados
         * $retorno =>
         * {
         *    'usuario:0980997098:id' : '25/10/1000',
         *    'usuario:0980997098:imei' : '0980997098'
         * }
         */
        this.busca = function($chave, $retorno)
        {
            if(!getUtil().isset($chave) || getUtil().isEmpty($chave)){
                return;
            }

            getConexao().hgetall($chave, function ($erro, $resultado)
            {
                if($erro){
                    getLogger().logger.error({message : $erro});
                    return;
                }

                $retorno($resultado);
            });
        };




        /**
         * Metodo responsavel por salvar informações no Redis usando o padrãp hash.
         * Nome das chaves deve seguir o padrãp: tipo-de-objeto:indentificador:nome-campo.
         *
         * @param {String} $chave
         * @param {Object} $obj
         * @return
         *
         * Exemplo
         * $chave   => usuario:0980997098:dados
         * $retorno =>
         * {
         *    'usuario:0980997098:id' : '25/10/1000',
         *    'usuario:0980997098:imei' : '0980997098'
         * }
        */
        this.salvar = function($chave, $obj)
        {
            if(!getUtil().isset($chave) || getUtil().isEmpty($obj)){
                return false;
            }

            if(!getUtil().isset($obj) || getUtil().isEmptyObject($obj)){
                return false;
            }

            getConexao().hmset($chave, $obj);
        };

    };

    module.exports = Redis;

})(this);