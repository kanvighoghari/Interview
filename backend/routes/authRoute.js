import express from "express"
import { googleAuth, logout } from "../controller/authController.js"
import protectRoute from "../middleware/authMiddleware.js"

const router = express.Router()

router.post("/google" ,googleAuth )
router.get("/logout" , logout)

export default router 