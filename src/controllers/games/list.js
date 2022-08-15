const { StatusCodes } = require('http-status-codes');
const GameModel = require('../../models/games');

module.exports = async (_req, res, _next) => {
  const result = await GameModel.find();

  res.status(StatusCodes.OK).json(result);
};
