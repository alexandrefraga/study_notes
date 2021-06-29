const prod1 = {} //objeto vazio
prod1.nome = 'celular'
prod1.preco = 4998.90
prod1['desconto legal'] = 0.40 //evitar atributos com espaço
console.log(prod1)

const prod2 = {
    nome: 'camisa',
    preco: 79.97,
    obj: {cor: 'amarelo'}
}
prod2.local = 25
console.log(prod2)