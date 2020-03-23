const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  env: process.env.ENV,
  appPort: process.env.APP_PORT,
  dbHost: process.env.DB_HOST,
  dbName: process.env.DB_NAME,
  dbPassword: process.env.DB_PASSWORD,
  dbUser: process.env.DB_USER,
  redisHost: process.env.REDIS_HOST,
  redisPort: process.env.REDIS_PORT,
  sessionSecretKey: process.env.SESSION_SECRET_KEY,
};
