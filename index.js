var servidor = require('./lib/servidor.js');

var porta = "15000";

servidor.servidorTCP().listen(porta, function(){
    console.log('Servidor ouvindo a porta ' + porta);
});