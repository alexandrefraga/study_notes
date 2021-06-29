function defaultCompare(a, b) {
  if (a === b) {
    return 0
  }
  return a < b ? -1 : 1
}

class Node {
  constructor(key) {
    this.key = key;
    this.left = undefined;
    this.right = undefined;
  }
  toString() {
    return `${this.key}`;
  }
}

class BuscaBinaria {
  constructor() {
    this.raiz = undefined;
  }
  compareFn(a, b) {
    if (a === b) { return 0 }
    return a < b ? -1 : 1
  }

  insert(key) {
    // special case: first key
    if (this.raiz == null) {
      this.raiz = new Node(key);
    } else {
      this.insertNode(this.raiz, key);
    }
  }
  insertNode(node, key) {
    if (this.compareFn(key, node.key) === -1) {
      if (node.left == null) {
        node.left = new Node(key);
      } else {
        this.insertNode(node.left, key);
      }
    } else if (node.right == null) {
      node.right = new Node(key);
    } else {
      this.insertNode(node.right, key);
    }
  }

  inOrderTraverse(callback) {
    /* carrega o nó e chama a função inOrderTraverseNode
     passando o nó e a callback */
    this.inOrderTraverseNode(this.raiz, callback);
  }
  inOrderTraverseNode(node, callback) {
    /* verifica se o nó não é nulo e aplica a recursão,
    analisando primeiro o nó a esquerda e depois a direita pra obter ordem crescente,
    já que assim foram inseridos conforme compareFn,
    o objetivo deste método é ordenar os dados*/
    if (node != null) {
      // executa recursão a esquerda (dados resultantes de compareFn = -1!!)
      this.inOrderTraverseNode(node.left, callback);
      callback(node.key);
      // executa recursão a esquerda (dados resultantes de compareFn = 1!!)
      this.inOrderTraverseNode(node.right, callback);
    }
  }

  preOrderTraverse(callback) {
    this.preOrderTraverseNode(this.raiz, callback);
  }
  preOrderTraverseNode(node, callback) {
    /* verifica se o nó não é nulo,
    executa a calback no próprio nó e depois aplica a recursão,
    primeiro a esquerda e depois a direita,
    o objetivo deste método é retornar a estrutura dos dados */
    if (node != null) {
      callback(node.key);
      this.preOrderTraverseNode(node.left, callback);
      this.preOrderTraverseNode(node.right, callback);
    }
  }

  postOrderTraverse(callback) {
    this.postOrderTraverseNode(this.raiz, callback);
  }
  
  postOrderTraverseNode(node, callback) {
    /* verifica se o nó não é nulo,
    aplica a recursão, primeiro a esquerda e depois a direita,
    e executa a callback */
    if (node != null) {
      this.postOrderTraverseNode(node.left, callback);
      this.postOrderTraverseNode(node.right, callback);
      callback(node.key);
    }
  }
}

module.exports = { BuscaBinaria }