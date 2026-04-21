import generateToken from "../config/token.js"
import userModel  from "../models/userModel.js"

export const googleAuth = async (req,res)=>{
    const {name , email} = req.body

    if(!name || !email){
        return res.status(400).json({messsage : "Both filed required"})
    }

   try{
       let user = await userModel.findOne({ email })
       if (user) {
            generateToken(user._id, res)

            return res.status(200).json({
                id: user._id,
                name: user.name,
                email: user.email
            })
        }

        const newUser = await userModel.create({
            email,
            name,
        })

        generateToken(newUser._id , res)
        res.status(200).json({
            id : newUser._id ,
            name: newUser.name ,
            email : newUser.email,
            credits: user.credits 
        })

   }catch(error){
    console.log("Error in googleAuth", error)
    res.status(500).json({ message: "Internal server error" })
   }
}

export const logout = (req, res)=>{
    res.clearCookie("token", {
    httpOnly: true,
    secure: true,
    sameSite: "none"
})
    res.status(200).send("user logged out successfullyy")
}