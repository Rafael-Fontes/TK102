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





/*
 * Representação da tabela veiculo
 */
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
};





/*
 * Representação da tabela posicao
 */
var tabelaPosicao = function()
{
    var bd      = conexaoBd();
    var posicao = bd.define('posicao',
        {
            id_modulo : {
                type    : Sequelize.INTEGER,
                validate: {
                    isInt: true
                }
            },
            id_veiculo : {
                type    :Sequelize.INTEGER,
                validate: {
                    isInt: true
                }
            },
            datahora : {
                type    :Sequelize.DATE,
                validate: {
                    isDate: true
                }
            },
            latitude : {
                type    :Sequelize.DECIMAL(16, 13),
                validate: {
                    isDecimal: true
                }
            },
            longitude : {
                type    :Sequelize.DECIMAL(16, 13),
                validate: {
                    isDecimal: true
                }
            },
            velocidade : {
                type    :Sequelize.INTEGER,
                validate: {
                    isInt: true
                }
            },
            datahora_gravacao : {
                type    :Sequelize.DATE,
                validate: {
                    isDate: true
                }
            },
            panico : {
                type    :Sequelize.INTEGER,
                validate: {
                    isInt: true
                }
            },
        },
        {
            timestamps      : false,
            freezeTableName : true,
            underscored     : true
        }
    );

    return posicao;
};





/*
 *
 */
exports.login = function(imei)
{
    var modulo  = tabelaModulo();
    var veiculo = tabelaVeiculo();

    modulo.hasMany(veiculo, {
         foreignKey: 'id_modulo'
    });

    console.log(modulo.get());

   /* modulo.hasMany({
        attributes  : ['id', 'id_modulo', 'id_veiculo', 'numero_serie'],
        where       : {numero_serie: imei},
        raw         : true
    })
    .then(function(dados){
        console.log(JSON.stringify(dados));
    });  */
};





/*
 * @param  obj dados
 * @return boolean
 */
exports.salvar = function(dados)
{
    if(typeof dados !== "object"){
        return false;
    }

    var posicao = tabelaPosicao();

    posicao.create({
        'id_modulo'         : 16307,
        //'id_veiculo'        : dados.id_veiculo,
        'datahora'          : "2016-03-01 00:00:00",
        'latitude'          : dados.latitude,
        'longitude'         : dados.longitude,
        'velocidade'        : dados.velocidade,
        'datahora_gravacao' : dados.datahora_gravacao,
        'panico'            : dados.panico
    })
    .then(function(retorno){
        //console.log(retorno);
    });
};