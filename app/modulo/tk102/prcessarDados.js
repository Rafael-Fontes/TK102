/* 
    Documento  : processarDados.js
    Criado     : 13/07/2015
    Modificado : 03/08/2015
    Autor      : 
    Descrição  :
        Trata os dados passados pelo GPS
*/


//Inclusão de arquivos necessarios
var moment        = require("moment");
var util          = require("../util.js");
var comando       = require("./comandos");

var logger        = require("../logger.js");
var geraLogger    = logger.logger();



/*
    Recebe as mensagens do cliente e decide o que fazer
    Mesagens esperadas:
      imei:909710047765412,tracker,150713220341,,F,140339.000,A,1643.5578,S,04916.8659,W,0.00,0;
      909710047765412;
 */

exports.processarDados = function (cliente, dados) 
{
    dados = dados.toString().trim(); 
    
    var regexpNumeros = new RegExp("^[0-9]{10,}$");
    if(dados.indexOf("imei", 0) === -1 &&
            regexpNumeros.test(dados.replace(";", "")) === false){
        cliente.end();
        return;
    }
    
    var arrayDados = quebrarMensagem(dados);
    var imei       = extrairImei(dados);
    var chave      = "usuario:" +imei+ ":dados";
    
    
} ;
