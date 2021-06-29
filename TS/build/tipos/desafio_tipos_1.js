"use strict";
var funcionario;
funcionario = {
    supervisores: ['joao', 'Paulo'],
    baterPonto: function (n) {
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