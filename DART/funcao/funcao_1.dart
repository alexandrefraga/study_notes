main() {
  saudacao() {
    print('oi');
  }

  saudacao();

  soma(int a, int b) {
    return a + b;
  }

  print(soma(1, 5));

  int subtrair(int a, int b) {
    return a - b;
  }

  print(subtrair(8, 3));

  void multiplicar(int a, int b) {
    print(a * b);
  }

  multiplicar(5, 7);
}
