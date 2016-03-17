var cliente01 = require('./cliente01.js');
var cliente02 = require('./cliente02.js');

var host  = '127.0.0.1';
var porta = '3000';

cliente01.Cliente01(host, porta);
cliente02.Cliente02(host, porta);