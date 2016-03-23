(function()
{
    var Sequelize = require('sequelize');
    
    /**
     * Classe BD
     */
    function BD()
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
        
        
        
        /**
         * Verifica se o modulo esta cadastrado.
         * @param imei
         */
        this.login = function(imei)
        {
            bd.query(
                'SELECT id, imei FROM modulo WHERE imei = :imei',
                {
                    replacements: {imei: imei},
                    type        : bd.QueryTypes.SELECT
                }
            )
            .then(function(dados) {
               console.log(dados);
            });
        };
        
    };
    
    module.exports = BD;
})(this);