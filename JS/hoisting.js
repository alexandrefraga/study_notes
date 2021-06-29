/*hosting é o issamento de var, não ocorre com let!
move a declaração de var para o topo
*/
console.log('a=', a) // undefined! mas existe!!
var a = 2
console.log('a=', a)

console.log('b=', b) //b is not defined
let b = 3
console.log('b=', b)

console.log('c=', c) //c is not defined
const c = 3
console.log('c=', c)