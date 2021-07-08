main() {
  for (var i = 0; i < 10; i++) {
    print('i = $i');
  }

  //for in
  var notas = [8.9, 9.3, 7.8, 6.9, 9.1];
  for (var nota in notas) {
    print('nota: $nota');
  }

  //usando Map
  Map<String, double> notas2 = {'joao': 8.9, 'maria': 6.5, 'pedro': 7.1};
  for (String nome in notas2.keys) {
    print('Nome: $nome e a nota é: ${notas2[nome]}');
  }
  for (double nota in notas2.values) {
    print('Nota: $nota');
  }

  for (var registro in notas2.entries) {
    print('O ${registro.key} tem nota: ${registro.value}');
  }
}
