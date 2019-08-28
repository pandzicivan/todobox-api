const {format, createLogger, transports} = require('winston');
const {combine, timestamp, prettyPrint} = format;

const logger = createLogger({
  format: combine(timestamp(), prettyPrint()),
  transports: [
    new transports.File({
      filename: './logs/error.log',
      level: 'error',
    }),
    new transports.File({
      filename: './logs/info.log',
      level: 'info',
    }),
    new transports.File({
      filename: './logs/warn.log',
      level: 'warn',
    }),
    new transports.File({
      filename: './logs/debug.log',
      level: 'debug',
    }),
    new transports.File({
      filename: './logs/logs.log',
    }),
  ],
});

if (process.env.NODE_ENV !== 'production') {
  logger.add(new transports.Console());
}

module.exports = logger;
