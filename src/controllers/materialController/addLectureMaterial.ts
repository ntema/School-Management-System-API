import { NextFunction, Request, Response } from "express";

import { LectureMaterial } from "../../models";
import { addLectureMaterialValidation } from "../../validators/lectureMaterialValidation/addLectureMaterialValidation";

export const addLectureMaterial = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { error, value } = addLectureMaterialValidation.validate(req.body);
    if (error) {
      return res.status(400).json({
        error: { message: error.details[0].message }
      });
    }

    //@ts-ignore
    const createLectureMaterial = await LectureMaterial.create(value);

    return res.status(201).json({ status: "success", data: createLectureMaterial });
  } catch (error) {
    console.log(error);
    next(error);
  }
};
