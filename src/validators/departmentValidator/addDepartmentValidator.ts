import Joi from "joi";

const Schema = Joi.object({
  name: Joi.string().required(),
  faculty: Joi.string().required(),
});

export const addDepartmentValidator = Schema;
