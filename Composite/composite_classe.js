const fields = ['nome', 'email', 'password']

const data = {
    name: 'João',
    email: 'joao@mail.com',
    password: '123456',
    passwordConfirmation: '123456'
}

//classes
class RequiredFieldValidation {
    constructor (fieldName) {
        this.fieldName = fieldName
    }

    validate (input) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                let response = null    
                if (!input[this.fieldName]) {
                    response = new Error(this.fieldName)
                }
                resolve(response)
            }, 200);
        })
    }
}

class RequiredAndCompareFieldsValidation {
    constructor(field, fieldToCompareName) {
        this.field = field,
        this.fieldToCompareName = fieldToCompareName
    }

    validate(input) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                let response = null
                if(!input[this.field] || !input[this.fieldToCompareName]) {
                    response = new Error(`undefinded fields: ${ this.field } or ${ this.fieldToCompareName }`)
                } else {
                    if (input[this.field] !== input[this.fieldToCompareName]) {
                       result = new Error(this.fieldToCompareName)
                    }
                }
                resolve(response)
            }, 100)
        })
    }
}

class ValidationComposite {
    async validate (input) {
        const response = await Promise.all([
            new RequiredFieldValidation('email').validate(input),
            new RequiredAndCompareFieldsValidation('password', 'passwordConfirmation').validate(input)
        ])
        return Array.isArray(response) ? response.reduce((ac, e) => ac || e, null) : response
    }
}

class TesteValidationPromiseInController {
    validation
    constructor(validator){
        this.validation = validator
    }

    // teste (input) {
    //     this.validation.validate(input)
    //         .then(console.log)
    //         .then(() => { console.timeEnd('promise') })
    //         .catch(error => { 
    //             console.log(error)
    //             console.timeEnd('promise')
    //         })
    // }

    async teste (input) {
        const response = await this.validation.validate(input)
        console.log(response)
        console.timeEnd('promise')
    }
}
console.time('promise')
const t1 = new TesteValidationPromiseInController(new ValidationComposite())
t1.teste(data)


/* console.time('promise')
Validation(data)
    .then((r) => console.log(r))
    .then(() => { console.timeEnd('promise') })
    .catch(error => { 
        console.log(error)
        console.timeEnd('promise')
    }) */

// const result = [new Error('teste1'), null, null, new Error('teste2'), null]
// console.log(result.reduce((ac, e) => ac || e, null))