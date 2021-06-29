const valor = "Global"

function minhaFuncao(ordemExecucao = 'minhaFuncao'){
    console.log(`Chamada de execução da função ${ordemExecucao}; Valor é: ${valor}`)
}

function exec(){
    const valor = "Local"
    console.log(`valor dentro da função exec: ${valor}`)
    minhaFuncao('exec')
}

minhaFuncao()
exec()

