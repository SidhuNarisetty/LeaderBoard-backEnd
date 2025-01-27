import express from 'express';
import { config } from 'dotenv';
import { dbConnections } from './dataBase/dbConnections.js';
import { userRouter } from './router/userRouter.js';
import cors from 'cors';

const app = express();
config({path: './config/.env'});
app.use(express.json());

app.use(
    cors({
        origin: process.env.FRONTEND_URL,
        methods: ["GET","POST","PUT","PATCH","DELETE"],
        credentials: true
    })
);

app.use('/api/v1/users',userRouter);
app.use('/api/v1/',(req,res)=>{
    res.status(200).json({
        message: 'Hello From Back End'
    });
});

dbConnections();

export default app;