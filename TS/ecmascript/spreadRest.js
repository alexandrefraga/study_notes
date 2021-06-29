"use strict";
const numbers = [1, 10, 99, -5];
console.log(Math.max(...numbers));
const turmaA = ['João', 'Maria', 'Fernanda'];
const turmaB = ['Fernando', 'Miguel', 'Lorena', ...turmaA];
function retornarArray(...args) {
    return args;
}
const numeros = retornarArray(1, 2, 3, 4, 5);
console.log(numeros);
console.log(retornarArray(...numbers));
//pode-se passar argumentos juntamente com spread, mas os argumentos devem ser passados primeiro!!
function retornarArray2(a, ...args) {
    console.log(a);
    return args;
}
//usando com tupla
const tupla = [1, 'abc', false];
function tuplaParam1(a, b, c) {
    console.log(`1) ${a} ${b} ${c}`);
}
tuplaParam1(...tupla);
function tuplaParam2(...params) {
    console.log(`2) ${params[0]} ${params[1]} ${params[2]}`);
}
tuplaParam2(...tupla);
//# sourceMappingURL=spreadRest.js.map