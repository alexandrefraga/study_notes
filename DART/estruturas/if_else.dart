import 'dart:math';

main() {
  var nota = Random().nextInt(10);

  if (nota >= 7) {
    print('aprovado');
  } else if (nota > 5) {
    print('recuperação');
  } else {
    print('reprovado');
  }

  if (nota >= 7) print('aprovado');
}
