import { Router } from "express";

import {addDepartment, getAllDeparment } from "../controllers";

const router = Router();

router.post("/creat_department", addDepartment);
router.post("/get_all_dept", getAllDeparment);

export const authRouter = router;
