const express = require('express');
const db = require('./src/common/db/connection');
const settings = require('./settings');

const app = express();

const init = () => {
  const port = settings.server.port;

  db.init();
  app.listen(port);
};

app.get('/', (req, res) => {
  res.sendStatus(200);
});

init();
