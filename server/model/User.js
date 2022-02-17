const mongoose =require("mongoose");
const {Schema} =require ("mongoose");

const User =new Schema({
    name:{type:String,required:true},
    username:{type:String,required:true},
    phone:{type:String,required:true},
    password:{type:String,required:true}
})

const user =mongoose.model("User",User);
module.exports=user;
