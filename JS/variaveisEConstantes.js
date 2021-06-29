/*
 * Variáveis 'var' aceitam ser declaradas duas ou mais vezes
 * Variáveis 'var' são restritas no escopo de função, fora de função são globais e devem ser evitadas (node tem uma  diferença)
 */
var a=30 
var a=25
a=15 
console.log('variável a:'+ a )
{
    {
        var sera='visivel fora do bloco'
    }
}
console.log(sera)

function testeVar(){
    var teste='visivel somente dentro da função'
    console.log(teste)
}
testeVar()


/*
 * Variáveis 'let' não podem ser redeclaradas
 * 'let' obedece ao escopo de bloco, global e de função
 */
let b=90
b=96
console.log('variável b:'+ b )

/*
 * Constantes não podem ser redeclaradas
 *
 *
 */
const c = 300
console.log('constante c:'+ c)
 
