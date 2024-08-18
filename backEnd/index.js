import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const app = express();


mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log("Connected to database")
}).catch((error)=>{console.log(error)});


// basic server to check
app.get('/ping' , (req,res) => {
    res.json({
        message:"Server is running fine!!!"
    })
})


app.listen(process.env.PORT, (req, res) => {
    console.log("server running at port 3000");
})