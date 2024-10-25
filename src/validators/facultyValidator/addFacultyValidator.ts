import Joi from "joi";

const Schema = Joi.object({
  name: Joi.string().required(),
  department: Joi.string().required(),
});

export const addFacultyValidator = Schema;
