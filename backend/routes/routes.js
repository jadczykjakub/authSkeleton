import Router from "express";
import { loginUser, registerUser } from "../Controllers/AuthController.js";
import { checkUser } from "../Middleware/AuthMiddleware.js";
import { mockContent } from "../Controllers/MockContentContoller.js";

const router = Router();

router.post("/api/register", registerUser);
router.post("/api/login", loginUser);
router.get("/api/test", checkUser, mockContent);

export default router;
