const router = require("express").Router()


router.get("/usertest",(req,res)=>{
    res.send("user successfully")
})

module.exports = router