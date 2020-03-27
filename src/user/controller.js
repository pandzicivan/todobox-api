const bcrypt = require('bcrypt');
const userService = require('./service');
const User = require('./model');
const {validateSchema} = require('../utility/schema-validator');
const {registerSchema, loginSchema} = require('./schema');
const Exception = require('../common/exceptions/model');

class UserController {
  async register(req, res) {
    const {
      firstName,
      lastName,
      email,
      password,
      repeatPassword,
    } = req.body;
    const validatedPayload = validateSchema(registerSchema, req.body);
    if (!validatedPayload.valid) {
      const exception = new Exception('MISSING_PARAMS', validatedPayload.msg);
      res.status(exception.httpCode).send(exception);
      return;
    }
    if (password !== repeatPassword) {
      const exception = new Exception('WRONG_PARAMS', 'Passwords do not match');
      res.status(exception.httpCode).send(exception);
    }

    try {
      const result = await userService.register({
        firstName,
        lastName,
        email,
        password: bcrypt.hashSync(password, 10),
      });
      const user = await userService.getUserById(result.insertId);
      const response = new User(user);
      res.json(response);
    } catch (e) {
      res.status(e.httpCode).send(e);
    }
  }

  async login(req, res) {
    const {
      email,
      password,
    } = req.body;
    const validatedPayload = validateSchema(loginSchema, req.body);
    if (!validatedPayload.valid) {
      const exception = new Exception('UNAUTHORIZED', validatedPayload.msg);
      res.status(exception.httpCode).send(exception);
      return;
    }

    try {
      const result = await userService.login({
        email,
        password: password,
      });
      req.session.user = new User(result);
      res.json(result);
    } catch (e) {
      res.status(e.httpCode).send(e);
    }
  }
}

module.exports = new UserController();
