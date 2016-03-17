/* 
    Documento  : comando.js
    Criado     : 06/08/2015
    Modificado : 06/08/2015
    Autor      : 
    Descrição  :
        Contem os comandos para comunicação com o dispositivo GPS
*/

/*
  Comando deve ser enviado quando o dispositivo GPS solicitar autenticação.
  A autenticação é solicitada atravez do comando ##,imei:359586015829802,A;
 */
exports.load = function (){
    return "LOAD";
}



/*
  Comando deve ser enviado quando o dispositivo GPS enviar somente o IMEI.
  Exemplo: 359586015829802
 */
exports.on = function(){
    return "ON";
}



/*
   Comando pemite especificar de quanto em quanto tempo se deseja obter uma resposta do dispositivo GPS.
   Exemplos: 
    **,imei:359586018966098,C,10s   => Dispositivo envia uma resposta a cada 10 segudos
    **,imei:359586018966098,C,1m    => Dispositivo envia uma resposta a cada 1 minuto
    **,imei:359586018966098,C,1h    => Dispositivo envia uma resposta a cada 1 hora
    **,imei:359586018966098,C,24h   => Dispositivo envia uma resposta a cada 24 horas
    
 */
exports.posicaoMultipla  = function(imei, tempo){
    return "**,imei:" +imei+ ",C," +tempo;
};



/*
 * Comando faz com que o dispositivo GPS envie uma unica posição
 */
exports.posicaoUnica = function(imei){
    return "**,imei:" +imei+ ",B";
};



/*
    Quando o dispositivo fica imovel em um lugar, e o alarme de movimento for acionado
    
 */
exports.alarmeMovimento = function(imei){
    return "**,imei:" +imei+ ",G";    
};



/*
 
 */
exports.alarmeVelocidade = function(imei, velocidade){
    
}
