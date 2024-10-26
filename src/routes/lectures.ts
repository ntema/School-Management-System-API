import { Router } from "express";

import {addLecture } from "../controllers";

const router = Router();

router.post("/add_lecture", addLecture);

export const authRouter = router;
