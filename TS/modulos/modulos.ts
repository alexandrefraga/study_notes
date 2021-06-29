/* os navegadores não interpretam o sistema de modulos, no curso usa systemjs@0.21.6 nos exercícios
    este é um cenário de estudos, no backend o sistema de modulos é interpretado e profissionalmente
    outras ferramentas são usadas
    o sistemjs usa apenas compilação commonsjs
*/

//import { areaRetangulo } from './retangulo'   //uso na origem de 'exports'
import retang from './retangulo'             //uso na origem de 'exports default!'
import { areaCircunferencia as circ } from './circunferencia' //uso na origem de 'exports'

console.log(retang(7, 8))
console.log(circ(2))

//npm i -s @types/node
const { digaOi } = require('./novo')
console.log(digaOi('Ana'))