import express from 'express';
import dotenv from 'dotenv';
import webRouter from './routers/web.js';
import connectDB from './config/database.js';
import cors from 'cors';
import Seeder from './seeder/index.js';


dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());

Seeder();


//public folder
app.use(express.static('public'));


app.use('/', webRouter);




const port = process.env.PORT || 3000;
const server = process.env.HTTP_SERVER || 'localhost'

app.listen(port, ()=>{
    console.log(`Server running on ${server}:${port}`);
})