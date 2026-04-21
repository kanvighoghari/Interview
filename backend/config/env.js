import "dotenv/config";

const ENV = {
    PORT :process.env.PORT,
    MONGO_URI :process.env.MONGO_URI,
    JWT_SECRET : process.env.JWT_SECRET,
    OPENROUTER_API_KEY:process.env.OPENROUTER_API_KEY,
    RAZORPAY_KEY_SECRET:process.env.RAZORPAY_KEY_SECRET,
    RAZORPAY_KEY_API:process.env.RAZORPAY_KEY_API
     
}

export default ENV