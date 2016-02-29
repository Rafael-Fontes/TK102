var Sequelize = require('sequelize');

var conexaoBd = function()
{
    var host    = '127.0.0.1';
    var porta   = '3306';
    var usuario = 'root';
    var senha   = 'root';
    var banco   = 'rastreamento3';

    var bd = new Sequelize(banco, usuario, senha, {
        host    : host,
        port    : porta,
        dialect : 'mysql'
    });
    
    
    /*bd.authenticate().complete(function(erro){
        if(erro){
            console.log('Erro ao se conectar ao banco');
            return;
        }
    });*/
    
    return bd;
};



exports.login = function(imei)
{
    var bd     = conexaoBd();
    var modulo = bd.define('modulo', {});
    
    var dados   = modulo.findAll({
        attributes  : [[bd.fn('COUNT', bd.col('numero_serie')), 'qtd']],
        where       : {numero_serie: imei}
    });
    
    console.log(dados);
};