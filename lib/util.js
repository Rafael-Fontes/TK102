/* 
    Documento  : util.js
    Criado     : 22/07/2015
    Modificado : 03/08/2015
    Autor      : 
    Descrição  :
           Arquivo contem funçoes ultilizadas com frequencia
 */


/*
    Verifica se um obj esta vazio

    @param {type} obj
    @returns {Boolean}
 */
exports.emptyObj = function (obj) {
    // null and undefined são "vazio"
    if (obj == null)
        return true;

    if (obj.length === 0)
        return true;

    // Se o obj informado estiver um tamanho maior que zero
    // ele não esta vazio
    if (obj.length && obj.length > 0)
        return false;


    // Otherwise, does it have any properties of its own?
    // Note that this doesn't handle
    // toString and toValue enumeration bugs in IE < 9
    for (var key in obj) {
        if (hasOwnProperty.call(obj, key))
            return false;
    }

    return true;
};




/*
    Verifica se a variavel esta vazia
  
    @access   public
    @param    variavel
    @returns  Boolean
 */
exports.empty = function (variavel) {
    if(typeof variavel === "undefined")
        throw ("Variavel não definida");
    
    variavel = variavel.trim();
    
    if (variavel === null || variavel === 0 || variavel === "")
        return true;

    return false;  
};




/*
    Verifica se a variavel existe
 
    @access   public
    @param    variavel
    @return   boolean
    @exemple  isset(variavel);
 */
exports.isset = function (variavel) {
    if (typeof variavel === "undefined")
        return false;

    return true;
};




/*
    Removo todas as tags "<tag></tag>" do conteudo 
 */
exports.higienizarTags = function (dados) {
    if(dados){
        return dados.replace(/<\/?[^>]+(>|$)/g, "");
    }

    return "";
};




/*
    Remove todos os caracteres, exceto digitos e espaço 
 */
exports.higienizarNumeroInteiro = function (dados) {
    if(dados){
        return dados.replace(/[^\d ]+/g, "");
    }
    
    return "";
};




/*
    Remove todos os caracteres, exceto digitos, espaço e ponto
 */
exports.higienizarNumeroDecimal = function (dados) {
    if(dados){
        return dados.replace(/[^\d. ]+/g, "");
    }
    
    return "";
};




/*
    Remove tudo que não seja um numero ou uma letra do alfabeto ou um espaço
 */
exports.higienizarAlfaNumerico = function(dados){
    if(dados){
        return dados.replace(/[^a-zA-Z0-9 ]+/g, "");
    }
    
    return "";
};




/*
    Remove tudo que não seja letra ou espaço
 */
exports.higienizarLetras = function(dados){
    if(dados){
        return dados.replace(/[^a-zA-Z ]+/g, "");
    }
    
    return "";
};



/*
    Verifica se a informação é um numero
    Se a informação for um numero retorna true, se não for
    retorna false.
 */
exports.eNumero = function(dados){
    if(dados){
        var minhaRegExp = new RegExp("^[0-9]{10,}$");
        return minhaRegExp.test(dados);
    }
    
    return false;
};