const express = require("express")
const app = express()
const mongoose = require("mongoose")
const dotenv =require('dotenv')
const userRoute = require('./router/user')
const authRoute = require('./router/auth')
PORT= 4000

dotenv.config()

mongoose.connect(process.env.MONGO_URI).then(()=>console.log("DB Connection Successful!!!")).catch((err)=>{
    console.log(err)
})
app.use(express.json())
app.use("/api/user",userRoute)
app.use("/api/auth",authRoute)

app.listen(PORT,()=>{
    console.log("BackEnd server is still Runningcd")
})