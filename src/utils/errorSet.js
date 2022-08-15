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

const RECIPE_NOT_FOUND = {
  status: StatusCodes.NOT_FOUND,
  message: 'recipe not found',
};

const DONT_OWN_RECIPE = {
  status: StatusCodes.UNAUTHORIZED,
  message: 'You dont own this recipe',
};

module.exports = {
  INVALID_ENTRIES,
  ALREADY_REGISTERED,
  ALL_MUST_BE_FILLED,
  INCORRECT_LOGIN,
  RECIPE_NOT_FOUND,
  DONT_OWN_RECIPE,
};
