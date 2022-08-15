const Services = require('../../services/games');

module.exports = async (req, res, _next) => {
  const { body, file } = req;

  const result = await Services.create(body, file);

  res.status(result.status)
    .json(typeof result.message === 'object'
      ? { game: result.message }
      : { message: result.message });
};
