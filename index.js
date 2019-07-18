const express = require('express');
var bodyParser = require('body-parser');
const db = require('./src/common/db/connection');
const settings = require('./settings');

const app = express();

const setRouter = () => {
  app.use('/task', require('./src/task/router'));
};

const init = () => {
  const port = settings.server.port;
  app.use(bodyParser.json());
  setRouter();
  db.init();
  app.listen(port);
};

init();
