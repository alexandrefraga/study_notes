int soma(int a, int b) {
  return a + b;
}

int Function(int, int) soma1 = soma;

int Function(int, int) soma2 = (n1, n2) => soma(n1, n2);

final soma3 = (int x, int y) => soma(x, y);

final soma4 = soma;

main() {
  print(soma1(5, 6));
}
