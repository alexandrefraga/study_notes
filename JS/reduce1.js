const alunos = [
    {nome: 'Joao', nota: 7.3, bolsista: false},
    {nome: 'Maria', nota: 9.2, bolsista: true},
    {nome: 'Pedro', nota: 9.8, bolsista: false},
    {nome: 'Ana', nota: 8.7, bolsista: true}
]
console.log(alunos.map(a=>a.nota))
//acumulador é o indice 0 do array; atual inicia no indice 1 
const saldoInicial=0
const resultado = alunos.map(a=>a.nota).reduce(function(acumulador, atual){
    console.log(acumulador, atual)
    return acumulador + atual
},saldoInicial)//saldo inicial é opcional
console.log(resultado)