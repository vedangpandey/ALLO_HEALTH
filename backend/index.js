import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import approutes from './routes/auth.routes.js'
import connectToMongoDb from './db/connectToMongoDb.js';
const app=express()
dotenv.config();
app.use(express.json())
const PORT=5000;
app.use("/",(req,res)=>{
    res.send("Hello World");
})
app.use("/api",approutes);
app.listen(PORT,()=>{
    connectToMongoDb();
    console.log(`server started on ${PORT}`);
    
})