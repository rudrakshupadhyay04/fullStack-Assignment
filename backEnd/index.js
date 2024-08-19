import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv';
import getRoutes from './routes/card.routes.js'
import cors from 'cors';
import path from 'path';

dotenv.config();

const __dir = path.resolve();

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


app.use(express.json())

const corsOptions = {
    origin: 'http://127.0.0.1:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
}
app.use(cors(corsOptions));

app.use('/helpCenter', getRoutes);

app.use(express.static(path.join(__dirname, '/frontEnd/dist')));

app.get('*',(req,res) => {
    res.sendFile(path.join(__dirname, 'frontEnd','dist','index.html'));
})


app.listen(process.env.PORT, (req, res) => {
    console.log("server running at port 3000");
})