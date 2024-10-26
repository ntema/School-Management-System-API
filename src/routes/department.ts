import { Router } from "express";

import { faculty,addDepartment } from "../controllers";

const router = Router();

router.post("/login", login);
router.post("/register", register);
router.patch("/change-password", changePassword);

export const authRouter = router;
