
const mongoose=require('mongoose');
const userSchema=new mongoose.Schema({
   
    ticketId:{
        type:String
    },
    ticketTitle:{
        type:String
    },
    ticketCreator:{
        type:String
    },
    ClinicCode:{
        type:String
    },
    ClinicName:{
        type:String
    }
})

const User=mongoose.model("ticket",userSchema);
module.exports=User;