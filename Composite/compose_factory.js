const fields = ['nome', 'email', 'password']

const data = {
    name: 'João',
    email: 'joao@mail.com',
    password: '123456',
    passwordConfirmation: '123456'
}


/* função factory retorna objeto com validate() com fieldName carregado, para validar input,
  retornando erro se a field não esta presente */
function requiredFieldValidation(fieldName){
  return {
    validate: function(input){
      if (!input[fieldName]) {
        return new Error(fieldName)
      }
    }
  }  
}

/* função factory retorna objeto com validate() com fields carregadas, para validar input,
 retornando erro se as fields informadas tem valor diferente */
function compareFieldsValidation(field, fieldToCompareName) {
  return {
    validate: function(input){
      if (input[field] !== input[fieldToCompareName]) {
        return new Error(fieldToCompareName)
      }
    }
  }
}

/* função factory retorna objeto com validate() com array de validações, para validar input */
function validationComposite(validationsArray){
    return {
      validate: function(input){
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
}

/* cria um array de validações e insere em validateComposite, 
  retornando um objeto com validate(), para validar input */
function makeLoginValidation(){
    const validations = []
    for (const field of ['email', 'password']) {
      validations.push(requiredFieldValidation(field))
    }
    validations.push(compareFieldsValidation('password','passwordConfirmation'))
    return validationComposite(validations)
}

const validator = makeLoginValidation()
console.log(validator.validate(data))



