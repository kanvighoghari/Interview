import razorpay from "../services/razorpayService.js"
import paymentModel from "../models/paymentModel.js"
import crypto from "crypto"
import ENV from "../config/env.js"
import userModel from "../models/userModel.js"

export const createOrder = async (req,res)=>{
    try{
        const {planId, amount, credits } = req.body

        if(!amount || !credits){
            return res.status(400).json({message: "Invalid plan data"})
        }

        const options = {
            amount : amount*100, //convert to paisa
            currency:"INR",
            receipt: `receipt_${Date.now()}`
        }

        const order = await razorpay.orders.create(options)

        await paymentModel.create({
            userId: req.userId,
            planId,
            amount,
            credits,
            razorpayOrderId:order.id,
            status:"created"
        })

        res.json(order)
    }catch(error){
        console.log("error in payment controller " , error)
    }

}


export const verifyPayment = async (req,res)=>{
    try {
        const {razorpay_order_id , razorpay_payment_id , razorpay_signature} = req.body

        const body = razorpay_order_id +"|" + razorpay_payment_id

        const expectedSignature = crypto.createHmac("sha256" , ENV.RAZORPAY_KEY_SECRET).update(body).digest("hex")

        if(expectedSignature !== razorpay_signature){
            return res.status(400).json({message: "Invalid Payment"})
        }

        const payment =  await paymentModel.findOne({razorpayOrderId: razorpay_order_id})

        if(!payment){
            return res.status(404).json({message: "Payment Not Found"})
        }

        if(payment.status === "paid"){
            return res.json({message: "Payment Already Proceed"})
        }

        payment.status = "paid"
        payment.razorpayPaymentId = razorpay_payment_id;
        await payment.save()
        
        const updatedUser = await userModel.findByIdAndUpdate(payment.userId ,{$inc:{credits:payment.credits}}, {new:true})

        return res.status(200).json({
            sucess: true,
            message: "Payment verified and credits added",
            user: updatedUser
        })

    } catch (error) {
       console.log("error in verifyPayment " , error) 
    }

}