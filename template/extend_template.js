const Template = require('./template')
const RequiredFieldValidation = require('./requiredFiledValidation')

class ExtendTemplate extends Template {
  constructor (dependency) {
    super()
    this.dependency = dependency
  }

  async perform (dataObj){
    try {
      const response = await this.dependency(dataObj)
      return { statusCode: 200, data: response }
    } catch (error){
      return {
        statusCode: 500,
        data: error
      }
    }
  }

  buildValidators (dataObj){
    return [ new RequiredFieldValidation(dataObj, 'field') ]
  }
}

module.exports = ExtendTemplate