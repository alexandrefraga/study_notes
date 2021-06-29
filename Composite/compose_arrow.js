const fields = ['nome', 'email', 'password']

const data = {
    name: 'João',
    email: 'joao@mail.com',
    password: '123456',
    passwordConfirmation: '123456'
}


/* função retorna outra função com fieldName carregado, para validar input,
  retornando erro se a field não esta presente */
const requiredFieldValidation = (fieldName) => (input) => {
  if (!input[fieldName]) {
    return new Error(fieldName)
  }
}

/* função retorna outra função com fields carregadas, para validar input,
 retornando erro se as fields informadas tem valor diferente */
const compareFieldsValidation = (field, fieldToCompareName) => (input) => {
  if (input[field] !== input[fieldToCompareName]) {
    return new Error(fieldToCompareName)
  }
}

/* função retorna outra função com array de validações, para validar input */
const validationComposite = (validationsArray) => (input) => {
  const resultado = []
  for (const validation of validationsArray) {
    const error = validation(input)
    if (error) {
      return error
    } 
    resultado.push('teste ok')
  }
  return resultado
}


//cria um array de validações e insere em validateComposite, retornando uma função para validar input   
const makeLoginValidation = () => {
  const validations = []
  for (const field of ['email', 'password']) {
    validations.push(requiredFieldValidation(field))
  }
  validations.push(compareFieldsValidation('password','passwordConfirmation'))
  return validationComposite(validations)
}

const validator = makeLoginValidation()
console.log(validator(data))



