const config = require('./config');

const settings = {
  env: config.env,
  server: {
    port: config.appPort,
  },
  db: {
    port: 3306,
    user: config.dbUser,
    password: config.dbPassword,
    connectTimeout: 3000,
    host: config.dbHost,
    multipleStatements: true,
    database: config.dbName,
    debug: false,
  },
  cache: {
    host: config.redisHost,
    port: config.redisPort,
  },
  user: {
    sessions: {
      secretKey: config.sessionSecretKey,
      duration: 28800000, // In miliseconds => 8 Hours
    },
  },
  docs: {
    swaggerDefinition: {
      info: {
        title: 'Todoer API Docs',
        version: '1.0.0',
      },
      host: '127.0.0.1',
      schemes: ['http'],
    },
    apis: [
      'src/**/*router*.js',
    ],
  },
};

module.exports = settings;
