var Sequelize = require('sequelize');

var conexaoBd = function()
{
    var host    = '127.0.0.1';
    var porta   = '3306';
    var usuario = 'root';
    var senha   = 'root';
    var banco   = 'prototipomapa';

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



var cliente = conexaoBd().define('clientes', {});



var dados = cliente.findAll({
  attributes: ['id', 'nome']
});
console.log(dados.nome);

