(function ()
{
    var Pessoa = require('./Pessoa');
    
    function PessoaFisica()
    {
        Pessoa.call(this);
        
        var cpf;

        this.setCpf =  function (argCpf){
            cpf = argCpf;
        };

        this.getCpf = function (){
            return cpf;
        };
    };
    
    module.exports = PessoaFisica;
    
})(this);