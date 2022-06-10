const myTree = {}
function createArray(length) {
    let response = []
    for (let i = 0;  i < length; i++){
        response.push(Math.floor(Math.random() * (100000 - 0) + 0))
      
    }
    return response
}

const mockData = createArray(30)


function insert(tree, value) {
   if(tree.value){
       if(value > tree.value) {
           insert(tree.right, value)
       } else {
           insert(tree.left, value)
       }

   } else {
        tree.value = value
        tree.right = {}
        tree.left = {}
   }
}



mockData.forEach(v => insert(myTree, v))
//console.log(myTree)

function search(tree, value) {
    if(!tree.value || tree.value === value) {
        return tree.value
    }
    if(value < tree.value) {
        return search(tree.left, value)
    }
    return search(tree.right, value)
}

function preOrder(tree, order = []) {
    if(tree.value) order.push(tree.value)
    tree.left && preOrder(tree.left, order)
    tree.right && preOrder(tree.right, order)
    return order
}

function inOrder(tree, order=[]) {
    tree.left && inOrder(tree.left, order)
    if(tree.value) order.push(tree.value)
    tree.right && inOrder(tree.right, order)
    return order
}

function posOrder(tree, order=[]) {
    tree.left && posOrder(tree.left, order)
    tree.right && posOrder(tree.right, order)
    tree.right && inOrder(tree.right, order)
    return order
}

// console.log(search(myTree, mockData[27]))
// console.log(inOrder(myTree))
// console.log(posOrder(myTree))

