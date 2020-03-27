module.exports = {
  UNKNOWN_ERROR: {
    code: 'UNKNOWN_ERROR',
    httpCode: 400,
    message: 'unknown_error',
  },
  UNAUTHORIZED: {
    code: 'UNAUTHORIZED',
    httpCode: 401,
    message: 'unauthorized',
  },
  FORBIDDEN: {
    code: 'FORBIDDEN',
    httpCode: 403,
    message: 'forbidden',
  },
  USER_NOT_FOUND: {
    code: 'USER_NOT_FOUND',
    httpCode: 404,
    message: 'user_not_found',
  },
  EMPTY_DB_RESULT: {
    code: 'EMPTY_DB_RESULT',
    httpCode: 404,
    message: 'empty_db_result',
  },
  MISSING_PARAMS: {
    code: 'MISSING_PARAMS',
    httpCode: 400,
    message: 'missing_params',
  },
  WRONG_PARAMS: {
    code: 'WRONG_PARAMS',
    httpCode: 400,
    message: 'wrong_params',
  },
  WRONG_QUERY_PARAMS: {
    code: 'WRONG_QUERY_PARAMS',
    httpCode: 400,
    message: 'wrong_query_params',
  },
  ER_DUP_ENTRY: {
    code: 'DUPLICATE_DB_RESULT',
    httpCode: 409,
    message: 'duplicate_db_result',
  },
  MISSING_HEADERS: {
    code: 'MISSING_HEADERS',
    httpCode: 400,
    message: 'missing_headers',
  },
  INVALID_AUTH: {
    code: 'INVALID_AUTH',
    httpCode: 403,
    message: 'invalid_auth',
  },
  RATE_LIMIT_EXCEEDED: {
    code: 'RATE_LIMIT_EXCEEDED',
    httpCode: 429,
    message: 'rate_limit_exceeded',
  },
  FILE_SIZE_EXCEEDED: {
    code: 'FILE_SIZE_EXCEEDED',
    httpCode: 412,
    message: 'upload_file_size_exceeded',
  },
};
