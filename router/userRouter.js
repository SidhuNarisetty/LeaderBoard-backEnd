import express from 'express';
import {
    getAllUsers,
    insertUser,
    getUserbyID,
    updateUserScore
} from '../controller/userController.js';

export const userRouter = express.Router();

userRouter.route('/').get(getAllUsers).post(insertUser);
userRouter.route('/:id').get(getUserbyID).patch(updateUserScore);