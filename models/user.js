
const mongoose=require('mongoose');
const userSchema=new mongoose.Schema({
   
   firstName:{
    type:String
   },
   lastName:{
    type:String
   },
   email:{
    type:String
   },
   userRole:{
    type:String
   },
   photUrl:{
    type:String
   },
   status:{
    type:String
   },
   clinicName:{
    type:String
   },
   clinicCode:{
    type:String
   }
})

const User=mongoose.model("userData",userSchema);
module.exports=User;