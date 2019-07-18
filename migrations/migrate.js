const fs = require('fs');
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
  const dbSettings = settings.db;
  const connection = await db.createConnection(dbSettings);
  try {
    await connection.query(file.toString()).finally(async () => {
      await connection.end();
    });
  } catch (e) {
    console.log(e);
  }
  process.exit();
};

migrate();
