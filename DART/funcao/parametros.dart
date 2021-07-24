import 'dart:math';

int numeroAleatorio(int maximo) {
  return Random().nextInt(maximo);
}

//Parâmetro opcional entre colchetes, com valor padrão
int numeroAleatorio2([int maximo = 100]) {
  return Random().nextInt(10);
}

imprimirData([int dia = 1, int mes = 1, int ano = 1970]) {
  print('$dia/$mes/$ano');
}

imprimirData2(int dia, [int mes = 1, int ano = 1970]) {
  print('$dia/$mes/$ano');
}

//Parâmetros nomeados obrigatórios
saudarPessoa1({required String nome, required int idade}) {
  print("Olá $nome voce tem $idade anos");
}

//Parâmetro nomeados com valor padrão
saudarPessoa2({String nome = 'amigo', int idade = 50}) {
  print("Olá $nome voce tem $idade anos");
}

main() {
  // int n1 = numeroAleatorio(100);
  // print(n1);

  // imprimirData();
  // imprimirData(15, 07);
  // imprimirData(24, 12, 1990);
  // imprimirData2(21);
  saudarPessoa1(nome: 'Alexandre', idade: 46);
  saudarPessoa1(idade: 55, nome: 'Pedro');
  saudarPessoa2();
}
