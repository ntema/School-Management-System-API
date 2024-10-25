import { NextFunction, Request, Response } from "express";

import { Department } from "../../models";
import { addDepartmentValidator } from "../../validators/departmentValidator/addDepartmentValidator";

export const addDepartment = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { error, value } = addDepartmentValidator.validate(req.body);
    if (error) {
      return res.status(400).json({
        error: { message: error.details[0].message }
      });
    }

    //@ts-ignore
    const createDepartment = await Department.create(value);

    return res.status(201).json({ status: "success", data: createDepartment });
  } catch (error) {
    console.log(error);
    next(error);
  }
};
