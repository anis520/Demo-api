import { Router } from "express";
import { User, Userpost } from "../controllers/AuthController.js";

const router = Router();

router.get("/posts", User);
router.post("/posts", Userpost);

export default router;
