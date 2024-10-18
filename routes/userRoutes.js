const express=require("express")
const router=express.Router()
const User=require("../models/userModdel")


router.post("/add",async(req,res)=>{
    const {name,email,phone}=req.body
const newuser=new User({name,email,phone})
const user=await newuser.save()
res.send({msg: "user saved !",user})

})


router.get("/getall",async(req,res)=>{
    const users=await User.find()
    res.send({msg:"user fetched !",users})
})

router.delete("/delete/:id",async(req,res)=>{
    const {id}=req.params
    console.log(id)
   const user=await User.findOneAndDelete({_id:id})
    res.send({msg:"user deleted !", user})

})
router.put("/edit/:id",async(req,res)=>{
    const {id}=req.params
    const users=await User.findOneAndUpdate({_id:id},{$set:req.body},{new:true})
    res.send({msg:"user updated",users})
})
module.exports=router