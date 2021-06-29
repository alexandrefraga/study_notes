main() {
  var variavelTipoInferido = 'inferiu tipo String';
  /* variavelTipoInferido = 2;  erro! tipo já foi inferido!! */
  print(variavelTipoInferido);
  print(variavelTipoInferido.runtimeType); //string
  print(variavelTipoInferido is String); //true

  // declarando com tipo...
  int variavelTipoInteiro = 1;
  double variavelTipoDouble = 3.1416;

  print(variavelTipoInteiro);
  print(variavelTipoDouble);

  //Constantes const x final
  const constanteAtribuidaNaCompilacao =
      3.1416; //não será atribuida na execução do programa!
  print(constanteAtribuidaNaCompilacao);

  final constanteAtribuidaEmExecucao =
      'será atribuída em execução, como resultado da execução do código';
  print(constanteAtribuidaEmExecucao);

  // constantes....
  final lista = ['Ana', 'Luiza', 'Lia'];
  lista.add('João'); //ok!
  // lista = ['banana', 'uva']; erro!!!!

  final listaFinal = const ['Pedro', 'Paulo'];
  // listaFixa.add('Luis'); erro!!!
  print(listaFinal); // ['Pedro', 'Paulo']

  var listaVar = const ['Julio', 'Andre'];
  listaVar = ['Julia', 'Maria'];
  print(listaVar); // ['Julia', 'Maria']

  const listaConst = ['Jose', 'Maria'];
  // listaConst.add('Pablo'); erro!!!
  // listaConst = ['Nereu', 'Marcelo']; erro!!!
  print(listaConst);
}
