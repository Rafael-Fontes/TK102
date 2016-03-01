var logger = require('./lib/logger.js');
var bd     = require('./lib/bd.js');

//bd.login('751374');


var meuObj = {
    'id_modulo'         : '16307',
    //'id_veiculo'        : dados.id_veiculo,
    'datahora'          : '2016-03-01',
    'latitude'          : '1111111111',
    'longitude'         : '1111111111',
    'velocidade'        : '300',
    'datahora_gravacao' : '2016-03-01 16:53:00',
    'panico'            : '1'
};

bd.salvar(meuObj);