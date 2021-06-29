class Produto {
    constructor(
        public nome: string,
        public preco: number,
        public desconto: number = 0.00
        ){

    }
    //public é padrão e pode ser omitido
    public resumo(): string {
        return `${this.nome} custa R$${this.precoComDesconto()} (${this.desconto}% off)`
    }

    public precoComDesconto(): number {
        return this.preco * (1 - this.desconto)
    }
}

const mesa = new Produto('Mesa', 150)
mesa.desconto = 0.2
console.log(mesa.resumo())

const cadeira = new Produto('Cadeira', 65, 0.1)
console.log(cadeira.resumo())