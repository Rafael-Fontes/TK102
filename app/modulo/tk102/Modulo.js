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
        //##,imei:359586015829802,A;

        /*
         * Recebe as mensagens do modulo rastreador
         */
        this.processarDados = function($cliente, $dados)
        {
            $dados = $dados.toString().trim();

            var regexpNumeros = new RegExp("^[0-9]{10,}$");
            if($dados.indexOf("imei", 0) === -1 &&
                    regexpNumeros.test($dados.replace(";", "")) === false)
            {
                $cliente.end();
                return;
            }


        };


        /**
         * Função extrai o IMEI da mesagem enviada pelo rastreador.
         * Mensagem esperada:
         *   imei:909710047765412,tracker,150713220341,,F,140339.000,A,1643.5578,S,04916.8659,W,0.00,0;
         *   909710047765412;
         *
         *   Retorna IMEI se o valor for encontrado
         *   Retorna um IMEI inexistente caso o IMEI não for encontrado
         */
        var extrairImei = function($dados)
        {
            if($dados.indexOf('imei:', 0) !== -1)
            {
                var imei = (/imei\:([0-9]*)/).exec($dados);
                if(imei[1])
                    return imei[1];
            }
            else if(1===1)
            {
                return $dados;
            }

            return "111111111111111";
        };





        /*
         * Função responsavel por quebrar a mensagem enviada pelo rastreador
         * Exempo da mensagem esperada:
         * imei:909710047765412,tracker,150713220341,,F,140339.000,A,1643.5578,S,04916.8659,W,0.00,0;
         * 909710047765412
         *
         * @param  {String} dados
         * @return {Array}
         */
        var quebrarMensagem = function($dados)
        {
            if(typeof($dados) === 'string'){
                if($dados.length > 0){
                    return $dados.split(',');
                }
            }

            return [];
        };





        /**
         * LATITUDES negativas estão sempre se referindo a lugares localizados no Hemisfério Sul,
         * LATITUDES positivas, obviamente, referem-se a lugares posicionados no Hemisfério Norte,
         * LOGITUDES negativas fazem referência a pontos posicionados no Hemisfério Oeste ou Ocidental,
         * LOGITUDES positivas são relativas a pontos localizados no Hemisfério Leste ou Oriental.
         *
         * A funçao abaixo identifica se as cordernadas referem-se a SUL e OESTE e retorna -1 se verdadeiro
         * ou 1 se falso.
         *
         * No GPS S(South) => SUL e W(West) => OESTE
         *
         * @param {String} dados
         */
        var getPolaridade = function($dados)
        {
            return $dados === "S" || $dados === "W" ? -1 : 1;
        };





        /**
        * @param {String} $dados
        */
        var convertePonto = function($dados){
           var parteInteira = ~~(Math.round($dados)/100);
           var parteDecimal = ($dados - (parteInteira * 100)) / 60;
           return (parteInteira + parteDecimal).toFixed(6);
        };





        /**
         * @param {String} $dados
         */
        var getDadosGps = function($dados)
        {

        };


    };

    module.exports = Modulo;

})(this);