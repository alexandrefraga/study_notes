const fieldsT = ['nome', 'email', 'password']

const dataTs = {
    name: 'João',
    email: 'joao@mail.com',
    password: '123456',
    passwordConfirmation: '123456'
}

interface Validation {
    validate (input: any): Promise<Error>
  }

//classes
class RequiredFieldValidationTs implements Validation {
    constructor (private fieldName: string) {}

    validate (input: any): Promise<Error> {
        return new Promise((resolve, reject) => {
           setTimeout(() => {
               if (!input[this.fieldName]) {
                   reject(new Error(this.fieldName))
               }
                resolve(null)
           }, 100);
        })
    }
}

class RequiredAndCompareFieldsValidationTs implements Validation {
    constructor(private field: string, private fieldToCompareName: string) {}

    validate (input: any): Promise<Error> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if(!input[this.field] || !input[this.fieldToCompareName]) {
                    reject(new Error(`undefinded fields: ${ this.field } or ${ this.fieldToCompareName }`))
                } else {
                    if (input[this.field] !== input[this.fieldToCompareName]) {
                       reject(new Error(this.fieldToCompareName))
                    }
                    resolve()
                }
            }, 10)
        })
    }
}

class ValidationTs implements Validation {
    async validate(input: any): Promise<Error> {
        return Promise.all([
            new RequiredFieldValidationTs('email').validate(input),
            new RequiredAndCompareFieldsValidationTs('password', 'passwordConfirmation').validate(input)
        ])
        .then(
            (errors) => errors.reduce((ac, e) => {
                if(e) ac = e
                return ac
            })
        )
    }
}

class TesteValidationPromiseInControllerTs {
    constructor(private validation: any){}

    teste (input: any) {
        this.validation.validate(input)
            .then( (error: Error) => {
                    if(error) {
                        console.log(error)
                    }
                }
            )
            .then(() => { console.timeEnd('promise') })
            .catch((error: Error) => { 
                console.log(error)
                console.timeEnd('promise')
            })
    }
}
console.time('promise')
const t2 = new TesteValidationPromiseInControllerTs(new ValidationTs())
t2.teste(dataTs)