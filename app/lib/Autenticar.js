/* 
    Documento  : Autenticar
    Criado     : 24/03/2016
    Modificado : 24/03/2016
    Autor      : 
    Descrição  :
        Arquivo responsavel por fazer a autenticação do dispositivo
*/


(function()
{
    
    var $BancoDados = require('./BancoDados');
    var $Redis      = require('./Redis');
    
    
    /**
     * Classe
     */
    function Autenticar()
    {       
        
        /**
        * @returns app/lib/BancoDados()
        */
       var getBancoDados = function()
       {
           return (new $BancoDados());
       };
       
       
       
       
        /*
         * @return app/lib/Redis()
         */
        var getRedis = function()
        {
            return (new $Redis());
        };
        
        
        
        
        /**
        * @param {Integer}  $imei
        * @param {Function} $retorno
        */
       this.login = function($imei, $retorno)
       {
           getBancoDados().login($imei, function($dados){
               $retorno($dados);
           });
       };
       
    };

    
    module.exports = Autenticar;
    
})(this);