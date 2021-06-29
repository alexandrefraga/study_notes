let isAtivo = false
console.log(isAtivo)
isAtivo = true
console.log(isAtivo)
isAtivo = 1 //igual a um, e não true
console.log(isAtivo)
//converte 
console.log(!!isAtivo) //true
console.log(!isAtivo)
console.log(!false)
console.log(!true)

console.log('verdadeiros...')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!( isAtivo = true ))

console.log('falsos...')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log('pra finalizar...')
console.log(!!('' || null || 0 || ' ')) //true
console.log('' || null || 0 || 'texto') //texto

let nome = ''
console.log(nome || "desconhecido")
nome = 'Lucas'
console.log(nome || "desconhecido")