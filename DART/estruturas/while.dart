import 'dart:io';

main() {
  // executar via linha de comando no terminal -> dart while.dart
  var digitado = '';

  while (digitado != 'sair') {
    stdout.write('Digite algo ou sair:');
    digitado = stdin.readLineSync().toString();
  }

  // do while
  digitado = '';
  do {
    stdout.write('Digite novamente ou sair:');
    digitado = stdin.readLineSync().toString();
  } while (digitado != 'sair'); //atenção ; no final!!!
}
