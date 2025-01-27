import mongoose from 'mongoose';

export const dbConnections = async () => {
    try{
        await mongoose.connect(process.env.MONGODB_LOCAL);
        console.log('Database connection successfull');
    }
    catch{
        console.log('Database connection failed');
    }
};