const redis = require('redis');
const settings = require('../../../settings');

class Cache {
  constructor() {
    this.storage = redis.createClient(settings.cache);
  }

  getClient() {
    return this.storage;
  }
}

module.exports = new Cache();
