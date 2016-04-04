(function ()
{
    'use strict';

    var $Sequelize = require('sequelize');
    var $moment    = require('moment');
    var $Logger    = require('./Logger');
    var $Util      = require('./Util');



    /**
     * Classe
     */
    function BancoDados()
    {

        var $conexao = null;
        var $config = {
            'host'    : 'localhost',
            'porta'   : '3306',
            'usuario' : 'root',
            'senha'   : 'root',
            'banco'   : 'root'
        };




        /**
         * @return app/lib/Util()
         */
        var getUtil = function()
        {
            return (new $Util());
        };




        /**
         * @return app/lib/Logger()
         */
        var getLogger = function()
        {
            return (new $Logger());
        };




        /*
         * Retorna conexão com o banco de dados
         */
        var getConexao = function()
        {
            if(!$conexao)
            {
                $conexao = new $Sequelize
                (
                    $config.banco,
                    $config.usuario,
                    $config.senha,
                    {
                        'host'    : $config.host,
                        'dialect' : 'mariadb',
                        pool      : 
                        {
                            max : 5,
                            min : 0,
                            idle: 10000
                        },
                        define    : 
                        {
                            timestamps      : false,
                            freezeTableName : true,
                            underscored     : true
                        }
                    }
                );
            }

            return $conexao;
        };




        /**
         * Representação da tabela posicao
         */
        var tabelaPosicao = function()
        {
            var $bd      = getConexao();
            var $posicao = $bd.define('posicao',
                {
                    id: 
                    {
                        type          : $Sequelize.INTEGER,
                        primaryKey    : true,
                        autoIncrement : true,
                        unique        : true,
                        allowNull     : false
                    },
                    id_modulo: 
                    {
                        type          : $Sequelize.INTEGER,
                        allowNull     : false
                    },
                    datahora: 
                    {
                        type          : $Sequelize.STRING,
                        allowNull     : false
                    },
                    latitude: 
                    {
                        type          : $Sequelize.DECIMAL(16, 13),
                        allowNull     : false
                    },
                    longitude:
                    {
                        type          : $Sequelize.DECIMAL(16, 13),
                        allowNull     : false
                    },
                    velocidade:
                    {
                        type          : $Sequelize.INTEGER,
                        allowNull     : false
                    },
                    datahora_gravacao:
                    {
                        type          : $Sequelize.STRING,
                        allowNull     : false
                    },
                    panico:
                    {
                        type          : $Sequelize.INTEGER,
                        allowNull     : false
                    },
                    ignicao:
                    {
                        type          : $Sequelize.INTEGER,
                        allowNull     : false
                    },
                    entrada1:
                    {
                        type          : $Sequelize.INTEGER,
                        allowNull     : false
                    }
                }
            );

            return $posicao;
        };




        /**
         * Representação da tabela modulo
         */
        var tabelaModulo = function()
        {
            var $bd     = getConexao();
            var $modulo = $bd.define('modulo',
                {
                    id: {
                        type          : $Sequelize.INTEGER,
                        primaryKey    : true,
                        autoIncrement : true,
                        unique        : true,
                        allowNull     : false
                    },
                    imei: {
                        type          : $Sequelize.INTEGER,
                        allowNull     : false
                    }
                }
            );

            return $modulo;
        };




        /**
         * Verifica se o modulo esta cadastrado.
         *
         * @param {Int}      $imei
         * @param {Function} $retorno
         * @return Object
         */
        this.login = function($imei, $retorno)
        {
            tabelaModulo().findOne ({
                where: {'imei' : $imei}
            })
            .then(function($dados) {
               if($dados !== null){
                   $retorno($dados.dataValues);
               } else{
                   $retorno({});
               }                
            })
            .catch(function($erro) {
                getLogger().logger.error ({
                    message  : $erro,
                    dataHora : $moment().format("YYYY-MM-DD HH:mm:ss")
                });
            });
        };
        
        
        
        
        /**
         * Metodo adiciona um novo registro ao banco de dados
         * @param {Object} $obj
         */
        this.salvar = function($obj)
        {
            tabelaPosicao().create($obj);
        };
         
    };

    module.exports = BancoDados;

})(this);