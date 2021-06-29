const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])
console.log(valores[10]) //undefined
valores[4] = 10
console.log(valores)
valores[7] = 15
console.log(valores)
console.log(valores.length)
//permite variados tipos no mesmo array, mas deve ser evitados
valores.push({is:3}, false, null, 'teste')
console.log(valores)
console.log(valores.pop()) //exclui o ultimo valor
delete valores[0]
console.log(valores)
console.log(typeof valores) //object

console.log('função Array', Array(5))
console.log('função Array.fill', Array(5).fill())
console.log('função Array.fill.map', Array(5).fill().map( (_, indice) => indice ))

const createArrayValuesInterval = (max, min) => {
    if(max < min ) [max, min] = [min, max]
    return Array(max - min + 1).fill().map( (_, i) => min + i )
}

console.log('função Array.fill.map', createArrayValuesInterval(5, 10))

//fatorial
function fatorial(num){
    return Array(num).fill().reduce((ac, _, i,) => ac * (i + 1), 1)
}
console.log(fatorial(8))

console.log(Array(10).fill())


