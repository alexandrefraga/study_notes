main() {
  List<int> entrada = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
  ];
  List resultado = [
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0]
  ];
  int linha = 0;
  int coluna = 0;

  for (var i = 0; i < 18; i++) {
    coluna = i - (linha * 6);
    resultado[linha][coluna] = entrada[i];
    if (i == 5 || i == 11) {
      linha++;
    }
  }
  print(resultado);
}
