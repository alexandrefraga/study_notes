class RequiredFieldValidation {
  constructor ( input, fieldName) {
    this.input = input
    this.fieldName = fieldName
  }

  async validate () {
    return new Promise(resolve => {
      let response
      if (this.input[this.fieldName] === undefined) {
        response = new Error(`Missing parameter: ${this.fieldName}`)
      }
      resolve(response)
    })
  }
}

module.exports = RequiredFieldValidation