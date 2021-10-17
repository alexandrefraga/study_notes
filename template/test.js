const assert = require('assert/strict')
const ExtendTemplate = require('./extend_template')
const RequiredFieldValidation = require('./requiredFiledValidation')

const input = { field: 'any_value'}
const requiredValidation = new RequiredFieldValidation(input, 'field')

let sut = new ExtendTemplate(() => 'response')
let promise = sut.handle(input)
promise.then((response) => {
  const tests = [
    () => assert.deepStrictEqual(requiredValidation, sut.buildValidators(input)[0], 'should validate an required field'),
    () => assert.deepStrictEqual({ statusCode: 200, data: 'response' }, response, 'shoul return 200 on success')
  ]

  tests.forEach( test => {
    try {     
      test()
      console.log('ok')
    } catch(e) {
      console.log(`fail: ${e.message}`);
    }
  })
})