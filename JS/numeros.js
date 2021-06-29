const peso1 = 1.0
const peso2 = Number('2.0')
console.log(peso1, peso2)
//number serve pra inteiro 
console.log(Number.isInteger(peso1)) 
console.log(Number.isInteger(peso2))
console.log(Number) //função
const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log (media.toFixed(2))
console.log (media.toString()) //transforma em string
console.log (media.toString(2)) // valor binario
console.log (typeof media)

//cuidados
console.log ( 7/0 ) //infinity
console.log ('10'/2)
console.log ('show'/2)
console.log (0.1 + 0.7) 
console.log ( (10.897).toFixed(2) )
console.log ( (10.897).toString())
console.log('3'+2) //string tem preferencia, vai concatenar