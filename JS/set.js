//objeto sem chave; não aceita repetição, e não é indexado

const times = new Set()
times.add('Vasco')
times.add('São Paulo').add('Palmeiras')
times.add('Flamengo')
times.add('Vasco') //não será adicionado

console.log(times)
console.log(times.size)
console.log(times.has('Vasco'))//existe?
times.delete('Flamengo')
console.log(times)

//forma
const nomes = ['Raquel', 'Lucas', 'Julia', 'Lucas']
const nomesSet = new Set(nomes)
console.log (nomesSet)
