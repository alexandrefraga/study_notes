const os = require('os')
//os é um modulo do node, fornece vários métodos de utilitário relacionados ao sistema operacional


const valorDigitado='copo de vidro lant dt gol/voy cristal esq' 
const isAlphaNumeric = new RegExp('^[a-zA-Z0-9]{1,}$')
const isAlphaNumericSpace = new RegExp('^[a-zA-Z0-9 ]{1,}$')
const contemEspaco=new RegExp(' ')
const contemK=new RegExp('K|k').test(valorDigitado)//case sensitive
const contemX= (e)=>new RegExp('X|x').test(e)//case sensitive
const contem = (...params)=>new RegExp(`${params[0]}`).test(params[1])

const e1='lant'
const e2='dt'
const e3='gol'

const regra=`.*${e1}.*${e2}.*${e3}.*|.*${e1}.*${e3}.*${e2}.*|.*${e3}.*${e1}.*${e2}.*|.*${e3}.*${e2}.*${e1}.*|.*${e2}.*${e1}.*${e3}.*|.*${e2}.*${e3}.*${e1}.*`
const regra2=`.*[(${e1})].*`
const frase = new RegExp(regra,'i')//flag 'i' torna case insensitive

//console.log(frase)
const n = isAlphaNumeric.test(valorDigitado)
const m = isAlphaNumericSpace.test(valorDigitado)
const p = contemEspaco.test(valorDigitado)
const q = frase.exec(valorDigitado)

console.log(
  `is alpha numeric: ${n}${os.EOL}`,
  `is alpha numeric space: ${m}${os.EOL}`,
  `contem espaço: ${p}${os.EOL}`,
  `contem K: ${contemK}${os.EOL}`,
  `contem X: ${contemX('abx')}${os.EOL}`,
  `contem Y: ${contem('Y', 'KELLY')}${os.EOL}`,
  `frase: ${q}${os.EOL}`
)