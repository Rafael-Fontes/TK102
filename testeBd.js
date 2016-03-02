var logger = require('./lib/logger.js');
var bd     = require('./lib/bd.js');

bd.login('751374');


var meuObj = {
    'id_modulo'         : '16307',
    'id_veiculo'        : null,
    'datahora'          : '2016-03-01',
    'latitude'          : '-15.8961000000000',
    'longitude'         : '-48.1178000000000',
    'velocidade'        : '300',
    'datahora_gravacao' : '2016-03-01 16:53:00',
    'panico'            : '1'
};

//bd.salvar(meuObj);