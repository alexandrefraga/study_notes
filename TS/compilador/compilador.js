"use strict";
//impede compliação com erro ("noEmitOnError": true,)
let canal = 'Gaveta';
let inscritos = 610234;
//canal = inscritos (erro!)
console.log(`Canal = ${canal}`);
function soma(a, b) { return a + b; }
//o ts analisa o código, e infere 'any' sem mostrar erro ("noImplicitAny": true,)
let qualquerCoisa;
qualquerCoisa = 12;
qualquerCoisa = 'abc';
//analisa possivel retorno null não desejado ("strictNullChecks": true)
//parametro não utilizado ("noUnusedParameters": true,)
//variável local não utilizada ("noUnusedLocals": true,)
function saudar(isManha) {
    //let w: number = 1
    let saudacao;
    if (isManha) {
        saudacao = 'bom dia';
    }
    else {
        saudacao = 'sem essa declaração, indicaria erro, pois haveria a possibilidade de retornar null';
    }
    return saudacao;
}
//# sourceMappingURL=compilador.js.map