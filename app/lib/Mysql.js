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
            
            con.connect(function (erro)
            {
                if (erro) 
                {
                    $logger.logger.error({
                        message  : 'Erro ao conectar no banco: ' + erro.stack,
                        dataHora : $moment().format("YYYY-MM-DD HH:mm:ss")
                    });

                    return;
                }
                
                return con;
            });
        };
        
        
        
        
        /**
         * 
         * @param {Int} $imei
         */
        this.getLogin = function($imei)
        {
            if(!$util.isset($imei) || $util.isEmpty($imei)){ 
                return {
                    affectedRows : "0",
                    mensagem     : "imei não foi informado"
                };
            }
            
            $imei = parseInt($imei, 10);   
            
            conexao().query('SELECT id, imei FROM modulo WHERE imei = :imei');
        };

    };
    
    module.exports = Mysql;
    
})(this);