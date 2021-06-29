const alunos = [
    {nome: 'Joao', nota: 7.3, bolsista: false},
    {nome: 'Maria', nota: 9.2, bolsista: true},
    {nome: 'Pedro', nota: 9.8, bolsista: false},
    {nome: 'Ana', nota: 8.7, bolsista: true}
]
//desafio 1: Todos os alunos são bolsistas?
const todosBolsistas = alunos.map(aluno=>aluno.bolsista).reduce(function(acum, atual){
    return acum && atual
})
console.log(todosBolsistas)
//resposta 1
const todos = (resultado, bolsista) => resultado && bolsista
console.log(alunos.map(aluno=>aluno.bolsista).reduce(todos))

//desafio 2: Algum aluno é bolsista?
const algumBolsistas = alunos.map(aluno=>aluno.bolsista).reduce(function(acum, atual){
    return acum || atual
})
console.log(algumBolsistas)
//resposta 2
const algum = (resultado, bolsista) => resultado || bolsista
console.log(alunos.map(aluno=>aluno.bolsista).reduce(algum))


