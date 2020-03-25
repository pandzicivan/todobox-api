const bcrypt = require('bcrypt');
const userService = require('./service');
const User = require('./model');

class UserController {
  async register(req, res) {
    const {
      firstName,
      lastName,
      email,
      password,
    } = req.body;
    try {
      const result = await userService.register({
        firstName,
        lastName,
        email,
        password: bcrypt.hashSync(password, 10),
      });
      const user = userService.getUserById(result.insertId);
      const response = new User(user);
      res.json(response);
    } catch (e) {
      // TODO: Add proper error and log it
      res.sendStatus(400);
    }
  }

  async login(req, res) {
    const {
      email,
      password,
    } = req.body;

    try {
      const result = await userService.login({
        email,
        password: password,
      });
      req.session.user = new User(result);
      res.json(result);
    } catch (e) {
      // TODO: Add proper error and log it
      res.sendStatus(400);
    }
  }
}

module.exports = new UserController();
