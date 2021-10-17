class Template {
  perform (dataObj) { return 'null'}

  buildValidators (dataObj) { return [] }

  async handle (dataObj) {
    try {
      const error = await this._validate(dataObj)
      if (error !== undefined) {
        return { statusCode: 400, data: error.message }
      }
      return await this.perform(dataObj)
    } catch (error) {
      return { statusCode: 500, data: error.message }
    }
  }

  async _validate (dataObj) {
    const promises = this.buildValidators(dataObj).map(async v => await v.validate())
    const response = await Promise.all(promises)
    const errorOrUndefined = Array.isArray(response) ? response.reduce((ac, e) => ac ?? e, undefined) : response
    return errorOrUndefined
  }
}

module.exports = Template