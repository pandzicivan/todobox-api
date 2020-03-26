const QueryLoader = require('../common/helpers/queryLoader');
const path = require('path');
const queryDirPath = path.join(__dirname, 'db');
const db = require('../common/db/connection');
const bcrypt = require('bcrypt');

const query = new QueryLoader(queryDirPath);

class UserService {
  constructor() {
    this.queries = {};
    this.loadQueries();
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

      if (res.length < 1) {
        throw new Error('USER DOES NOT EXIST');
      }

      passwordMatch = await bcrypt.compare(password, res[0].password);
      if (passwordMatch) {
        return res[0];
      } else {
        throw new Error('CREDENTIALS DON`T MATCH');
      }
    } catch (err) {
      throw new Error(err);
    } finally {
      if (conn) conn.end();
    }
  }

  async getUserById(id) {
    let conn;

    try {
      conn = await db.getConnection();
      const res = await conn.query(this.queries.selectUserById, [
        id,
      ]);
      if (res.length < 1) {
        throw new Error('USER DOES NOT EXIST');
      }

      return res[0];
    } catch (err) {
      throw new Error(err);
    } finally {
      if (conn) conn.end();
    }
  }

  loadQueries() {
    this.queries.insertUser = query.load('insertUser');
    this.queries.selectUser = query.load('selectUser');
    this.queries.selectUserById = query.load('selectUserById');
  }
}

module.exports = new UserService();
