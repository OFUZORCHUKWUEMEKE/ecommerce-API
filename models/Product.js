const mongoose = require("mongoose")

const ProductSchema = new mongoose.Schema({
    title:{
        type:String,
        unique:true,
        required:true
    },
    desc:{
        type:String,
        required:true,
        unique:true
    },
    img:{
        type:String,
        required:true
    },
    categories:{
        type:Array
    
    },
    size:{
        type:String,
      
    },
    color:{
        type:String,
        
    },
    price:{
        type:String,
        required:true
    }
},{timestamps:true})

module.exports = mongoose.model("Product",ProductSchema)