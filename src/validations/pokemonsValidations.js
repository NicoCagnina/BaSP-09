const Joi = require("joi");

const validateCreation = (req, res, next) => {
  const pokemonValidation = Joi.object({
    name: Joi.string().min(3).max(50).required(),
    pokedexNumber: Joi.number().required(),
    legendary: Joi.boolean(),
    types: Joi.array().items(Joi.string()).required(),
    stats: Joi.object({
      hp: Joi.number(),
      attack: Joi.number(),
      defense: Joi.number(),
      speed: Joi.number(),
    }),
  });

  const validation = pokemonValidation.validate(req.body);

  if (!validation.error) return next();
  return res.status(400).json({
    message: `There was an error: ${validation.error.details[0].message}`,
    data: undefined,
    error: true,
  });
};

module.exports = {
  validateCreation,
};
