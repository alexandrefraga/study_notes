const fields = ['nome', 'email', 'password']

const data = {
    name: 'João',
    email: 'joao@mail.com',
    password: '123456',
    passwordConfirmation: '123456'
}


//função construtora (classe), com método validate que retorna erro se a field não esta presente em input
function RequiredFieldValidation(fieldName){
  this.validate = function(input){
      if (!input[fieldName]) {
        return new Error(fieldName)
      }
  }
}

//função construtora (classe), com método validate que retorna erro se as fields informadas tem valor diferente em input
function CompareFieldsValidation(field, fieldToCompareName) {
  this.validate = function(input){
    if (input[field] !== input[fieldToCompareName]) {
      return new Error(fieldToCompareName)
    }
  }
}

/*
  função construtora (classe), com método validate que recebe um input,
  e aplica um array de validações, pois todos possuem o método validate
*/
function ValidationComposite(validationsArray){
    this.validate = function(input){
      const resultado = []
      for (const validation of validationsArray) {
        const error = validation.validate(input)
        if (error) {
          return error
        } 
        resultado.push('teste ok')
        }
      return resultado
    }
}

//cria um array de validações e insere em validateComposite, retornando uma função para validar input   
function makeLoginValidation(){
    const validations = []
    for (const field of ['email', 'password']) {
      validations.push(new RequiredFieldValidation(field))
    }
    validations.push(new CompareFieldsValidation('password','passwordConfirmation'))
    return new ValidationComposite(validations)
}

const validator = makeLoginValidation()
console.log(validator.validate(data))



