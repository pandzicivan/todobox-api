const bcrypt = require('bcrypt');
const userService = require('./service');

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
      res.json(result);
    } catch (e) {
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
      res.json(result);
    } catch (e) {
      res.sendStatus(400);
    }
  }
}

module.exports = new UserController();
