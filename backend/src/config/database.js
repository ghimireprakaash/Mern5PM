import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectDB = async()=>{
    try{
        const mongoURL = process.env.DB_HOST;
        await mongoose.connect(mongoURL).then(()=>{
            console.log('MongoDB Connection Established.');
        }).catch((err)=>{
            console.log('MongoDB Connection Failed : ',err);
        })
    } catch(err){
        console.error('MongoDB Connection Failed : ',err);
        process.exit(1);
    }
}


export default connectDB;
