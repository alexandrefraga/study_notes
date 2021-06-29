
//namespaces podem ser aninhados, e seus namespace 'filhos' devem ser exportados, assim como suas funções quando públicas
/* 
    quando usado em arquivos diferentes, podem estes serem estancianos no index.html,
    compilados em único arquivo utilizando imports=reference, e/ou via linha de comando
 */
///<reference path="geometriaCirc.ts"/>
///<reference path="geometriaRet.ts"/>


/* namespace Geometria {
    export namespace Area {
        const PI = 3.14
        
        export function circunferencia(raio: number): number {
            return PI * Math.pow(raio, 2)
        }
        
        export function retangulo(base: number, altura: number): number {
            return base * altura
        }
    
    }
}
 */
//const PI = 2.99
console.log(Geometria.Area.circunferencia(10)) //PI= 3.14 definido no namespace Areas
console.log(Geometria.Area.retangulo(10, 20))
//console.log(PI)
