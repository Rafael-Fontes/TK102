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


/*
 * Representação da tabela modulo
 */
var tabelaModulo = function()
{
    var bd     = conexaoBd();
    var modulo = bd.define('modulo', 
        {
            id: {
                type      : Sequelize.INTEGER,
                primaryKey: true,
                allowNull : false
            },
            id_cliente    : {
                type      : Sequelize.INTEGER,
                allowNull : false
            },        
            numero_serie  : {
                type      : Sequelize.STRING,
                allowNull : false
            },          
        },
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
    var veiculo = bd.define('veiculos', 
        {
            id: {
                type      : Sequelize.INTEGER,
                primaryKey: true,
                allowNull : false
            },
            id_modulo : {
                type      : Sequelize.INTEGER,
                allowNull : false,
                references: {
                    model: tabelaModulo(),
                    key  : 'id'
                }
            },          
        },
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
            id: {
                type      : Sequelize.INTEGER,
                primaryKey: true,
                allowNull : false
            },
            id_modulo : {
                type      : Sequelize.INTEGER,
                allowNull : false,
                references: {
                    model: tabelaModulo(),
                    key  : 'id'
                }
            },
            id_veiculo : {
                type      : Sequelize.INTEGER,
                allowNull : true,
                references: {
                    model: tabelaVeiculo(),
                    key  : 'id'
                }
            },
            datahora : {
                type      : Sequelize.DATE,
                allowNull : false
            },
            latitude : {
                type      : Sequelize.DECIMAL(16, 13),
                allowNull : false
            },
            longitude : {
                type      : Sequelize.DECIMAL(16, 13),
                allowNull : false
            },
            velocidade : {
                type      : Sequelize.INTEGER,
                allowNull : false
            },
            datahora_gravacao : {
                type      : Sequelize.DATE,
                allowNull : false
            },
            panico : {
                type      : Sequelize.INTEGER,
                allowNull : false
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

    modulo.find({
        where   : {numero_serie : imei},
        include : [veiculo],
        required: true
    })
    .then(function(dados){
        console.log(JSON.stringify(dados));
    });
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
        'id_veiculo'        : dados.id_veiculo,
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