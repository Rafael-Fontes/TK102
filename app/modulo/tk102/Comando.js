/*
    Documento  : Comando.js
    Criado     : 22/03/2016
    Modificado : 22/03/2016
    Autor      : rafaelk-f@hotmail.com
    Descrição  :
        Contem os comandos para comunicação com o rastreador
*/


(function()
{
    /**
     *
     * Classe
     */
    function Comando()
    {

        /**
         * Comando deve ser enviado quando o rastreador solicitar autenticação.
         * A autenticação é solicitada atravez do comando ##,imei:359586015829802,A;
         *
         * @return String
         */
        this.load = function()
        {
            return 'LOAD';
        };





        /**
         * Comando deve ser enviado quando o rastreador enviar somente o IMEI.
         * Exemplo: 359586015829802
         *
         * @returns String
         */
        this.on = function()
        {
            return 'ON';
        };





        /**
         * Comando pemite especificar de quanto em quanto tempo se deseja obter uma resposta do dispositivo GPS.
         * Exemplos:
         *  **,imei:359586018966098,C,10s   => Dispositivo envia uma resposta a cada 10 segudos
         *  **,imei:359586018966098,C,1m    => Dispositivo envia uma resposta a cada 1 minuto
         *  **,imei:359586018966098,C,1h    => Dispositivo envia uma resposta a cada 1 hora
         *  **,imei:359586018966098,C,24h   => Dispositivo envia uma resposta a cada 24 horas
         *
         * @param   {Int}    $imei
         * @param   {String} $tempo
         * @returns String
         */
        this.posicaoMultipla = function($imei, $tempo)
        {
            return "**,imei:" +$imei+ ",C," +$tempo;
        };





        /**
         * Comando força o envio de posições armazenadas no micro SD do rastreador
         * @param   {Int}    $imei
         * @returns String
         */
        this.dataLoad = function($imei)
        {
            return "**,imei:868683020094227,116,20160429";
        };
        
        
        
        
        
        /**
         * Comando resposavel por cacelar o alerta de panico "help me"
         * @param   {Int}    $imei
         * @returns String
         */
//        this.cancelarAlarmeSOS = function($imei)
//        {
//            return "nosos";
//        };
    };

    module.exports = Comando;

})(this);