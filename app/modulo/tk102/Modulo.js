/* 
    Documento  : Princiapl.js
    Criado     : 22/03/2016
    Modificado : 22/03/2016
    Autor      : 
    Descrição  :
        Trata os dados passados pelo GPS
*/


(function()
{
    var $Logger = require('../../lib/Logger');
    var $logger = new $Logger();
    
    function Modulo()
    {
        
        this.processarDados = function(cliente, dados)
        {
            //dados = dados.toString().trim(); 
        };
    };
    
    module.exports = Modulo;
    
})(this);