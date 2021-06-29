const carrinho = [
    '{"nome":"Borracha" , "preco": 3.45}',
    '{"nome":"Caderno" , "preco": 13.90}',
    '{"nome":"Kit de lapis" , "preco": 41.22}',
    '{"nome":"Caneta" , "preco": 7.50}'
]

//exercicio: retornar um array com os preços
//a
const resultado = carrinho.map(function(e){
    return JSON.parse(e).preco
})
console.log(resultado)
//b
const resultado1 = carrinho.map( preco => JSON.parse(preco).preco )
console.log(resultado1)

//resposta
const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto=>produto.preco
const resultado2 = carrinho.map(paraObjeto).map(apenasPreco)
console.log(resultado2)