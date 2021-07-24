int Function(int, int) adicao = (int a, int b) {
  return a + b;
};

int Function(int, int) subtracao = (int a, int b) => a - b;

final divisao = (int a, int b) => a / b; //divisão retorna double
main() {
  print(adicao(5, 4));
  print(subtracao(10, 3));
}
