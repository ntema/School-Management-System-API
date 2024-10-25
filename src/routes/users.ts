import { Router } from "express";


import {
  getAllUsers,
  getLoggedUser,
  getUserById,
  updateProfile,
  changeEmail,
  deleteAccount
} from "../controllers";

const router = Router();

router.get("/",  getAllUsers);
router.get("/user",  getLoggedUser);
router.get("/:id", getUserById);
router.patch("/delete-user", deleteAccount);

router.patch("/",  updateProfile);
router.patch("/change-email",  changeEmail);

export const usersRoutes = router;
