const data = {
    initialDate: new Date('2022-10-01 00:00:00'),
    finalDate: new Date('2023-03-31 23:59:59'),
    mesVenc: 0,
    diaVenc: 10,
    value: 55.99
}

const diasCorridos = (initialDate, finalDate) => ((finalDate - initialDate) / (1000 * 60 * 60 * 24));


function arredondar(value, deslocamento = 0) {
    return Math.round(value - deslocamento);
}
//console.log(arredondar(4.7, 0.2))


function bisesto(ano) {
    if ((ano % 4 == 0) && ((ano % 100 != 0) || (ano % 400 == 0))) {
        return true
    }
    return false;
}

function gerarVencimentos(data) {
    let result = []
    if(data.initialDate < data.finalDate) {
        let ano_inicial = data.initialDate.getFullYear(); // ano local
        let mes_inicial = parseInt(data.initialDate.getMonth())+1; // mês local
        
    
        let ano_final = data.finalDate.getFullYear(); // ano local
        let mes_final = parseInt(data.finalDate.getMonth())+1; // mês local
        
    
        const daysInterval = arredondar(diasCorridos(data.initialDate, data.finalDate))
        

        let time=0;
        for (let i= 0; time==0; i++) {
            if(mes_inicial > 12 ) { mes_inicial = 1; ano_inicial++ }
            if(mes_inicial == mes_final && ano_inicial == ano_final) { time=1 }

            let mes_vencimento = mes_inicial + data.mesVenc
            let ano_vencimento = ano_inicial
            if(mes_vencimento > 12) {
                mes_vencimento = 1;
                ano_vencimento++
            }
                        
            let vencimento = new Date(`${ano_vencimento}-${mes_vencimento}-${data.diaVenc}`)
            let competence = new Date(`${ano_inicial}-${mes_inicial}-15`)
            // console.log(vencimento)
            if(vencimento > data.initialDate && (competence < data.finalDate || daysInterval < 30)) {
                if(daysInterval < 30) { vencimento = data.initialDate }
                result.push({
                    vencimento,
                    competence,
                    value: data.value
                }) 
            }

            mes_inicial++
            
        }
        console.log(result, result.length)
        
    } else {
        console.log('intervalo de datas inválido')
    }
}



gerarVencimentos(data);






// console.log("UTC: ", new Date());
// console.log("UTC data inicial: ", new Date('2022-01-01 00:00:00'));
// console.log("UTC data final: ", new Date('2022-12-31 23:59:59'));
// console.log("UTC data final: ", new Date('2022-12-31 23:59:59').toLocaleDateString());
// console.log("Date string: ", new Date().toDateString());
// console.log("GMT string: ", new Date().toGMTString());
// console.log("Iso string: ", new Date().toISOString());
// console.log("JSON string: ", new Date().toJSON());
// console.log("Data Local: ", new Date().toLocaleDateString());
// console.log("Data e hora Local: ", new Date().toLocaleString());
// console.log("Hora Local: ", new Date().toLocaleTimeString());
// console.log("String data local: ", new Date().toString());
// console.log("UTC String data: ", new Date().toUTCString());
// console.log("valueOf data: ", new Date().valueOf());
// console.log("agora", Date.now());

// const final = new Date('2022-12-31 23:59:59')
// console.log(final.getFullYear())
// console.log(final.getMonth() +1)
// console.log(final.getDate())
