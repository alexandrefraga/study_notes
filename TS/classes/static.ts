//atributos e métodos estáticos

class Matematica {
    PI: number = 3.1416

    areaCirc(raio: number): number {
        return this.PI * raio * raio
    }
}

const m1 = new Matematica()
console.log(m1.areaCirc(4))

// #utilizando static...
class MatematicaStatic {
    static PI: number = 3.1416

    static areaCirc(raio: number): number {
        return this.PI * raio * raio
    }
}

console.log(MatematicaStatic.areaCirc(4)) //não é necessário estanciar a classe!!