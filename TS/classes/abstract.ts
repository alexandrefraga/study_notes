//classe abstrata
    /* 
        Classe abstrata não pode ser instanciada!
        Serve pra uso como classe 'pai', sendo os métodos abstratos de
        implementação obrigatória pelas classes 'filhas' (exceto se essas também forem abstratas)
    */
abstract class Calculo {
    protected resultado: number = 0

    abstract executar(...numeros: number[]): void

    getResultado(): number {
        return this.resultado
    }
}

class Soma extends Calculo {
    //é obrigatória a implementação dos métodos abstratos da classe pai!
    executar(...numeros: number[]): void {
        this.resultado = numeros.reduce((t, a) => t + a ) 
    }
}

class Multiplicacao extends Calculo {
    //é obrigatória a implementação dos métodos abstratos da classe pai!
    executar(...numeros: number[]): void {
        this.resultado = numeros.reduce((t, a) => t * a ) 
    }
}

//polimorfismo! c1 tem multiplas formas... (soma ou multiplicação)
let c1: Calculo = new Soma()
c1.executar(2, 3, 4, 5)
console.log(c1.getResultado())

c1 = new Multiplicacao //quando não tem parâmetros os '()' podem ser omitidos
c1.executar(2, 3, 4, 5)
console.log(c1.getResultado())