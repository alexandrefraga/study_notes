let valor //não inicializado
console.log(valor) //undefined
/*
console.log(valor2) //erro!! valor2 is not defined
*/
valor = null //ausência de valor
console.log(valor)

const produto = {}
console.log(produto.preco) //undefined
console.log(produto)
produto.preco = 3.55
console.log(produto)

produto.preco = undefined //evite atribuir undefined
console.log(!!produto.preco)
console.log(produto)

produto.preco = null //sem preco
console.log(!!produto.preco) //false
console.log(produto)

produto.preco = 0
console.log(!!produto.preco) //false
console.log(produto)