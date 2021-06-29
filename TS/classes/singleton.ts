// Construtor Privado & Singleton

//Singleton
class Unico {
    private static instance: Unico = new Unico
    private constructor (){}

    static getInstance(): Unico {
        return Unico.instance
    }

    agora(){
        return new Date
    }

}

//const errado = new Unico()   construtor é privado!!
console.log(Unico.getInstance().agora())

//atributos somente leitura, ou seja, é atribuido somente na inicialização dentro do construtor
class Aviao {
    public readonly modelo: string

    constructor(
        modelo: string,
        public readonly prefixo: string
        ){
        this.modelo = modelo
    }
}

const turboHelice = new Aviao('Tu-114', 'PT-abc')
//turboHelice.modelo = 'DC-8' //erro: modelo read-only
//turboHelice.prefixo = 'PT-def' //erro: prefixo read-only
console.log(turboHelice)