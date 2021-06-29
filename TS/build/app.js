"use strict";
//impede compliação com erro ("noEmitOnError": true,)
var canal = 'Gaveta';
var inscritos = 610234;
//canal = inscritos (erro!)
console.log("Canal = " + canal);
function soma(a, b) { return a + b; }
//o ts analisa o código, e infere 'any' sem mostrar erro ("noImplicitAny": true,)
var qualquerCoisa;
qualquerCoisa = 12;
qualquerCoisa = 'abc';
//analisa possivel retorno null não desejado ("strictNullChecks": true)
//parametro não utilizado ("noUnusedParameters": true,)
//variável local não utilizada ("noUnusedLocals": true,)
function saudar(isManha) {
    //let w: number = 1
    var saudacao;
    if (isManha) {
        saudacao = 'bom dia';
    }
    else {
        saudacao = 'sem essa declaração, indicaria erro, pois haveria a possibilidade de retornar null';
    }
    return saudacao;
}
var a = 'Teste de TS!!!';
console.log(a);
/*
compilar manualmente no terminal:
    tsc nomedoarquivo.ts (gerar arquivo nomedoarquivo.js)
compilar com watch
    tsc -w (na raiz do projeto)
    ctrl+c (interrompe watch)
*/ 
var funcionario;
funcionario = {
    supervisores: ['joao', 'Paulo'],
    baterPonto: function (n) {
        if (n <= 8) {
            return 'ponto normal';
        }
        else {
            return 'fora do horário';
        }
    }
};
console.log(funcionario.supervisores);
console.log(funcionario.baterPonto(9));
var contaBancaria = {
    saldo: 3456,
    depositar: function (valor) {
        this.saldo += valor;
    }
};
var correntista = {
    nome: 'Ana Silva',
    contaBancaria: contaBancaria,
    contatos: ['34567890', '98765432']
};
correntista.contaBancaria.depositar(3000);
console.log(correntista);
//tipos não declarados são inferidos na inicialização da váriável
//string
var nome = 'João'; //inferido string
var sobrenome = 'Pedro';
console.log(nome, sobrenome);
//numbers
var idade = 27; //inferido number
//idade = 'Ana'
idade = 27.5;
console.log(idade);
//boolean
var possuiHobbies = false; //inferido boolean
console.log(possuiHobbies);
//tipos explícitos
var minhaIdade; //declarada, mas não inicializada!! tipo implicito dinâmico ('any') igual JS
var diaNascimento = 16;
minhaIdade = 27;
console.log(typeof minhaIdade, typeof diaNascimento);
minhaIdade = '27';
console.log(typeof minhaIdade, typeof diaNascimento);
//array
var hobbies = ["cozinhar", "esportes"]; //inferido array de strings
console.log(typeof hobbies, hobbies); //object
var cursos = ['java', 'html']; //array contendo somente strings
console.log(typeof cursos, cursos);
var dados = ['Alexandre', 45, true, { peso: 85 }]; //array contendo tipos dinâmicos
console.log(typeof dados, dados);
//tuplas
var endereco = ['Av. Brasil', 1200]; //tipo array, tamanho 2, contendo string e number NESSA ORDEM!
console.log(typeof endereco, endereco);
//enums
var Cor;
//enums
(function (Cor) {
    Cor[Cor["Cinza"] = 0] = "Cinza";
    Cor[Cor["Verde"] = 1] = "Verde";
    Cor[Cor["Azul"] = 100] = "Azul";
    Cor[Cor["Laranja"] = 101] = "Laranja";
    Cor[Cor["Amarelo"] = 10] = "Amarelo";
    Cor[Cor["Vermelho"] = 100] = "Vermelho";
    Cor[Cor["Branco"] = 2] = "Branco";
})(Cor || (Cor = {}));
var minhaCor = Cor.Verde;
console.log('Enum minhaCor: ', minhaCor);
console.log('Enum minhaCor: ', Cor.Azul);
console.log('Enum minhaCor: ', Cor.Laranja);
console.log('Enum minhaCor: ', Cor.Azul, Cor.Vermelho);
//any 
var carro = 'BMW';
console.log(carro);
carro = { marca: 'BMW', ano: 2010 };
console.log(carro);
//funções
function retornaMeuNome() {
    return nome;
}
console.log(retornaMeuNome());
function digaOi() {
    console.log('Oi');
}
digaOi();
function multiplicar(a, b) {
    return a * b;
}
console.log(multiplicar(3, 6));
//tipo função
var calculo; //tipo função, que recebe dois parâmetros 'number'(obedece a ordem) e retorna 'number'
calculo = multiplicar;
console.log(calculo(3, 6));
//objetos
var usuario = {
    nome: 'Joao',
    idade: 27
}; //será inferido tipo 'object', os atributos(nome e idade) e os respectivos tipos
/* ou seja, igual a...
let usuario: { nome: string, idade: number}
*/
console.log(typeof usuario, typeof usuario.nome, typeof usuario.idade);
var funcionaria = {
    supervisores: ['joao', 'Paulo'],
    baterPonto: function (n) {
        if (n <= 8) {
            return 'ponto normal';
        }
        else {
            return 'fora do horário';
        }
    }
};
console.log(funcionaria.supervisores);
console.log(funcionaria.baterPonto(9));
//Union Types
var nota = 10; //tipo number ou string
console.log("Minha nota \u00E9 " + nota);
nota = '20';
console.log("Minha nota \u00E9 " + nota);
//checando tipos
var valor = 30;
if (typeof valor === "number") {
    console.log("É um number");
}
//tipo Never (nunca vai retornar ou retorna erro)
function falha(msg) {
    throw new Error(msg);
}
var produto = {
    nome: 'sabao',
    preco: 2,
    validarProduto: function () {
        if (!this.nome || this.nome.trim().length == 0) {
            falha('Precisa ter um nome');
        }
        if (this.preco <= 0) {
            falha('Preço inválido');
        }
    }
};
produto.validarProduto();
//null
var altura = 12; //inferido number
//altura = null (por padrão não é permitido, mas é configurável no tsconfig.json - não recomendado!)
var alturaOpcional = 12;
alturaOpcional = null; //ok
var contato1 = {
    nome: 'Fulano',
    tel1: '987654321',
    tel2: null
};
console.log(contato1.nome, contato1.tel1, contato1.tel2);
var podeSerNulo = null; //tipo any
var deveSerNulo = null; //tipo null (util apenas em Union)
//# sourceMappingURL=app.js.map