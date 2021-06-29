// Exercício 1 - Classe
    /* function Moto(nome) {
        this.nome = nome
        this.velocidade = 0
 
        this.buzinar = function() {
            console.log('Toooooooooot!')
        }
 
        this.acelerar= function(delta) {
            this.velocidade = this.velocidade + delta
        }
    } */
class Moto {
    public nome: string
    public velocidade: number
    constructor(
        nome: string,
        velocidade: number  = 0
    ){
        this.nome = nome
        this.velocidade = velocidade
        
    }
    buzinar(): void{
        console.log('Tooooot!')
    }

    acelerar(delta: number): void{
        this.velocidade += delta
    }

}
 
var moto = new Moto('Ducati')
moto.buzinar()
console.log(moto.velocidade)
moto.acelerar(30)
console.log(moto.velocidade)
 
// Exercício 2 - Refatorar usando Herança
/* var objeto2D = {
    base: 0,
    altura: 0
} */
abstract class Objeto2D {
    base: number = 0
    altura: number = 0
    abstract area(): number
}
class Retangulo extends Objeto2D {
    area(): number {
        return this.base * this.altura
    }
}
 
var retangulo = new Retangulo
retangulo.base = 5
retangulo.altura = 7
/* retangulo.area = function() {
    return this.base * this.altura
} */
console.log(retangulo.area())
 
// Exercício 3 - Refatorar usando Getters & Setters
    /* var estagiario = {
    _primeiroNome: ''
    }
    Object.defineProperty(estagiario, 'primeiroNome', {
        get: function () {
            return this._primeiroNome
        },
        set: function (valor) {
            if (valor.length >= 3) {
                this._primeiroNome = valor
            } else {
                this._primeiroNome = ''
            }
        },
        enumerable: true,
        configurable: true
    }) */

class Estagiario {
    private _primeiroNome: string = ''
   
    set primeiroNome(nome: string){
        if (nome.length >= 3) {
            this._primeiroNome = nome
        } else {
            this._primeiroNome = ''
        }
    }
    get primeiroNome(){
        return this._primeiroNome
    }
}
    
let estagiario = new Estagiario 
//implementação original...
console.log(estagiario.primeiroNome)
estagiario.primeiroNome = 'Le'
console.log(estagiario.primeiroNome)
estagiario.primeiroNome = 'Leonardo'
console.log(estagiario.primeiroNome)