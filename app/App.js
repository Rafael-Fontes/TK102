var teste = require('./lib/Socket');


teste.Socket().listen({port :3000, host : '127.0.0.1'}, function (){
    console.log('UUiiiiiiiii');
});