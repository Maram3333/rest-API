const mongoose=require("mongoose")
const schema=mongoose.Schema

const userSchema=new schema({
   name:{type:String} ,
   email:{type:String},
   phone:{type:Number},
   dateCreate:{
    type:Date,
    default:Date.now()
   }
})
module.exports=User=mongoose.model("user",userSchema)
module.exports = User;