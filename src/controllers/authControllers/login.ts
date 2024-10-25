import { NextFunction, Response, Request } from "express";
import { User } from "../../models";
import { loginValidator } from "../../validators/authValidator";
import bcrypt from "bcrypt";

export const login = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { error, value } = loginValidator.validate(req.body);

    if (error) {
      return res.status(400).json({
        error: { message: error.details[0].message }
      });
    }
    console.log("here-3");

    const user = await User.findOne({ username: value.username }).select(
      "+password"
    );
    if (!user) {
      return res.status(400).json({
        error: {
          status: "fail",
          message: "Invalid credentials"
        }
      });
    }

    const isPassword = await bcrypt.compare(value.password, user.password);
    if (!isPassword) {
      return res.status(400).json({
        error: {
          status: "fail",
          message: "Invalid credentials"
        }
      });
    }
    

    return res.status(200).json({
      ststus: "success",
      data: { user }
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};
