import ENV from "./env.js"
import jwt from "jsonwebtoken"

const generateToken = async (userId , res)=>{
 try{
     const token = jwt.sign({userId} , ENV.JWT_SECRET  , {expiresIn:"7d"} )

     res.cookie("token" , token ,{
        maxAge: 7*24*60*60*1000,
        httpOnly : true,
        secure:true,
        sameSite: "none"
    })

   return token
 }catch(error){
    console.log("error in generateToken" , error)
 }

}

export default generateToken