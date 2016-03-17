/*
    Documento  : Logger.js
    Criado     : 29/07/2015
    Modificado : 17/03/2016
    Autor      : rafaelk-f@hotmail.com

    Descrição  :
        Configurações do modolulo "winston" responsavel por gravar os loggers
        A documentação do modulo pode ser encontrada em: https://github.com/winstonjs/winston
*/


var winston = require('winston');

exports.logger = function ()
{
    var logger = new (winston.Logger)
    ({
        transports:
        [
            //new (winston.transports.Console)(),

            new (winston.transports.File)
            ({
                name    : 'info-file',
                filename: './app/data/logger/loggers-info.log',
                level   : 'info',
                json    : true,
                maxsize : 10485760, //10MB
                maxFiles: 1
            }),

            new (winston.transports.File)
            ({
                name    : 'warn-file',
                filename: './app/data/logger/loggers-warn.log',
                level   : 'warn',
                json    : true,
                maxsize : 10485760, //10MB
                maxFiles: 1
            }),

            new (winston.transports.File)
            ({
                name    : 'error-file',
                filename: './app/data/logger/loggers-error.log',
                level   : 'error',
                json    : true,
                maxsize : 10485760, //10MB
                maxFiles: 1
            })
        ],
        exceptionHandlers:
        [
            new winston.transports.File
            ({
                name    : ' exception-file',
                filename: './data/logger/exceptions.log',
                exitOnError: false ,
                handleExceptions: true,
                humanReadableUnhandledException: true
            })
        ]
    });

    return logger;
};