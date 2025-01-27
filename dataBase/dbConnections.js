import mongoose from 'mongoose';

export const dbConnections = async () => {
    try{
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('Database connection successfull');
    }
    catch(error){
        console.log('Database connection failed');
        console.log(error);
    }
};