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

    return bd;
};





/*
 *
 */
exports.login = function(imei)
{
    var bd = conexaoBd();

    bd.query(
        'SELECT id, numero_serie FROM modulo WHERE numero_serie = :numero_serie',
        {
            replacements: {numero_serie: imei},
            type        : bd.QueryTypes.SELECT
        }
    )
    .then(function(dados) {
       console.log(dados);
    });
};





/*
 * @param  obj dados
 * @return boolean
 */
exports.salvar = function(objDados)
{
    var bd = conexaoBd();

    bd.query("\
        INSERT INTO posicao \n\
            ('id_modulo', 'datahora', 'latitude', 'longitude', 'velocidade', 'datahora_gravacao', 'panico') \n\
        VALUES \n\
            (':id_modulo', ':datahora', ':latitude', ':longitude', ':velocidade', ':datahora_gravacao', ':panico')",
    {
        replacements: {},
        type: sequelize.QueryTypes.SELECT
    });


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