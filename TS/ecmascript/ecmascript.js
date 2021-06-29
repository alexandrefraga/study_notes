"use strict";
//compilar com es6, ou todas as variáveis serão 'var'
//let @ const
/*    observar hoisting quando usa es5   */
/*   'const' somente apartir da compilação com es6    */
/* observar escopo para let e const, caso compile para es5, o escopo será sempre de 'var' */
//Arrow function
const subtrair = (n1, n2) => n1 - n2;
console.log(typeof subtrair);
console.log(subtrair(8, 6));
const saudacao = () => console.log("Olá");
console.log(typeof saudacao);
saudacao();
const falarCom = (pessoa) => { console.log('Olá ' + pessoa); };
//this
// function normalComThis() {
//     console.log(this)
// }
// normalComThis()
// const normalComThisEspecial = normalComThis.bind({nome: 'Ana'})
// normalComThisEspecial()
//this no momento da declaração arrow ??? 
// console.log(this)
// const arrowComThis = () => console.log(this)
// arrowComThis()
// const arrowComThisEspecial = arrowComThis.bind({nome: 'Ana'})
// arrowComThisEspecial() //this não varia! obedece sempre ao momento da declaração arrow
//parâmetro padrão
function contagemRegressiva(inicio = 5, fim = inicio - 5) {
    console.log(inicio);
    while (inicio >= fim) {
        inicio--;
        console.log(inicio);
    }
    console.log("Fim!");
}
contagemRegressiva();
contagemRegressiva(3);
//# sourceMappingURL=ecmascript.js.map