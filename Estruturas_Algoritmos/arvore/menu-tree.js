const { accounts } = require('./menu.data');

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

// let tree = {
//     left: undefined,
//     right: undefined,
//     value: undefined
// }

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

function run(accounts, fnAccountMap, nExec = 1) {
    for (let i = 0; i < nExec; i++) {
        let tree = {
            left: undefined,
            right: undefined,
            value: undefined
        }
        const accountWithPath = accounts.map(fnAccountMap)
        accountWithPath.forEach(e => insert(tree, e))
        accounts = inOrder(tree)
    }
    return accounts;
}


var inicio = performance.now();
const inOrderAccountsWithPath = run(accounts, addPath, 100);
console.log("Tempo de execução: ",performance.now() - inicio);

inOrderAccountsWithPath.forEach((e, i) => console.log(`${i + 1}) ${e.path} ${e.account}`))