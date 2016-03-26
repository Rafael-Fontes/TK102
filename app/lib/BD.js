(function()
{
    'use strict';


    var $Sequelize = require('sequelize');
    var $Util      = require('./Util');


    /**
     * Classe BD
     */
    function BD()
    {

        var host    = '127.0.0.1';
        var porta   = '3306';
        var usuario = 'root';
        var senha   = 'root';
        var banco   = 'rastreamento3';



        /**
         * @return app/lib/Util()
         */
        var getUtil = function()
        {
            return (new $Util());
        };




        /**
         * @return app/lib/BD()
         */
        var bd = function()
        {
            var conexao =  new $Sequelize(banco, usuario, senha, {
                host    : host,
                port    : porta,
                dialect : 'mysql'
            });

            return conexao;
        };




        /**
         * Verifica se o modulo esta cadastrado.
         *
         * @param {Int}      $imei
         * @param {Function} $retorno
         * @return Array
         */
        this.login = function($imei, $retorno)
        {
            if(!getUtil().isset($imei) || getUtil().isEmpty($imei)){
                return;
            }

            $imei = parseInt($imei, 10);

            bd().query(
                'SELECT id, imei FROM modulo WHERE imei = :imei',
                {
                    replacements: {imei: $imei},
                    type        : bd().QueryTypes.SELECT
                }
            )
            .then(function($dados) {
               $retorno($dados);
            });
        };




        /**
         * Salvar dados no banco
         *
         * @param {object] $obj
         * @return
         */
        this.salvar = function ($obj)
        {
            if(!getUtil().isset($obj) || getUtil().isEmptyObject($obj)){
                return;
            }

            var $sql = 'INSERT INTO posicao \n\
                            (id_modulo, datahora, latitude, longitude, velocidade, datahora_gravacao, panico) \n\
                        VALUES \n\
                            (:id_modulo, :datahora, :latitude, :longitude, :velocidade, :datahora_gravacao, :panico) ';

            bd().query(
                    $sql,
                    {
                        replacements: $obj,
                        type        : bd().QueryTypes.INSERT
                    }
            )
            .then(function($resultado) 
            {
               console.log($resultado);
            });
        };
        
        
        
        
        this.salvar01 = function ($obj)
        {
            if(!getUtil().isset($obj) || getUtil().isEmptyObject($obj)){
                return;
            }

            var $sql = 'INSERT INTO posicao \n\
                            (id_modulo, datahora, latitude, longitude, velocidade, datahora_gravacao, panico) \n\
                        VALUES \n\
                            (:id_modulo, :datahora, :latitude, :longitude, :velocidade, :datahora_gravacao, :panico) ';

            bd().execute(
                    $sql,
                    $obj
            )
            .then(function($resultado) 
            {
               console.log($resultado);
            });
        };
        
        
    };

    module.exports = BD;
})(this);