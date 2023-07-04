import express from 'express';
import dotenv from 'dotenv';
import webRouter from './routers/web.js';
import connectDB from './config/database.js';


dotenv.config();


const app = express();

app.use('/', webRouter);

// Connect to MongoDB
connectDB();



const port = process.env.PORT || 3000;
const server = process.env.HTTP_SERVER || 'localhost'

app.listen(port, ()=>{
    console.log(`Server running on ${server}:${port}`);
})