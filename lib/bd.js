var Sequelize = require('sequelize');

var conexaoBd = function()
{
    var host    = '127.0.0.1';
    var porta   = '3306';
    var usuario = 'root';
    var senha   = '';
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


/*
 * Representação da tabela modulo
 */
var tabelaModulo = function()
{
    var bd     = conexaoBd();
    var modulo = bd.define('modulo', {},
        {
            timestamps      : false,
            freezeTableName : true,
            underscored     : true
        }
    );
    
    return modulo;
};



var tabelaVeiculo = function()
{
    var bd      = conexaoBd();
    var veiculo = bd.define('veiculos', {},
        {
            timestamps      : false,
            freezeTableName : true,
            underscored     : true
        }
    );
    
    return veiculo;
}




exports.login = function(imei)
{
    var modulo  = tabelaModulo();
    var veiculo = tabelaVeiculo();
    
    modulo.hasMany(veiculo, {
         foreignKey: 'id_modulo'
    })
    .then(function(dados){
         console.log(JSON.stringify(dados));
    });
    
   /* modulo.hasMany({
        attributes  : ['id', 'id_modulo', 'id_veiculo', 'numero_serie'],
        where       : {numero_serie: imei},
        raw         : true
    })
    .then(function(dados){
        console.log(JSON.stringify(dados));
    });  */  
};


//id_modulo, id_veiculo, numero_serie


exports.salvar = function(obj)
{
    var bd = conexaoBd();
    var posicao = bd.define('posicao', 
        {
            id_modulo : {
                validate: {}
            },
            id_veiculo : {
                validate: {}
            }
        }, 
        {
            timestamps      : false,
            freezeTableName : true
        }
    );
};