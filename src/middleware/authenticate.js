const Exception = require('../common/exceptions/model');

module.exports = (req, res, next) => {
  if (!req.session || !req.session.user) {
    const exception = new Exception('UNAUTHORIZED');
    return res.status(exception.httpCode).send(exception);
  }

  return next();
};
