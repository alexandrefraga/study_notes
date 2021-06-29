import 'dart:io';

/* 
 Arquivo deve ser executado via linha de comando no terminal; não usar code runner!
 -> dart entradaTeclado.dart
*/
main() {
  // Área da circunferência = PI * raio * raio
  const double PI = 3.1416;
  /* 
    String? textoDigitado = stdin.readLineSync(); //retorna tipo String
    nullSafety ? no tipo, converte pra string caso não seja
    nullSafety ! após a função converte antes de atribuir
  */
  stdout.write("Informe o raio: ");
  String textoDigitado = stdin.readLineSync()!;
  // print(textoDigitado.runtimeType);
  final double raio = double.parse(textoDigitado);

  print('A área é ${PI * raio * raio}');
}
