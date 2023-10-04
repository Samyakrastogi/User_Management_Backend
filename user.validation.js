const Joi = require("joi");

const create = Joi.object({
  user_name: Joi.string().required(),
  user_email: Joi.string().required(),
  user_password: Joi.string().required(),
  user_image: Joi.string().required(),
  total_orders: Joi.string().required(),
});

const update = Joi.object({
  user_name: Joi.string().required(),
  user_email: Joi.string().required(),
  user_password: Joi.string().required(),
  user_image: Joi.string().required(),
  total_orders: Joi.string().required(),
});

module.exports = {
  create,
  update,
};
