import { NextFunction, Request, Response } from "express";

import { Lectures } from "../../models";
import { addFacultyValidator } from "../../validators/facultyValidator/addFacultyValidator";

export const addFaculty = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { error, value } = addFacultyValidator.validate(req.body);
    if (error) {
      return res.status(400).json({
        error: { message: error.details[0].message }
      });
    }

    //@ts-ignore
    const createFaculty = await Faculty.create(value);

    return res.status(201).json({ status: "success", data: createFaculty });
  } catch (error) {
    console.log(error);
    next(error);
  }
};
