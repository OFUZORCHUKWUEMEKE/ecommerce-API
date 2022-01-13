const express = require("express")
const app = express()
const mongoose = require("mongoose")
const dotenv =require('dotenv')
const userRoute = require('./router/user')
const productRoute = require('./router/product')
const cartRoute = require('./router/cart')
const orderRoute = require('./router/order')
const authRoute = require('./router/auth')
PORT= 4000

dotenv.config()

mongoose.connect(process.env.MONGO_URI).then(()=>console.log("DB Connection Successful!!!")).catch((err)=>{
    console.log(err)
})
app.use(express.json())
app.use("/api/user",userRoute)
app.use("/api/auth",authRoute)
app.use("/api/cart",cartRoute)
app.use("/api/order",orderRoute)
app.use("/api/product",productRoute)

app.listen(PORT,()=>{
    console.log("BackEnd server is still Runningcd")
})