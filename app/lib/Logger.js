/*
    Documento  : Logger.js
    Criado     : 29/07/2015
    Modificado : 22/03/2016
    Autor      : rafaelk-f@hotmail.com
    URL        : https://github.com/winstonjs/winston
    Descrição  :
        Configurações do modolulo "winston" responsavel por gravar os loggers
*/

(function()
{
    var $Winston = require('winston');
    var $Util     = require('./Util');

    function Logger()
    {
        var $util = new $Util();
        
        this.logger = new ($Winston.Logger)
        ({
            transports:
            [
                //new (winston.transports.Console)(),

                new ($Winston.transports.File)
                ({
                    name    : 'info-file',
                    filename: $util.dirRaiz('app/data/logger/loggers-info.log'),
                    level   : 'info',
                    json    : true,
                    maxsize : 10485760, //10MB
                    maxFiles: 1
                }),

                new ($Winston.transports.File)
                ({
                    name    : 'warn-file',
                    filename: $util.dirRaiz('app/data/logger/loggers-warn.log'),
                    level   : 'warn',
                    json    : true,
                    maxsize : 10485760, //10MB
                    maxFiles: 1
                }),

                new ($Winston.transports.File)
                ({
                    name    : 'error-file',
                    filename: $util.dirRaiz('app/data/logger/loggers-error.log'),
                    level   : 'error',
                    json    : true,
                    maxsize : 10485760, //10MB
                    maxFiles: 1
                })
            ],
            exceptionHandlers:
            [
                new $Winston.transports.File
                ({
                    name                           : ' exception-file',
                    filename                       : $util.dirRaiz('app/data/logger/exceptions.log'),
                    exitOnError                    : false ,
                    handleExceptions               : true,
                    humanReadableUnhandledException: true
                })
            ]
        });
    };

    module.exports = Logger;

})(this);