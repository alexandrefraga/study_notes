//tipos não declarados são inferidos na inicialização da váriável
//string
let nome = 'João' //inferido string
let sobrenome: string = 'Pedro'
console.log(nome, sobrenome)

//numbers
let idade = 27 //inferido number
//idade = 'Ana'
idade = 27.5
console.log(idade)

//boolean
let possuiHobbies = false //inferido boolean
console.log(possuiHobbies)

//tipos explícitos
let minhaIdade //declarada, mas não inicializada!! tipo implicito dinâmico ('any') igual JS
let diaNascimento: number = 16
minhaIdade = 27
console.log(typeof minhaIdade, typeof diaNascimento)
minhaIdade = '27'
console.log(typeof minhaIdade, typeof diaNascimento)

//array
let hobbies = ["cozinhar", "esportes"] //inferido array de strings
console.log(typeof hobbies, hobbies) //object
let cursos: string[] = ['java', 'html'] //array contendo somente strings
console.log(typeof cursos, cursos)
let dados: any[] = ['Alexandre', 45, true, {peso: 85}] //array contendo tipos dinâmicos
console.log(typeof dados, dados)

//tuplas
let endereco: [string, number] = ['Av. Brasil', 1200] //tipo array, tamanho 2, contendo string e number NESSA ORDEM!
console.log(typeof endereco, endereco)

//enums
enum Cor {
    Cinza, //0
    Verde, //1
    Azul = 100, //100
    Laranja, //101
    Amarelo = 10, //10
    Vermelho = 100, //100 embora seja igual ao azul não será bloqueado
    Branco = 2, //2 
}

let minhaCor: Cor = Cor.Verde
console.log('Enum minhaCor: ',minhaCor)
console.log('Enum minhaCor: ',Cor.Azul)
console.log('Enum minhaCor: ',Cor.Laranja)
console.log('Enum minhaCor: ',Cor.Azul, Cor.Vermelho)

//any 
let carro: any = 'BMW'
console.log(carro)
carro = { marca: 'BMW', ano: 2010 }
console.log(carro)

//funções
function retornaMeuNome(): string{ //ou seja, retorna uma string
    return nome
}
console.log(retornaMeuNome())

function digaOi(): void { //não retorna nada (void = vazio)
    console.log('Oi')
}
digaOi()

function multiplicar(a: number, b: number): number{ //tipada variáveis de entrada e retorno da função
    return a * b
}
console.log(multiplicar(3, 6))

//tipo função
let calculo: (x: number, y: number) => number //tipo função, que recebe dois parâmetros 'number'(obedece a ordem) e retorna 'number'
calculo = multiplicar
console.log(calculo(3, 6))

//objetos
let usuario = {
    nome: 'Joao',
    idade: 27
} //será inferido tipo 'object', os atributos(nome e idade) e os respectivos tipos
/* ou seja, igual a...
let usuario: { nome: string, idade: number}
*/
console.log(typeof usuario, typeof usuario.nome, typeof usuario.idade)

//tipos personalizados (Alias)
type Funcionaria = { supervisores:string[], baterPonto: (a:number) => string }

let funcionaria: Funcionaria = {
    supervisores: ['joao', 'Paulo'],
    baterPonto: (n: number): string => {
            if (n <=8 ) {
                return 'ponto normal'
            } else {
                return 'fora do horário'
            }
    }
}

console.log(funcionaria.supervisores)
console.log(funcionaria.baterPonto(9))

//Union Types
let nota: number | string = 10 //tipo number ou string
console.log(`Minha nota é ${nota}`)
nota = '20'
console.log(`Minha nota é ${nota}`)

//checando tipos
let valor = 30
if (typeof valor === "number") {
    console.log("É um number")
}

//tipo Never (nunca vai retornar ou retorna erro)
function falha(msg: string): never {
    throw new Error(msg)
}

const produto = {
    nome: 'sabao',
    preco: 2,
    validarProduto(){
        if(!this.nome || this.nome.trim().length == 0) {
            falha('Precisa ter um nome')
        }
        if(this.preco <= 0){
            falha('Preço inválido')
        }
    }
}

produto.validarProduto()

//null
let altura = 12 //inferido number
//altura = null (por padrão não é permitido, mas é configurável no tsconfig.json - não recomendado!)

let alturaOpcional: null | number = 12
alturaOpcional = null //ok

type Contato = {
    nome: string,
    tel1: string,
    tel2: string | null
}

const contato1: Contato = {
    nome: 'Fulano',
    tel1: '987654321',
    tel2: null
}
console.log(contato1.nome, contato1.tel1, contato1.tel2)

let podeSerNulo = null //tipo any
let deveSerNulo: null = null //tipo null (util apenas em Union)

