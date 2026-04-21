import express from "express"
import protectRoute from "../middleware/authMiddleware.js"
import { getCurrentUser } from "../controller/userController.js"

const router = express.Router()

router.get("/getuser" , protectRoute , getCurrentUser)

export default router