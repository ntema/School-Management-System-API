import { Router } from "express";

import {addLectureMaterial } from "../controllers";

const router = Router();

router.post("/add_lecture_material", addLectureMaterial);

export const authRouter = router;
