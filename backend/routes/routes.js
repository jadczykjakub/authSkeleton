import Router from "express";
import { loginUser, registerUser } from "../Controllers/AuthController.js";

const router = Router();

router.post("/api/register", registerUser);
router.post("/api/login", loginUser);

export default router;
