
const isArray = require('lodash/isArray');
const exceptionCodes = require('./exception-codes');
const settings = require('../../../settings');

class Exception extends Error {
  constructor(error, message, details = []) {
    super();
    let exception = error;

    if (typeof error === 'string') {
      exception = exceptionCodes[error] || error.UNKNOWN_ERROR;
    }

    this.name = this.constructor.name;
    this.details = details;
    this.setHttpCode(exception);
    this.setCode(exception);
    this.setMessage(message, exception);
    this.setStackTrace(message);
  }

  setHttpCode(exception) {
    if (exception && exception.httpCode) {
      this.httpCode = exception.httpCode;
    } else if (exception && exception.statusCode) {
      this.httpCode = exception.statusCode;
    } else {
      this.httpCode = exceptionCodes.THIRD_PARTY_ERROR.httpCode;
    }
  }

  setCode(exception) {
    if (!this.code && exception && exception.code) {
      this.code = exception.code;
    } else {
      this.code = exceptionCodes.UNKNOWN_ERROR.code;
    }
  }

  setMessage(message, exception) {
    if (message) {
      this.message = message;
    } else {
      this.message = exception && exception.message
        ? exception.message
        : exceptionCodes.UNKNOWN_ERROR.message;
    }
  }

  setStackTrace(message) {
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, this.constructor);
    } else {
      this.stack = (new Error(message)).stack;
    }

    // Add stack to details on development environment
    if (isArray(this.details) && settings.env === 'development') {
      this.details.push({
        stack: this.stack,
      });
    }
  }

  static unhandledError(response) {
    return new Exception(exceptionCodes.UNKNOWN_ERROR.code, response.code);
  }
}

module.exports = Exception;
