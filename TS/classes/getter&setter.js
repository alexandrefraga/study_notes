"use strict";
/* getters & setters
    muito útil quando for necessário implementar validação
    e/ou outros processos ao setar o atributo, sem alterar
    o restante do código
*/
class Pessoa {
    constructor() {
        this._idade = 0;
    }
    get idade() {
        return this._idade;
    }
    set idade(valor) {
        if (valor >= 0 && valor <= 120) {
            this._idade = valor;
        }
    }
}
const pessoa1 = new Pessoa;
pessoa1.idade = 10; //acesso ao método get e set como se fosse atributo
console.log(pessoa1.idade);
//# sourceMappingURL=getter&setter.js.map