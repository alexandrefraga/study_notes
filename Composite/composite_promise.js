const fields = ['nome', 'email', 'password']

const data = {
    name: 'João',
    email: 'joao@mail.com',
    password: '123456',
    passwordConfirmation: '123456'
}


//PROMISE
function RequiredFieldValidation(input, fieldName){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!input[fieldName]) {
                reject(new Error(fieldName))
            }
            resolve(true)
        }, 100);
    })
}

function RequiredAndCompareFieldsValidation(input, field, fieldToCompareName) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(!input[field] || !input[fieldToCompareName]) {
                reject(new Error(`undefinded fields: ${ field } or ${ fieldToCompareName }`))
            } else {
                if (input[field] !== input[fieldToCompareName]) {
                   reject(new Error(fieldToCompareName))
                }
                resolve(true)
            }
        }, 100)
    })
}

function Validation(input){
    return Promise.all([
        RequiredFieldValidation(input, 'email'),
        RequiredAndCompareFieldsValidation(input, 'password', 'passwordConfirmation')
    ])
}

class TesteValidationPromise {
    validation
    constructor(validator){
        this.validation = validator
    }

    teste(input){
        this.validation(input)
            .then(console.log)
            .then(() => { console.timeEnd('promise') })
            .catch(error => { 
                console.log(error)
                console.timeEnd('promise')
            })
    }
}
console.time('promise')
const t1 = new TesteValidationPromise(Validation)
t1.teste(data)

/* console.time('promise')
Validation(data)
    .then((r) => console.log(r))
    .then(() => { console.timeEnd('promise') })
    .catch(error => { 
        console.log(error)
        console.timeEnd('promise')
    }) */

//FUNÇÕES 
function SRequiredFieldValidation(fieldName){
    return function(input){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (!input[fieldName]) {
                    reject(new Error(fieldName))
                }
                resolve()
            }, 100);
        })
    }
}

function SCompareFieldsValidation(field, fieldToCompareName) {
    return function(input){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (input[field] !== input[fieldToCompareName]) {
                    reject(new Error(fieldToCompareName))
                }
                resolve()
            }, 100);
        })    
    }
}

function ValidationComposite(validationsArray){
    return async function(input){
        const resultado = []
        for (const validation of validationsArray) {
            const error = await validation(input)
            if (error) {
                return error
            } 
            resultado.push('teste ok')
        }
        return resultado
    }
}

function makeLoginValidation(){
    const validations = []
    for (const field of ['email', 'password', 'passwordConfirmation']) {
      validations.push(SRequiredFieldValidation(field))
    }
    validations.push(SCompareFieldsValidation('password','passwordConfirmation'))
    return ValidationComposite(validations)
}
 
async function executar(fn, data){
    const resultado = fn()
    await resultado(data)
        .then(console.log)
        .then(() => { console.timeEnd('makeLogin') })
        .catch(error => { 
            console.log(error)
            console.timeEnd('makeLogin')
        })
}
/* console.time('makeLogin')
executar(makeLoginValidation, data) */
