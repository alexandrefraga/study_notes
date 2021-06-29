/*
    O objeto Map é um mapa simples de chave/valor.
    Qualquer valor (objeto e valores primitivos)
    pode ser usado como uma chave ou um valor.
*/
const tecnologias = new Map()
tecnologias.set('react', {framework: false})
tecnologias.set('angular', {framework: true})

console.log(tecnologias.react) //undefined
console.log(tecnologias.get('react'))
console.log(tecnologias.get('react').framework)


const chavesVariadas = new Map([
    [function() {}, "função"],
    [{}, "objeto"],
    [123, 'número']
])
console.log(chavesVariadas)

chavesVariadas.forEach( (vl, ch) => {
    console.log(ch, vl)
})

console.log(chavesVariadas.has(123))
console.log(chavesVariadas.size)
chavesVariadas.delete(123)
