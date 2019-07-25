const express = require('express');
const bodyParser = require('body-parser');
const db = require('./src/common/db/connection');
const cache = require('./src/common/cache/cache');
const settings = require('./settings');
const session = require('express-session');
const RedisStore = require('connect-redis')(session);

const app = express();

const setupSessions = () => {
  app.use(session({
    store: new RedisStore({client: cache.getClient()}),
    secret: settings.user.sessions.secretKey,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: settings.user.sessions.duration,
    },
  }));
};

const setRouter = () => {
  app.use('/tasks', require('./src/task/router'));
  app.use('/users', require('./src/user/router'));
};

const init = () => {
  const port = settings.server.port;
  app.use(bodyParser.json());
  db.init();
  setupSessions();
  setRouter();
  app.listen(port);
};

init();
