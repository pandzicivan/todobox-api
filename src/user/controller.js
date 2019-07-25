const bcrypt = require('bcrypt');
const userService = require('./service');

class UserController {
  async register(req, res) {
    const {
      firstName,
      lastName,
      email,
      username,
      password,
    } = req.body;
    try {
      const result = await userService.register({
        firstName,
        lastName,
        email,
        username,
        password: bcrypt.hashSync(password, 10),
      });
      res.json(result);
    } catch (e) {
      res.sendStatus(400);
    }
  }

  login(req, res) {

  }
}

module.exports = new UserController();
