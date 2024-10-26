import { Router } from "express";

import {addFaculty, getAllFaculty } from "../controllers";

const router = Router();

router.post("/creat_faculty", addFaculty);
router.post("/get_all_faculty", getAllFaculty);

export const authRouter = router;
