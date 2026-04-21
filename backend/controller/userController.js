import userModel from "../models/userModel.js"

export const  getCurrentUser = async (req, res)=>{
    try {

        const userId = req.userId
        const user = await userModel.findById(userId)
        if(!user){
            return res.status(400).json({message: "User not found"})
        }

        res.status(200).json(user)      
    } catch (error) {
        console.log("error in getCurrentuser" , error)
        res.status(500).json({message : "Internal server error"})
        
    }
}