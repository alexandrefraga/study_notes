"use strict";
// Construtor Privado & Singleton
//Singleton
class Unico {
    constructor() { }
    static getInstance() {
        return Unico.instance;
    }
    agora() {
        return new Date;
    }
}
Unico.instance = new Unico;
//const errado = new Unico()   construtor é privado!!
console.log(Unico.getInstance().agora());
//atributos somente leitura, ou seja, é atribuido somente na inicialização dentro do construtor
class Aviao {
    constructor(modelo, prefixo) {
        this.prefixo = prefixo;
        this.modelo = modelo;
    }
}
const turboHelice = new Aviao('Tu-114', 'PT-abc');
//turboHelice.modelo = 'DC-8' //erro: modelo read-only
//turboHelice.prefixo = 'PT-def' //erro: prefixo read-only
console.log(turboHelice);
//# sourceMappingURL=singleton.js.map