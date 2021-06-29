"use strict";
let funcionario;
funcionario = {
    supervisores: ['joao', 'Paulo'],
    baterPonto: (n) => {
        if (n <= 8) {
            return 'ponto normal';
        }
        else {
            return 'fora do horário';
        }
    }
};
console.log(funcionario.supervisores);
console.log(funcionario.baterPonto(9));
//# sourceMappingURL=desafio_tipos_1.js.map