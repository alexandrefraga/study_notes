console.log(typeof Object)

class Produto{}
console.log(typeof Produto)

//Exemplos de funções:
    //sem retorno;
    function SemRetorno(a){
        console.log(a)
    }
    SemRetorno("Bom dia!")

    function imprimirSoma(a, b){
        console.log(a+b)
    }
    imprimirSoma(2, 3) //5
    imprimirSoma(2) //NaN
    imprimirSoma(2, 10, 4, 5, 6) //soma apenas 2 e 10 = 12

    //com retorno
    function soma(a, b=0){ //informado valor padrão para b
        return a + b
    }
    console.log(soma(2, 3)) //5
    console.log(soma(2)) //2 pois b tem valor padrão zero

    //armazenando função em variavel
    const somar = function(a, b){
        console.log(a + b)
    }
    somar(3, 7)

    const subtrair = function(a, b){
        return a - b
    }
    console.log(subtrair(10, 2))

    //arrow
    const dividir = (a, b)=>{ return a/b }
    console.log(dividir(9, 3))

    //arrow com retorno implicito
    const multiplicar = (a, b) => a * b
    console.log(multiplicar(5, 10))

    const imprimir = a => console.log(a)
    imprimir('legal!')

    //Arrow function (this)
    const lexico = () => console.log(this === exports)
    
    //operador rest
    function total (...numeros) {
        let total = 0
        numeros.forEach(n=>total+= n)
        return total
    }
    console.log('rest : ',total(2, 3, 4, 5))
