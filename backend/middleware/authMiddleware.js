import jwt from "jsonwebtoken"
import ENV from "../config/env.js"
import userModel from "../models/userModel.js"

 const protectRoute = async (req , res,next)=>{
 try{
        const token = req.cookies.token

    if(!token){
        return res.status(400).json({message : " Unauthorized"})
    }

    const decoded = jwt.verify(token , ENV.JWT_SECRET)
    if(!decoded){
         return res.status(400).json({message : " Unauthorized"})
    }

    const user = await userModel.findById(decoded.userId)
    if(!user) return res.status(404).json({mesage:"User not found"})

    req.userId = user._id
    next()

 }catch(error){
    console.log("error in protected route middleware: " , error)
    res.status(500).json({message:"Internal Server error"})
   }

}

export default protectRoute