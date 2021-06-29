const { BuscaBinaria } = require('./busca-binaria')
const { Node } = require('./node')
console.log([1,2,3,4,5,6,7,8,9,10,11,12])

const arvore = new BuscaBinaria()
arvore.insert(11)
arvore.insert(15)
arvore.insert(10)
arvore.insert(9)
arvore.insert(5)
arvore.insert(8)
arvore.insert(17)
arvore.insert(13)

console.log(arvore)

const printNode = value => console.log(value)
const dataArray = []
const arrayResult = value => dataArray.push(value)
function arrayResult2(value) { dataArray.push(value) }

// arvore.inOrderTraverse(printNode)
// arvore.inOrderTraverse(arrayResult)

// arvore.preOrderTraverse(printNode)
// arvore.preOrderTraverse(arrayResult)

arvore.postOrderTraverse(printNode)
arvore.postOrderTraverse(arrayResult)

console.log(dataArray)