function falarDepoisDe(segundos, frase, simularErro) {
    return new Promise( (resolve, reject) => {
        //simular demora com setTimeOut
        setTimeout( () => {
            simularErro? reject('erro') : resolve(frase)
        }, segundos * 1000 )
    })
}
/*função
'resolve'é executada quando a promisse for atendida;
'reject' é executada quando ocorrer algum problema ou erro

'resolve' aceita passar somente um parâmetro; mas pode ser um objeto!
*/

//executando...
falarDepoisDe(5, 'Que legal!', false)
//acessar o resultado
    .then( function(res){ //exibindo o conteudo sem alterar
        console.log(res)
        return res
    } )    
    .then(frase => frase.concat('?!?'))//gera uma nova frase
    .then(outraFrase => console.log(outraFrase))//exibe o resultado encadeado
    .catch(e => console.log(e)) //tratamento de erro 'reject'