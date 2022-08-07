import mongoose from "mongoose";

const userSchema=mongoose.Schema({

    name:{
        type:String,
        reuqire:true
    },
    email:{
        type:String,
        require:true,
        unique:true,
    },
    password:{
        type:String,
        require:true,
    },
    isAdmin:{
        type:Boolean,
        require:true,
        default:false
    }
},
{
    timestamps:true
 
})

const User= mongoose.models.User || mongoose.model("User",userSchema)
export default User