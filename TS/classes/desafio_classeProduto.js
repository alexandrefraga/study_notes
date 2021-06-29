"use strict";
class Produto {
    constructor(nome, preco, desconto = 0.00) {
        this.nome = nome;
        this.preco = preco;
        this.desconto = desconto;
    }
    //public é padrão e pode ser omitido
    resumo() {
        return `${this.nome} custa R$${this.precoComDesconto()} (${this.desconto}% off)`;
    }
    precoComDesconto() {
        return this.preco * (1 - this.desconto);
    }
}
const mesa = new Produto('Mesa', 150);
mesa.desconto = 0.2;
console.log(mesa.resumo());
const cadeira = new Produto('Cadeira', 65, 0.1);
console.log(cadeira.resumo());
//# sourceMappingURL=desafio_classeProduto.js.map