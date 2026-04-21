import { promises as dns } from 'node:dns';
dns.setServers(['1.1.1.1', '8.8.8.8']);

import express from "express"
import dotenv from "dotenv"
dotenv.config()
import conncetDB from './config/db.js';
import cookieParser from 'cookie-parser';
import cors from "cors"
import authRoute from "./routes/authRoute.js"
import userRoute from "./routes/userRoute.js"
import interviewRoute from "./routes/interviewRoute.js"
import paymentRoute from "./routes/paymentRoute.js"

const app = express()

app.use((req, res, next) => {
  res.setHeader("Cross-Origin-Opener-Policy", "same-origin-allow-popups");
  res.setHeader("Cross-Origin-Embedder-Policy", "unsafe-none");
  next();
});


app.use(cors({
    origin :"https://interview-frontend-1gcr.onrender.com",
    credentials:true
}))
app.use(express.json())
app.use(cookieParser())

app.use((req, res, next) => {
  res.setHeader("Cross-Origin-Opener-Policy", "same-origin-allow-popups");
  res.setHeader("Cross-Origin-Embedder-Policy", "unsafe-none");
  next();
});

const port = process.env.PORT || 5000

app.use("/api/auth" , authRoute)
app.use("/api/user" , userRoute)
app.use("/api/interview" , interviewRoute)
app.use("/api/payment" , paymentRoute)



app.listen(port , (req,res)=>{
    conncetDB()
    console.log("server is running on:",port)
})
