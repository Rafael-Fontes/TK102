(function()
{
    var $mysql  = require('mysql');
    var $moment = require('moment');

    var $Util   = require('./Util');
    var $util   = new $Util();

    var $Logger = require('./Logger');
    var $logger = new $Logger();


    /**
     * Classe BD
     */
    function Mysql()
    {

        var conexao = function()
        {
            var con = $mysql.createConnection({
                host     : 'localhost',
                user     : 'root',
                password : '',
                database : 'rastreamento3'
            });

            return con.connect();
            
//            con.connect(function (erro)
//            {
//                if (erro)
//                {
//                    $logger.logger.error({
//                        message  : 'Erro ao conectar no banco: ' + erro.stack,
//                        dataHora : $moment().format("YYYY-MM-DD HH:mm:ss")
//                    });
//
//                    return;
//                }
//
//                return con;
//            });
        };


        this.teste = function(retorno)
        {
            
            conexao().query('SELECT id, imei FROM modulo WHERE imei = ? ', '751374', function(erro, dados) {
                retorno(dados);
            });
        };




        /**
         *
         * @param {Int}      $imei
         * @param {Function} $retorno
         */
        this.getLogin = function($imei, $retorno)
        {
            if(!$util.isset($imei) || $util.isEmpty($imei))
            {
                return {
                    affectedRows : "0",
                    mensagem     : "imei não foi informado"
                };
            }

            $imei    = parseInt($imei, 10);
            var $sql = 'SELECT id, imei FROM modulo WHERE imei = ?';

            conexao().query($sql, $imei, function($erro, $dados)
            {
                conexao.release();
                if($erro)
                {
                    $logger.logger.error({
                        message  : 'Erro ao execultar query de login: ' + $erro,
                        dataHora : $moment().format("YYYY-MM-DD HH:mm:ss")
                    });

                    return;
                }

                return $dados;
            });
        };

    };

    module.exports = Mysql;

})(this);