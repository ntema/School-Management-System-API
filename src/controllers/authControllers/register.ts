import { NextFunction, Response, Request } from "express";
import { User } from "../../models";
import { registerValidator } from "../../validators/authValidator";
import bcrypt from "bcrypt";

export const register = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { error, value } = registerValidator.validate(req.body);

    if (error) {
      console.log("here-2");
      return res.status(400).json({
        error: { message: error.details[0].message }
      });
    }

    const isUser = await User.findOne({ email: value.email });
    if (isUser) {
      return res.status(400).json({
        error: { status: "fail", message: "Email already exists" }
      });
    }

    value.password = await bcrypt.hash(value.password, 12);
    const user = await User.create(value);


    return res.status(200).json({
      status: "success",
      data: { user }
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};
