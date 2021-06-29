//es2015
const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco:{
        logradouro: 'Rua ABC',
        numero: 1000
    }
}
//desestruturando objeto
const {nome, idade} = pessoa
console.log(nome, idade)
//renomeando
const {nome: n, idade: i} = pessoa
console.log(n, i)
//undefined e valor padrão
const { sobrenome, bemHumorada = true} = pessoa
console.log(sobrenome, bemHumorada)
//variável endereco não será criada!
const {endereco: { logradouro, numero, cep}} = pessoa
console.log(logradouro, numero, cep)
//cuidado! conta não existe!! gera erro
//const { conta: {age, num}}

//array.............................
const [a]= [10]
console.log(a)

const [n1, ,n3, ,n5, n6=0] = [10, 7, 9, 8]
console.log("L30: ", n1, n3, n5, n6)

const [ , [ , nota]] = [[, 8, 8], [ 9, 6, 8]]
console.log("L33: ", nota)

//utilizando em função...
function rand( { min = 0, max = 1000} ) {
    const valor = Math.random() * (max-min) + min
    return Math.floor(valor)
}
const obj = { max:50, min:40}
console.log("L41: ", rand(obj))
console.log("L42: ", rand({max:300}))//usa valor padrão

//utilizando função com array

function rand1 ( [min = 0, max = 1000]){
    if (min>max) [min, max] = [max, min]
    const valor1 = Math.random() * (max-min) + min
    return Math.floor(valor1)
}

console.log("L52: ", rand1( [50, 40] ))
console.log("L53: ", rand1( [992] ))
console.log("L54: ", rand1( [, 10] ))
console.log("L55: ", rand1( [] ))