/*
    Documento  : Princiapl.js
    Criado     : 22/03/2016
    Modificado : 23/03/2016
    Autor      : rafaelk-f@hotmail.com
    Descrição  :
        Trata os dados passados pelo GPS
*/


(function()
{
    'use strict';

    var $moment  = require("moment");
    var $Logger  = require('../../lib/Logger');
    var $logger  = new $Logger();

    var $Util    = require('../../lib/Util');
    var $util    = new $Util();

    var $Comando = require('./Comando');
    var $comando = new $Comando();


    /**
     * Classe Modulo
     */
    function Modulo()
    {

        /*
         * Recebe as mensagens do modulo rastreador
         */
        this.processarDados = function($cliente, $dados)
        {
            $dados = $dados.toString().trim();
            console.log($dados);

            var regexpNumeros = new RegExp("^[0-9]{10,}$");
            if($dados.indexOf("imei", 0) === -1 &&
                    regexpNumeros.test($dados.replace(";", "")) === false)
            {
                $cliente.end();
                return;
            }


            var $arrayDados = quebrarMensagem($dados);
            var $imei       = extrairImei($dados);
            var $chave      = '';
            

            if($arrayDados.length === 1)
            {
                $cliente.write(new Buffer($comando.on()));
                $logger.logger.info({
                    message  : 'Comando ' +$comando.on()+ ' enviado para o imei: ' + $imei,
                    dataHora : $moment().format("YYYY-MM-DD HH:mm:ss")
                });
                
                return;
            }

            if ($arrayDados && $arrayDados[2] === "A;")
            {
                $cliente.write(new Buffer($comando.load()));
                $logger.logger.info({
                    message  : 'Comando ' +$comando.load()+ ' enviado para o imei: ' + $imei,
                    dataHora : $moment().format("YYYY-MM-DD HH:mm:ss")
                });

                return;
            }

            if ($arrayDados && $arrayDados[4] && $arrayDados[4] === "F")
            {
                //var $objGps   = getDadosGps($dados);
            }

        };





        /**
         * Função extrai o IMEI da mesagem enviada pelo rastreador.
         * Mensagem esperada:
         *   imei:909710047765412,tracker,150713220341,,F,140339.000,A,1643.5578,S,04916.8659,W,0.00,0;
         *   909710047765412;
         *
         *   Retorna IMEI se o valor for encontrado
         *
         *   @param {String} $dados
         */
        var extrairImei = function($dados)
        {
            if($dados.indexOf('imei:', 0) !== -1)
            {
                var $imei = (/imei\:([0-9]*)/).exec($dados);
                if($imei[1])
                    return $imei[1];
            }
            else
            {
                var $possivelImei = parseInt($dados);
                if($util.isInt($possivelImei))
                    return $possivelImei;
            }
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
         * @param {String} $dados
         */
        var getPolaridade = function($dados)
        {
            return $dados === "S" || $dados === "W" ? -1 : 1;
        };





        /**
        * @param {String} $dados
        */
        var convertePonto = function($dados)
        {
           var $parteInteira = ~~(Math.round($dados)/100);
           var $parteDecimal = ($dados - ($parteInteira * 100)) / 60;
           return ($parteInteira + $parteDecimal).toFixed(6);
        };





        /**
        * imei:000000000000000,tracker,150713220401,,F,140359.000,A,1643.5578,S,04916.8659,W,0.00,0;
        *
        * 00 => imei:000000000000000          [IMEI do GPS]
        * 01 => tracker                       [Mensagem: help me / low battery / stockade / dt /move / speed / tracker]
        * 02 => 150713220401                  [acquisition time: YYMMDDhhmm +8GMT cn]
        * 03 =>                               [Telefone do administrador]
        * 04 => F                             [Indicador do sinal do GPS Data: F - full / L - low]
        * 05 => 140359.000                    [Time (HHMMSS.SSS)]
        * 06 => A                             [A = available]
        * 07 => 1643.5578                     [Latitude em graus decimal (DDMM.MMMM)]
        * 08 => S                             [Latitude hemisfério: N / S]
        * 09 => 04916.8659                    [Longitude em graus decimal (DDDMM.MMMM)]
        * 10 => W                             [Longitude hemisfério: E / O]
        * 11 => 0.00                          [Velocidade em milhas por hora Mph]
        * 12 => 0
        *
        * Função retorna um objeto contendo todas as propriedades do rastreador
        * @param {String} $dados
        */
        var getDadosGps = function($dados)
        {
            var $arrayDados = quebrarMensagem($dados);

            //Higienização dos dados
            $arrayDados[0]  = $util.higienizarNumeroInteiro($arrayDados[0].trim());
            $arrayDados[1]  = $util.higienizarLetras($arrayDados[1]);
            $arrayDados[2]  = $util.higienizarNumeroInteiro($arrayDados[2]);
            //$arrayDados[3]  = $arrayDados[3];
            $arrayDados[4]  = $util.higienizarLetras($arrayDados[4]);
            $arrayDados[5]  = $util.higienizarNumeroDecimal($arrayDados[5]);
            $arrayDados[6]  = $util.higienizarLetras($arrayDados[6]);
            $arrayDados[7]  = $util.higienizarNumeroDecimal($arrayDados[7]);
            $arrayDados[8]  = $util.higienizarLetras($arrayDados[8]);
            $arrayDados[9]  = $util.higienizarNumeroDecimal($arrayDados[9]);
            $arrayDados[10] = $util.higienizarLetras($arrayDados[10]);
            $arrayDados[11] = $util.higienizarNumeroDecimal($arrayDados[11]);


            //Montar obj que sera retornado
            var $objDados = {
                imei      : $arrayDados[0],
                msg       : $arrayDados[1],
                foneAdmin : $arrayDados[3]
            };

            return $objDados;
        };

    };

    module.exports = Modulo;

})(this);