import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import approutes from './routes/auth.routes.js'
import dataroutes from './routes/data.routes.js'
import connectToMongoDb from './db/connectToMongoDb.js';
import cookieParser from 'cookie-parser';
const app=express()
dotenv.config();

const __dirname = path.resolve();

app.use(express.json())
app.use(cookieParser())

const PORT=process.env.PORT;

app.use("/api",approutes);
app.use("/api",dataroutes)
app.use(express.static(path.join(__dirname,"../frontend/dist")));

app.get("*",(req,res)=>{
    res.sendFile(path.join(__dirname,"../frontend","dist","index.html"));
});

app.listen(PORT,()=>{
    connectToMongoDb();
    console.log(`server started on ${PORT}`);
    
})