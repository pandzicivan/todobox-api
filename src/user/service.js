const QueryLoader = require('../common/helpers/queryLoader');
const path = require('path');
const queryDirPath = path.join(__dirname, 'db');
const db = require('../common/db/connection');

const query = new QueryLoader(queryDirPath);

class UserService {
  constructor() {
    this.queries = {};
    this._loadQueries();
  }

  async register(payload) {
    let conn;
    const {
      firstName,
      lastName,
      email,
      password,
    } = payload;

    try {
      conn = await db.getConnection();
      const res = await conn.query(this.queries.insertUser, [
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

  async login() {

  }

  _loadQueries() {
    this.queries.insertUser = query.load('insertUser');
  }
}

module.exports = new UserService();
