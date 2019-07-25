const db = require('mariadb');
const settings = require('../../../settings');

class Database {
  constructor() {
    this.dbSettings = settings.db;
    this.db = null;
  }

  init() {
    this.db = db.createPool(this.dbSettings);
  }

  async getConnection() {
    return this.db.getConnection();
  }
}

module.exports = new Database;
