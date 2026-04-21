import express from "express"
import authMiddleware from "../middleware/authMiddleware.js"
import {upload} from "../middleware/multerMiddleware.js"
import { analyzeResume, finishInterview, generateQuestion, getInterviewReport, getMyInterview, submitAnswer } from "../controller/interviewController.js"


const router = express.Router()

router.post("/resume" ,authMiddleware , upload.single("resume") ,analyzeResume)
router.post("/generate-questions" , authMiddleware , generateQuestion)
router.post("/submit-answer" , authMiddleware , submitAnswer)
router.post("/finish" , authMiddleware , finishInterview)
router.get("/get-interview" , authMiddleware , getMyInterview)
router.get("/report/:id" , authMiddleware, getInterviewReport)

export default router