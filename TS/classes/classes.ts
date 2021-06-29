class Data {
    //Público por padrão
    dia: number
    public mes: number
    ano: number

    constructor( dia: number = 1, mes: number = 1, ano: number = 1970) {
        this.dia = dia
        this.mes = mes
        this.ano = ano
    }
}

const aniversario = new Data(3, 11, 1991)
aniversario.dia = 4
console.log(aniversario.dia)
console.log(aniversario)

const casamento = new Data //posso omitir os '()'
casamento.ano = 2017
console.log(casamento)

/* ************ */
class DataEsperta {
    constructor( public dia: number = 1, public mes: number = 1, public ano: number = 1970) {
        
    }
}

const aniversarioEsperto = new DataEsperta(3, 11, 1991)
aniversarioEsperto.dia = 4
console.log(aniversarioEsperto.dia)
console.log(aniversarioEsperto)

const casamentoEsperto = new DataEsperta //posso omitir os '()'
casamentoEsperto.ano = 2017
console.log(casamentoEsperto)


class Carro {
    private velocidadeAtual: number = 0

    constructor(
        public marca: string,
        public modelo: string,
        private velocidadeMaxima: number = 200
    ){

    }
    //protected é transmitido por herança!
    protected alterarVelocidade(delta: number): number {
        const novaVelocidade = this.velocidadeAtual + delta
        const velocidadeValida = novaVelocidade >= 0 && novaVelocidade <= this.velocidadeMaxima
        if(velocidadeValida){
            this.velocidadeAtual = novaVelocidade
        } else {
            this.velocidadeAtual = delta > 0 ? this.velocidadeMaxima : 0
        }
        return this.velocidadeAtual
    }

    public acelerar(): number {
        return this.alterarVelocidade(5)
    }

    public frear(): number {
        return this.alterarVelocidade(-5)
    }
}

const carro1 = new Carro('Ford', 'Ka', 185)
//interface com variável de tipo sendo transmitida
//interface Array<T> { fill(value: T): Array<T>; }
Array<number>(20).fill(0).forEach(() => carro1.acelerar())
console.log('Carro1: ',carro1.acelerar())

class Ferrari extends Carro {
    constructor(
        modelo: string,
        velocidadeMaxima: number
        ){
        super('Ferrari', modelo, velocidadeMaxima) //invoca o construtor da classe pai
    }
    //é possível 'alterarVelocidade' por ser protected
    public acelerar(): number {
        return this.alterarVelocidade(20)
    }

    public frear(): number {
        return this.alterarVelocidade(-15)
    }
}

const f40 = new Ferrari( 'F40', 324 )
console.log(`${f40.marca} ${f40.modelo}`)
console.log(f40.acelerar())
console.log(f40.frear())
