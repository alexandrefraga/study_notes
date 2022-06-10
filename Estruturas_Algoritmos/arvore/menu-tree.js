const accounts = [
    { id: 3, parent: 1, sequence: '1' , account: 'Circulante', type: 'sintetica'},
    { id: 4, parent: 3, sequence: '1' , account: 'Caixa', type: 'analitica'},
    { id: 2, parent: null , sequence: '2' , account: 'Passivo', type: 'sintetica'},
    { id: 1, parent: null, sequence: '1' , account: 'Ativo', type: 'sintetica'},
    { id: 5, parent: 3, sequence: '2' , account: 'Banco', type: 'sintetica'},
    { id: 7, parent: 1, sequence: '2' , account: 'Imobilizado', type: 'sintetica'},
    { id: 10, parent: 7, sequence: '2', account: 'Imóveis', type: 'analitica'},
    { id: 9, parent: 7, sequence: '1', account: 'Móveis', type: 'analitica'},
    { id: 8, parent: 2, sequence: '2' , account: 'Fornenedores', type: 'sintetica'},
    { id: 6, parent: 2, sequence: '1' , account: 'Impostos', type: 'sintetica'},
    { id: 11, parent: 2, sequence: '3' , account: 'Patrimonio Liquido', type: 'sintetica'},
    { id: 12, parent: 11, sequence: '1' , account: 'Lucro Acumulado', type: 'analitica'},
    { id: 13, parent: null, sequence: '3' , account: 'Resultado', type: 'sintetica'},
    { id: 14, parent: 13, sequence: '1' , account: 'Receitas', type: 'analitica'},
    { id: 15, parent: 13, sequence: '25' , account: 'Despesas', type: 'analitica'},
    { id: 16, parent: 5, sequence: '1' , account: 'Banrisul', type: 'analitica'},
    { id: 17, parent: 5, sequence: '2' , account: 'Itau', type: 'analitica'},
];

function addPath(account, i, arrayData = []) {
    if(account.parent) {
        let parent = arrayData.find(data => data.id === account.parent)
        parent = addPath(parent, i,arrayData);
        account.path = `${parent.path}.${
            account.type === 'analitica' & account.sequence.length === 1
            ? `0${account.sequence}`
            : account.sequence
        }`;
    } else {
        account.path = account.sequence
    }
    return account;
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