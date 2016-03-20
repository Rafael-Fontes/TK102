var net    = require('net');
var logger = require('./Logger');
 var gerarLogger = logger.logger();

/*
 * @param modulo
 */
exports.Socket = function(modulo)
{
    var servidor = net.createServer();
    
    servidor.on('connection', function(cliente)
    {
        //Recebe mensagem do cliente
        cliente.on('data', function (mensagem)
        {
            console.log(mensagem);
        });
        
        

        //Informa que o cliente se desconectou
        cliente.on('end', function ()
        {
            console.log("Cliente se desconectou!");
        });
        
    });
    
    
    
    //Tratamento de erros
    servidor.on('error', function(erro)
    {
        console.log(erro);
        if (erro.code === 'EADDRINUSE') 
        {
            gerarLogger.warn({'message' : 'Endereço em uso: ' +erro.address +':'+ erro.port});
            servidor.close();
        }
    });
    
    
    return servidor;
};