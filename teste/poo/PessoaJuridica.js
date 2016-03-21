(function ()
{
    function PessoaJuridica()
    {
        var cnpj;

        this.setCnpj = function (argCnpj){
            cnpj = argCnpj;
        };

        this.getCnpj = function (){
            return cnpj;
        };
    };
    
    module.exports = PessoaJuridica;
    
})(this);