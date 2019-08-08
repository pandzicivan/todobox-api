const fs = require('fs');

class QueryLoader {
  constructor(path) {
    this.path = path;
  }

  load(name) {
    const query = fs.readFileSync(`${this.path}/${name}.sql`).toString();
    return query.replace(/\s\s+/g, ' ');
  }
}

module.exports = QueryLoader;
