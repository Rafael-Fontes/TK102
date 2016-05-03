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
    var $Util       = require('./Util');


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




        /*
         * @return app/lib/Util()
         */
        var getUtil = function()
        {
            return (new $Util());
        };




        /**
        * @param {Integer}  $imei
        * @param {Function} $retorno
        */
       this.login = function($imei, $retorno)
       {
            if(!getUtil().isset($imei) || getUtil().isEmpty($imei)){
               return;
            }

            var $chave = getRedis().criarChave($imei);

            getRedis().busca($chave, function ($dados)
            {
                if(getUtil().isEmptyObject($dados))
                {
                    getBancoDados().login($imei, function($dados)
                    {
                        var $obj = {
                            id      : $dados.id,
                            imei    : $dados.imei,
                            ignicao : 0
                        };

                        getRedis().salvar($chave, $obj);
                        $retorno($obj);
                        return;
                    });
                }

                console.log('Classe autenticar');
                console.log($dados);
                $retorno($dados);
            });
       };


    };

    module.exports = Autenticar;

})(this);