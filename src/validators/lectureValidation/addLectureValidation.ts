import Joi from "joi";

const Schema = Joi.object({
  course: Joi.string().required(),
  lecturer: Joi.string().required(),
    level: Joi.string().required(),
        department: Joi.string().required(),
            duration: Joi.string().required(),


});

export const addLectureValidation = Schema;
