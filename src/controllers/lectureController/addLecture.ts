import { NextFunction, Request, Response } from "express";

import { Lecture } from "../../models";
import { addLectureValidation } from "../../validators/lectureValidation/addLectureValidation";

export const addFaculty = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { error, value } = addLectureValidation.validate(req.body);
    if (error) {
      return res.status(400).json({
        error: { message: error.details[0].message }
      });
    }

    //@ts-ignore
    const createLecture = await Lecture.create(value);

    return res.status(201).json({ status: "success", data: createLecture });
  } catch (error) {
    console.log(error);
    next(error);
  }
};
