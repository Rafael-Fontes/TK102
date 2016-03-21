(function ()
{
    'use strict';
  
    function Pessoa()
    {
        var nome;

        this.setNome = function (argNome){
            nome = argNome;
        };

        this.getNome = function (){
            return nome;
        };
    }; 
    
    module.exports = Pessoa;
    
})(this);