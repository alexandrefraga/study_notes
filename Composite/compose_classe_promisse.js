var fieldsT = ['nome', 'email', 'password'];
var dataTs = {
    name: 'João',
    email: 'joao@mail.com',
    password: '123456',
    passwordConfirmation: '123456'
};
//classes
var RequiredFieldValidationTs = /** @class */ (function () {
    function RequiredFieldValidationTs(fieldName) {
        this.fieldName = fieldName;
    }
    RequiredFieldValidationTs.prototype.validate = function (input) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                if (!input[_this.fieldName]) {
                    reject(new Error(_this.fieldName));
                }
                resolve();
            }, 100);
        });
    };
    return RequiredFieldValidationTs;
}());
var RequiredAndCompareFieldsValidationTs = /** @class */ (function () {
    function RequiredAndCompareFieldsValidationTs(field, fieldToCompareName) {
        this.field = field;
        this.fieldToCompareName = fieldToCompareName;
    }
    RequiredAndCompareFieldsValidationTs.prototype.validate = function (input) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                if (!input[_this.field] || !input[_this.fieldToCompareName]) {
                    reject(new Error("undefinded fields: " + _this.field + " or " + _this.fieldToCompareName));
                }
                else {
                    if (input[_this.field] !== input[_this.fieldToCompareName]) {
                        reject(new Error(_this.fieldToCompareName));
                    }
                    resolve();
                }
            }, 10);
        });
    };
    return RequiredAndCompareFieldsValidationTs;
}());
var ValidationTs = /** @class */ (function () {
    function ValidationTs() {
    }
    ValidationTs.prototype.validate = function (input) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, Promise.all([
                        new RequiredFieldValidationTs('email').validate(input),
                        new RequiredAndCompareFieldsValidationTs('password', 'passwordConfirmation').validate(input)
                    ])
                        .then(function (errors) { return errors.reduce(function (ac, e) {
                        if (e)
                            ac = e;
                        return ac;
                    }); })];
            });
        });
    };
    return ValidationTs;
}());
var TesteValidationPromiseInControllerTs = /** @class */ (function () {
    function TesteValidationPromiseInControllerTs(validation) {
        this.validation = validation;
    }
    TesteValidationPromiseInControllerTs.prototype.teste = function (input) {
        this.validation.validate(input)
            .then(function (error) {
            if (error) {
                console.log(error);
            }
        })
            .then(function () { console.timeEnd('promise'); })
            .catch(function (error) {
            console.log(error);
            console.timeEnd('promise');
        });
    };
    return TesteValidationPromiseInControllerTs;
}());
console.time('promise');
var t2 = new TesteValidationPromiseInControllerTs(new ValidationTs());
t2.teste(dataTs);
