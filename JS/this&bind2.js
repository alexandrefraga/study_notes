//1º exemplo: this sofre alteração, pois quem chama a função é setInterval em outro contexto
//ctrl+alt+m  ou ctrl+alt+n
function Pessoa(){
    this.idade = 0
    setInterval(function(){
        this.idade++
        console.log(`1º exemplo: ${this.idade}`)
    }, 1000)
}
new Pessoa
//2ºexemplo: this aponta para pessoa utilizando bind
function Pessoa2(){
    this.idade = 0
    setInterval(function(){
        this.idade++
        console.log(`2º exemplo: ${this.idade}`)
    }.bind(this), 1001)
}
new Pessoa2
//3ºexemplo: this é atribuido a uma constante
function Pessoa3(){
    this.idade = 0
    const self = this
    setInterval(function(){
        self.idade++
        console.log(`3º exemplo: ${self.idade}`)
    }, 1002)
}
new Pessoa3