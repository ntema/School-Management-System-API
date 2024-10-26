import Joi from "joi";

const Schema = Joi.object({
  course: Joi.string().required(),
  lecturer: Joi.string().required(),
    level: Joi.string().required(),
    department: Joi.string().required(),
    videoMedia: Joi.string().required(),
    fileMediaUrl: Joi.string().required(),

});

export const addLectureMaterialValidation = Schema;
