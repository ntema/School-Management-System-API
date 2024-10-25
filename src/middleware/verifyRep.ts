import { NextFunction, Request, Response } from "express";
import { userIsAuthenticated } from "./userIsAuthenticated";
export const verifyRep = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  userIsAuthenticated(req, res, () => {
    //@ts-ignore
    if (["rep"].includes(req.user.role)) {
      next();
    } else {
      return res
        .status(401)
        .json({ error: { message: "You're not authorized" } });
    }
  });
};
