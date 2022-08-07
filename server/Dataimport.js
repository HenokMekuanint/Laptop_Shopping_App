import express from 'express';
import User from './Models/UserModel';
import users from './data/users';

const ImportData=express.Router()

ImportData.post("/user",(req,res)=>{
    await User.remove({});
    const importUser=await User.insertMany(users);
    res.send({ importUser});
})
export default ImportData;