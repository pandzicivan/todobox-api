const fs = require('fs');
const omit = require('lodash/omit');
const minimist = require('minimist');
const db = require('mariadb');
const settings = require('../settings');

const migrate = () => {
  const args = minimist(process.argv.slice(2));

  fs.readFile(`${__dirname}/query/${args['f']}`, (err, file) => {
    if (err) {
      console.log(err);
      return;
    }
    executeMigration(file);
  });
};

const executeMigration = async (file) => {
  const dbSettings = omit(settings.db, 'database');
  const connection = await db.createConnection(dbSettings);
  try {
    await connection.query(file.toString());
  } catch (e) {
    console.log(e);
  } finally {
    if (connection) connection.end();
    process.exit(0);
  }
};

migrate();
