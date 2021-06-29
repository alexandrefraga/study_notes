"use strict";
//impede compliação com erro ("noEmitOnError": true,)
var canal = 'Gaveta';
var inscritos = 610234;
//canal = inscritos (erro!)
console.log("Canal = " + canal);
function soma(a, b) { return a + b; }
//o ts analisa o código, e infere 'any' sem mostrar erro ("noImplicitAny": true,)
var qualquerCoisa;
qualquerCoisa = 12;
qualquerCoisa = 'abc';
//analisa possivel retorno null não desejado ("strictNullChecks": true)
//parametro não utilizado ("noUnusedParameters": true,)
function saudar(isManha) {
    var saudacao;
    if (isManha) {
        saudacao = 'bom dia';
    }
    else {
        saudacao = 'sem essa declaração, indicaria erro, pois haveria a possibilidade de retornar null';
    }
    return saudacao;
}
//# sourceMappingURL=compilador.js.map