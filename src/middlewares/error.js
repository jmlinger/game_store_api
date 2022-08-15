const { StatusCodes } = require('http-status-codes');

module.exports = (err, _req, res, _next) => {
  console.error(err);

  if (err.status) {
    return res.status(err.status).json({ message: err.message });
  }
  
  return res.status(StatusCodes.INTERNAL_SERVER_ERROR).end();
};
