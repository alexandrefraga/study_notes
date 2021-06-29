console.log(typeof Object)
console.log(typeof new Object)

const Cliente = function(){}
console.log(typeof Cliente)
console.log(typeof new Cliente)

class Produto {} //es 2015 ES6
console.log(typeof Produto)
console.log(typeof new Produto)
console.log(typeof new Produto())


const obj = { a:1, b: 2, c: 3}
console.log(Object.keys(obj))
//es8
console.log(Object.values(obj))
console.log(Object.entries(obj))

//melhorias na notação literal
const nome = "Carla"
const pessoa = {
    nome, //dispensa "nome: nome"
    ola(){ //sintaxe simples pra function
        return "oi gente"
    }
}
console.log(pessoa.nome, pessoa.ola())

//classe
class Animal {}
class Cachorro extends Animal {
    falar(){
        return "au au"
    }
}
