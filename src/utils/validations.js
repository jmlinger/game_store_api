const Joi = require('joi');

const gameSchema = Joi.object({
  name: Joi.string().min(3).required(),
  price: Joi.number().min(0).required(),
  quantity: Joi.number().min(0).required(),
});

module.exports = {
  gameValidation: (game) => gameSchema.validate(game),
};
