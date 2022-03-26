const myTree = {}

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

function createArray(length) {
    let response = []
    for (let i = 0;  i < length; i++){
        response.push(Math.floor(Math.random() * (100000 - 0) + 0))
      
    }
    return response
}

const mockData = createArray(100)

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

console.log(search(myTree, mockData[80]))

