var socket = require("../../lib/Socket");


exports.ServidorTCP = function()
{
    var servidor = socket.Socket('oi');
    return servidor;
};
