const os = require('os')
//dados
let produtos=[
    {nome: 'notebook', preco: 2499, fragil: true},
    {nome: 'iPad Pro', preco: 4199, fragil: true},
    {nome: 'Copo de Vidro 300ml', preco: 12.49, fragil: true},
    {nome: 'Copo de Plástico', preco: 18.99, fragil: false},
    {nome: 'Copo de Vidro 200ml', preco: 18.99, fragil: false},
    {nome: 'Copo de Plástico 100ml', preco: 18.99, fragil: false},
    {nome: 'Copo de Plástico 200ml', preco: 18.99, fragil: false},
    {nome: 'Copo de Chop (vidro)', preco: 18.99, fragil: false}
]

//palavras para busca
const e1='copo'
const e2=''
const e3=''
//regra regex para 3 palavras
const regra=`.*${e1}.*${e2}.*${e3}.*|.*${e1}.*${e3}.*${e2}.*|.*${e3}.*${e1}.*${e2}.*|.*${e3}.*${e2}.*${e1}.*|.*${e2}.*${e1}.*${e3}.*|.*${e2}.*${e3}.*${e1}.*`
const frase = new RegExp(regra,'i')//flag 'i' torna case insensitive

const contem = produto => produto.nome.match(frase)
//console.log(contem)ssssss
console.log(produtos.filter(contem))