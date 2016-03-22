/*
    Documento  : Comandos.js
    Criado     : 22/03/2016
    Modificado : 22/03/2016
    Autor      :
    Descrição  :
        Contem os comandos para comunicação com o rastreador
*/


(function()
{
    /**
     *
     * Classe
     */
    function Comandos()
    {

        /**
         * Comando deve ser enviado quando o rastreador solicitar autenticação.
         * A autenticação é solicitada atravez do comando ##,imei:359586015829802,A;
         *
         * @return {String} LOAD
         */
        this.load = function()
        {
            return 'LOAD';
        };





        /**
         * Comando deve ser enviado quando o rastreador enviar somente o IMEI.
         * Exemplo: 359586015829802
         *
         * @returns {String} ON
         */
        this.on = function()
        {
            return 'ON';
        };
    };

})(this);