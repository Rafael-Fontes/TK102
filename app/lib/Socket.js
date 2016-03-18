var net    = require('net');
var logger = require('./Logger');
 var gerarLogger = logger.logger();

/*
 * 
 */
exports.Socket = function()
{
    var servidor = net.createServer();
    
    servidor.on('connection', function(cliente)
    {
        console.log('Novo cliente conectado');
        
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
            console.log('Endereço em uso, aguardando para tentar novamente...');
            gerarLogger.warn({
                'message' : 'Endereço em uso: ' +erro.address +':'+ erro.port
            });
           // servidor.close();
        }
    });
    
    
    return servidor;
};