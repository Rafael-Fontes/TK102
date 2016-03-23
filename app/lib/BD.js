(function()
{
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
        var senha   = '';
        var banco   = 'rastreamento3';
        
        
        
        
        var getUtil = function()
        {
            return (new $Util());
        };
        
        
        
        
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
        
    };
    
    module.exports = BD;
})(this);