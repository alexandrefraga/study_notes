let funcionario: { supervisores:string[], baterPonto: (a:number) => string }
funcionario = {
    supervisores: ['joao', 'Paulo'],
    baterPonto: (n: number): string => {
            if (n <=8 ) {
                return 'ponto normal'
            } else {
                return 'fora do horário'
            }
    }
}

console.log(funcionario.supervisores)
console.log(funcionario.baterPonto(9))