function soma(){
    let soma = 0
    for (i in arguments){
        soma += arguments[i]
    }
    return soma
}
console.log(soma(), soma(2,5,8), soma('a', 'b', 'c'))

//Parametros Padrão
function soma1(a,b,c){
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c
}
console.log("Parâmetros Padrão 01 : ",soma1(), soma1(3), soma1(1,2,3), soma1(0,0,0))

function soma2(a,b,c){
    a = a !== undefined ? a : 1
    b = 1 in arguments  ? b : 1
    c = isNaN(c)        ? 1 : c 
    return a + b +c
}
console.log("Parâmetros Padrão 02 : ", soma2(), soma2(3), soma2(1,2,3), soma2(0,0,0) )

//Parâmetros Padrão ES2015
function soma3 (a=1, b=1, c=1){
    return a + b + c
}
console.log("Parâmetros Padrão ES2015 : ", soma3(), soma3(3), soma3(1,2,3), soma3(0,0,0) )

function soma4 (a, b, c){
    return a + b + c
}
console.log("Parâmetros Sem Padrão : ", soma4(), soma4(3), soma4(1,2,3), soma4(0,0,0) )