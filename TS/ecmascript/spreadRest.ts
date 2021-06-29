const numbers = [ 1, 10, 99, -5]
console.log(Math.max(...numbers))

const turmaA: string[] = ['João', 'Maria', 'Fernanda']
const turmaB: string[] = ['Fernando', 'Miguel', 'Lorena', ...turmaA]

function retornarArray(...args: number[]): number[] { //parâmetros agrupados em array de números, e retorna array de números
    return args
}

const numeros = retornarArray(1, 2, 3, 4, 5)
console.log(numeros)
console.log(retornarArray(...numbers))

//pode-se passar argumentos juntamente com spread, mas os argumentos devem ser passados primeiro!!
function retornarArray2(a: string, ...args: number[]): number[] {
    console.log(a)
    return args
}

//usando com tupla
const tupla: [number, string, boolean] = [1, 'abc', false]

function tuplaParam1(a: number, b: string, c: boolean): void {
    console.log(`1) ${a} ${b} ${c}`)
}

tuplaParam1(...tupla)

function tuplaParam2(...params: [number, string, boolean]){
    console.log(`2) ${params[0]} ${params[1]} ${params[2]}`)
}
tuplaParam2(...tupla)
