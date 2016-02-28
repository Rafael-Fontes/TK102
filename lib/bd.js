var Sequelize = require('sequelize');

var host    = '127.0.0.1';
var usuario = 'root';
var senha   = 'root';
var banco   = 'prototipomapa';


/*var bd = new Sequelize(banco, usuario, senha, {
    host    : host,
    dialect : 'mysql'|'mariadb'
});*/

//var bd = new Sequelize('mysql://localhost:3306/prototipomapa');

var bd = new Sequelize(banco, usuario, senha)

var cliente = bd.define('clientes', {});



var dados = cliente.findAll({
  attributes: ['id', 'nome']
});
console.log(dados.nome);