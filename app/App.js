var tk102 = require('./modulo/tk102/Servidor');


tk102.Servidor().listen({port :16000, host : '54.207.102.30'}, function (){
    console.log('UUiiiiiiiii');
    //gerarLogger.warn({});
});
