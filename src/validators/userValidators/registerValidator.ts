import Joi from "joi";

const Schema = Joi.object({
  email: Joi.string().required(),
  username: Joi.string().required(),
  department: Joi.string().required(),
  level: Joi.string().required(),
  password: Joi.string().required()
});

export const registerValidator = Schema;
