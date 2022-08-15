const { StatusCodes } = require('http-status-codes');

const INVALID_ENTRIES = {
  status: StatusCodes.BAD_REQUEST,
  message: 'Invalid entries. Try again.',
};

const ALREADY_REGISTERED = {
  status: StatusCodes.CONFLICT,
  message: 'Email already registered',
};

const ALL_MUST_BE_FILLED = {
  status: StatusCodes.UNAUTHORIZED,
  message: 'All fields must be filled',
};

const INCORRECT_LOGIN = {
  status: StatusCodes.UNAUTHORIZED,
  message: 'Incorrect username or password',
};

module.exports = {
  INVALID_ENTRIES,
  ALREADY_REGISTERED,
  ALL_MUST_BE_FILLED,
  INCORRECT_LOGIN,
};
