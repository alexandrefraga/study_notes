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

class ValidationBuilder {
    constructor( data ) {
      this._data = data,
      this._validators = []
    }
  
    static of (data) {
      return new ValidationBuilder(data)
    }

    requiredField(fieldName) {
      this._validators.push(new RequiredFieldValidation(fieldName).validate(this._data))
      return this
    }

    requiredAndCompareFields(fieldName, fieldToCompare) {
      this._validators.push(new RequiredAndCompareFieldsValidation(fieldName, fieldToCompare).validate(this._data))
      return this
    }
    
    build() {
      return this._validators
    }
}

class TesteValidationBuilderInController {
    constructor(){}

    async execute(input) {
      const error = await this.validate(input)
      if(error) {
        console.log('Ocorreu um erro de validação', error)
      } else {
        console.log('seguir execução...')
      }
      console.timeEnd('promise')
    }

    async validate (input) {
      const response = await Promise.all(
        ValidationBuilder.of(input)
          .requiredField('name')
          .requiredField('email')
          .requiredAndCompareFields('password', 'passwordConfirmation')
          .build()
      )
      return Array.isArray(response) ? response.reduce((ac, e) => ac || e, null) : response
    }
}

console.time('promise')
const t1 = new TesteValidationBuilderInController()
t1.execute(data)


