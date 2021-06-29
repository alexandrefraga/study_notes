function gerar(){
    var texto = "";
    var tamanho = 5;
    var caracteres = "abcde";

    for( var i=0; i < tamanho; i++ )
     texto += caracteres.charAt(Math.floor(Math.random() * caracteres.length));

   return texto;
}
//console.log(gerar())

///
var  x = [ "Time 1", "Time 2", "Time 3", "Time 4" ]
//console.log(x)
combinations = [];
for(let i = 0; i < x.length; ++i) {
    for(let j = i + 1; j < x.length; ++j) {
        combinations.push([ x[i], x[j] ]);
    }
}
console.log(combinations)