var net = require('net');

exports.Cliente02 = function(host, porta)
{    
    var cliente = new net.Socket();

    cliente.connect(porta, host, function(){
        console.log('Estou conectado');
    });
    
    cliente.on('data', function(data) {
        console.log(data.toString());
    });


    setInterval(function() {
        cliente.write("Olá servidor.");
      }, 5000
    );


    cliente.on('close', function(){
        console.log('Cliente se desconectou');
    });
};