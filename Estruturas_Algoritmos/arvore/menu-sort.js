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

function run(accounts, fnAccountMap, nExec = 1) {
    let response;
    for (let i = 0; i < nExec; i++) {
        response = [...accounts].map(fnAccountMap).sort(function(a,b) {
            return a.path < b.path ? -1 : a.path > b.path ? 1 : 0;
        });
    }
    return response;
}


var inicio = performance.now();
const inOrderAccountsWithPath = run(accounts, addPath, 100);
console.log("Tempo de execução: ",performance.now() - inicio);

inOrderAccountsWithPath.forEach(e => console.log(`${e.path} ${e.account}`));



