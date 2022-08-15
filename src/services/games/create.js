const { StatusCodes } = require('http-status-codes');
const Models = require('../../models/games');
const { INVALID_ENTRIES } = require('../../utils/errorSet');
const { gameValidation } = require('../../utils/validations');

module.exports = async (body, file) => {
  const game = JSON.parse(Object.values(body)[0]);

  if (gameValidation(game).error) {
    return INVALID_ENTRIES;
  }

  const newGame = (await Models
    .create({ ...game, image: file.location ? file.location : file.path }));

  return { status: StatusCodes.CREATED, message: newGame };
};
