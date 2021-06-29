"use strict";
//atributos e métodos estáticos
class Matematica {
    constructor() {
        this.PI = 3.1416;
    }
    areaCirc(raio) {
        return this.PI * raio * raio;
    }
}
const m1 = new Matematica();
console.log(m1.areaCirc(4));
// #utilizando static...
class MatematicaStatic {
    static areaCirc(raio) {
        return this.PI * raio * raio;
    }
}
MatematicaStatic.PI = 3.1416;
console.log(MatematicaStatic.areaCirc(4)); //não é necessário estanciar a classe!!
//# sourceMappingURL=static.js.map