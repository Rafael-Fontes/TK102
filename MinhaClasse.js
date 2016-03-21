(function ()
{
    function MinhaClasse(obj)
    {
        this.nome = 'Minha Classe';

        this.f1 = function ()
        {
            console.log('Metodo f1');
        };
    };

    module.exports = MinhaClasse;
})(this);

// Constructor
//function Foo(bar) {
//  // always initialize all instance properties
//  this.bar = bar;
//  this.baz = 'baz'; // default value
//}
//// class methods
//Foo.prototype.fooBar = function() {
//
//};
//// export the class
//module.exports = Foo;