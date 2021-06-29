function getPreco(desc = 0, moeda = 'R$'){
    console.log(this.desc, desc) //desconto carro X desconto passado como parâmetro
    return `${moeda} ${this.preco * (1 - desc) }`
}

const produto = {
    nome: 'Notebook',
    preco: 4589,
    desc: 0.15,
    getPreco
}

global.preco = 20
global.desc = 0.1
console.log(getPreco())

console.log(produto.getPreco())

//
const carro={ preco: 50000, desc:0.20}
console.log("carro: " + getPreco.call(carro))
console.log("carro: " + getPreco.apply(carro))

console.log( "carro: " + getPreco.call(carro, 0.1, 'call$') ) //parâmetros diretamente
console.log( "carro: " + getPreco.apply(carro, [0.1, 'aplly$'] ) ) //parâmetros por array