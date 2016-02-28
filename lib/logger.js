/* 
    Documento  : configuracaoLog.js
    Criado     : 29/07/2015
    Modificado : 29/07/2015
    Autor      : 
    Descrição  :
        Configurações do modolulo "winston" responsavel por gerar e gravar os loggers
        A documentação do modulo pode ser encontrada em: https://github.com/winstonjs/winston
*/


var winston = require('winston');

exports.logger = function () {
    
    var logger = new (winston.Logger)({
        transports: [
            new (winston.transports.Console)(),
            
            new (winston.transports.File)({
                name    : 'info-file',
                filename: './data/logger/loggers-info.log',
                level   : 'info'
            }),
            
            new (winston.transports.File)({
                name    : 'warn-file',
                filename: './data/logger/loggers-warn.log',
                level   : 'warn'
            }),
            
            new (winston.transports.File)({
                name    : 'error-file',
                filename: './data/logger/loggers-error.log',
                level   : 'error'
            })
        ],
        exceptionHandlers: [
            new winston.transports.File({ filename: './data/logger/exceptions.log' })
        ]
    });
    
    return logger; 
};