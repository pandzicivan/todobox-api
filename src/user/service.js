const QueryLoader = require('../common/helpers/queryLoader');
const path = require('path');
const queryDirPath = path.join(__dirname, 'db');
const db = require('../common/db/connection');
const bcrypt = require('bcrypt');

const query = new QueryLoader(queryDirPath);

class UserService {
  constructor() {
    this.queries = {};
    this._loadQueries();
  }

  async register(payload) {
    let conn;
    let res;
    const {
      firstName,
      lastName,
      email,
      password,
    } = payload;

    try {
      conn = await db.getConnection();
      res = await conn.query(this.queries.insertUser, [
        firstName,
        lastName,
        email,
        password,
      ]);
      return res;
    } catch (err) {
      throw new Error(err);
    } finally {
      if (conn) conn.end();
    }
  }

  async login(payload) {
    let conn;
    let res;
    let passwordMatch;
    const {
      email,
      password,
    } = payload;

    try {
      conn = await db.getConnection();
      res = await conn.query(this.queries.selectUser, [
        email,
      ]);

      if (res[1].length < 1) {
        throw new Error('USER DOES NOT EXIST');
      }

      passwordMatch = await bcrypt.compare(password, res[1][0].password);
      if (passwordMatch) {
        return res;
      } else {
        throw new Error('CREDENTIALS DON`T MATCH');
      }
    } catch (err) {
      throw new Error(err);
    } finally {
      if (conn) conn.end();
    }
  }

  _loadQueries() {
    this.queries.insertUser = query.load('insertUser');
    this.queries.selectUser = query.load('selectUser');
  }
}

module.exports = new UserService();
