const Joi = require("joi");

const Schema = Joi.object({
  name: Joi.string().min(3).max(30).required(),
  email: Joi.string()
    .email({ minDomainSegments: 1, tlds: { allow: ["com"] } })
    .required(),

  password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")).required(),

  // isActive: Joi.boolean().strict(),
  // isBlocked: Joi.boolean().strict(),

  // age: Joi.number().integer().min(18),
  // country: Joi.string()
});

const loginSchema = Joi.object({
  email: Joi.string()
    .email({ minDomainSegments: 1, tlds: { allow: ["com"] } })
    .required(),

  password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")).required(),
  roles: Joi.array().items(Joi.string().valid('user', 'admin')),
  // isActive: Joi.boolean().strict(),
  // isBlocked: Joi.boolean().strict(),

  // age: Joi.number().integer().min(18),
  // country: Joi.string()
});

const validate = (req, res, next) => {
  const { error } = Schema.validate(req.body);
  if (error) next(error.details[0].message);
  else next();
};

const login = (req, res, next) => {
  const { error } = loginSchema.validate(req.body);
  if (error) next(error.details[0].message);
  else next();
};

module.exports = { validate, login };
