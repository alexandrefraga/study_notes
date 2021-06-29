//dados
let produtos=[
    {nome: 'notebook', preco: 2499, fragil: true},
    {nome: 'iPad Pro', preco: 4199, fragil: true},
    {nome: 'Copo Vidro 300ml branco', preco: 12.49, fragil: true},
    {nome: 'Copo de Plástico 100ml branco', preco: 18.99, fragil: false},
    {nome: 'Copo de Vidro 200ml Transparente', preco: 18.99, fragil: false},
    {nome: 'Copo de Plástico 100ml transparente', preco: 18.99, fragil: false},
    {nome: 'Copo de Plástico 200ml branco', preco: 18.99, fragil: false},
    {nome: 'Copo de Chop (vidro) escuro', preco: 18.99, fragil: false}
]

let criterio=['200', 'Vidro']
let element = produtos
for (let i = 0; i < criterio.length; i++) {
    element = element.filter(e => e.nome.match(new RegExp(criterio[i],'i')))
}
console.log(element)



