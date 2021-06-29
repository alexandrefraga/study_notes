//var
for (var i =0; i<10; i++) {
    console.log(i)
    
}
console.log("valor var fora do laço:" + i)

const funcs = []
for (var v =0; v <10; v++) {
    funcs.push(function(){
        console.log(v)
    })
    
}
funcs[2]() //10 
funcs[8]() //10






//let
for (let l =0; l<10; l++) {
    console.log(l)
    
}
//let não está disponível
//console.log("valor let fora do laço:" + l)

const funcs2 = []
for (let r =0; r <10; r++) {
    funcs2.push(function(){
        console.log(r)
    })
    
}
funcs2[2]()  //2
funcs2[8]()  //8
//verificar conceito de clousure