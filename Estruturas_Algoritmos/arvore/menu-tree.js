const accounts = [
    { id: 3, parent: 1, sequence: '1' , account: 'Circulante'},
    { id: 4, parent: 3, sequence: '1' , account: 'Caixa'},
    { id: 2, parent: null , sequence: '2' , account: 'Passivo'},
    { id: 1, parent: null, sequence: '1' , account: 'Ativo'},
    { id: 5, parent: 3, sequence: '2' , account: 'Banco'},
    { id: 7, parent: 1, sequence: '2' , account: 'Imobilizado'},
    { id: 10, parent: 7, sequence: '2', account: 'Imóveis'},
    { id: 8, parent: 2, sequence: '2' , account: 'Fornenedores'},
    { id: 6, parent: 2, sequence: '1' , account: 'Impostos'},
    { id: 9, parent: 7, sequence: '1' , account: 'Móveis'},
    
];

function addPath(account, i, arrayData = []) {
    if(!account.parent) {
        account.path = account.sequence
        return account;
    } else {
        let parent = arrayData.find(data => data.id === account.parent)
        if(parent.parent) {
            const newParent = addPath(parent, i,arrayData);
            account.path = `${newParent.path}.${account.sequence}`;
            return account;
        } else {
            account.path = `${parent.sequence}.${account.sequence}`;
            return account;
        }
    }
}

const accountWithPath = accounts.map(addPath) 

let tree = {
    left: undefined,
    right: undefined,
    value: undefined
}

function insert(tree, value) {
    if(tree.value){
        if(value.path > tree.value.path) {
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

function inOrder(tree, res = []) {
    tree.left && inOrder(tree.left, res)
    if (tree.value ) {
        res.push(tree.value)
    }
    tree.right && inOrder(tree.right, res)
    return res;
}

accountWithPath.forEach(e => insert(tree, e))
const listaOrdenada = inOrder(tree);
listaOrdenada.forEach(e => console.log(`${e.path} ${e.account}`));