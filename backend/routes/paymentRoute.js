import express from "express"
import authMiddleware from "../middleware/authMiddleware.js"
import { createOrder, verifyPayment } from "../controller/paymentController.js"

const router = express.Router()

router.post("/order", authMiddleware , createOrder)
router.post("/verify" , authMiddleware , verifyPayment)

export default router
