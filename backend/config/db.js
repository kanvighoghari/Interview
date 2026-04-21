import mongoose from "mongoose";
import ENV from "./env.js"

const conncetDB = async ()=>{
    try{
        await mongoose.connect(ENV.MONGO_URI)
        console.log("database connected")
    }catch(error){
        console.log("error in connecting database" , error)

    }
}

export default conncetDB