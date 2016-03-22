(function ()
{
    var $net    = require('net');
    var $Util   = require('./Util');
    var $Logger = require('./Logger');


    /**
     * Classee Socket
    */
    function Socket()
    {
        var $self   = this;
        var $util   = new $Util();
        var $logger = new $Logger();

        var socketPorta;
        var socketHost;

        var moduloNome;
        var moduloIsntancia;


        /**
         * Recebe a porta que o servidor ouvira
         * @param {Int} $pPorta
         */
        $self.setPorta = function ($pPorta)
        {
            if(!$util.isset($pPorta) || $util.isEmpty($pPorta)){
                throw new Error ('É necessario informa uma porta');
            }
            socketPorta = $pPorta;
        };


        /**
         * Retorna a porta que o servidor ouvira
         * @return Int
         */
        $self.getPorta = function()
        {
            return socketPorta;
        };


        /**
         * Recebe o host "IP" do servidor
         * @param {String} $pHost
         */
        $self.setHost = function ($pHost)
        {
            if(!$util.isset($pHost) || $util.isEmpty($pHost)){
                throw new Error ('É necessario informa o Host "IP" do servidor');
            }
            socketHost = $pHost;
        };


        /**
         * Retorna o host "IP" do servidor
         * @return String
         */
        $self.getHost = function (){
            return socketHost;
        };


        /**
         * Recebe o nome do modulo
         * @param {String} $pNome
         */
        $self.setModuloNome = function($pNome)
        {
            if(!$util.isset($pNome) || $util.isEmpty($pNome)){
                throw new Error ('É necessario informa o nome do modulo');
            }
            moduloNome = $pNome;
        };


        /**
         * Retorna o nome do modulo
         * @return {String}
         */
        $self.getModuloNome = function()
        {
            return moduloNome;
        };


        /**
         * Recebe a instancia do modulo
         * @param {String} $pInstancia
         */
        $self.setModuloInstancia = function($pInstancia)
        {
            if(!$util.isset($pInstancia) || $util.isEmpty($pInstancia)){
                throw new Error ('É necessario informa a instancia do modulo');
            }
            moduloIsntancia = $pInstancia;
        };


        /**
         * Retorna o nome do modulo
         * @return {String}
         */
        $self.getModuloInstancia = function()
        {
            return moduloIsntancia;
        };


        /*
         * Metodo inicia o servidor TCP
         */
        $self.iniciaServidor = function ()
        {
            var $servidor  = $net.createServer();

            $servidor.on('connection', function (cliente)
            {
                //Recebe mensagem do cliente
                cliente.on('data', function (mensagem) {
                    console.log(mensagem.toString().trim());
                });


                //Informa que o cliente se desconectou
                cliente.on('end', function () {
                    console.log("Cliente se desconectou!");
                });

            });


            //Trabamento de erros
            $servidor.on('error', function(erro)
            {
                if (erro.code === 'EADDRINUSE') {
                    $servidor.close();
                }
            });


            var $confServ = {
                port : $self.getPorta(),
                host :  $self.getHost()
            };

            //Inicía o servidor
            $servidor.listen($confServ, function ()
            {
                var msg = 'Servidor '
                                    +$self.getModuloNome()
                                    +' rodando em: '
                                    + $self.getHost()
                                    +':'+ $self.getPorta();
                            
                $logger.logger.info({message: msg});
                console.log(msg);
            });
        };

    };


   //Exporta a classe
   module.exports = Socket;

})(this);