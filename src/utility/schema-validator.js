const Ajv = require('ajv');

const validator = new Ajv();

module.exports = {
  validateSchema(schema, data) {
    const validate = validator.compile(schema);
    const valid = validate(data);

    if (valid) return {valid: true};

    return {
      valid: false,
      msg: validator.errorsText(validate.errors),
    };
  },
};
