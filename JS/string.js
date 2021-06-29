const escola = "Cod3r"

console.log(escola.charAt(4)) //indice começa em 0
console.log(escola.charAt(5)) //não existe, mas não gera erro
console.log(escola.charCodeAt(3)) //código tabela unicode
console.log(escola.indexOf('3')) //retornsa indice do caracter
console.log(escola.substring(1))
console.log(escola.substring(0, 3 ))
console.log(escola.concat("!"))
console.log('estudante'.concat('!'))
console.log('estudante'+'?')
console.log("vai dividir: "+'10'/2)
console.log("vai concatenar: "+'3'+2) //string tem preferencia
console.log('5'-1) //vai subtrair
console.log(escola.replace(3, 'e')) //pode usar regex também
console.log('Ana,Maria,Pedro'.split(',')) //gera array
