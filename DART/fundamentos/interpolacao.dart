main() {
  String nome = 'Joao';
  String status = 'aprovado';
  double nota = 9.2;
  Map mensalidade = {'valor': '690.85'};

  String frase1 =
      nome + ' esta ' + status + ' sua nota foi: ' + nota.toString();
  print(frase1);

  String frase2 =
      '$nome esta $status sua nota foi: $nota'; // toString automatico!!
  print(frase2);

  String frase3 = "$nome paga uma mensalidade de: ${mensalidade['valor']}";
  print(frase3);

  String frase4 = "Um sapato custa R\$ 59,00";
  print(frase4);

  print("1 + 1 = ${1 + 1}");
}
