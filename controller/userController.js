import {User} from "../models/userModel.js";

export const getAllUsers = async (req,res) => {
    try{
        const user = await User.find().sort({score: -1});
        res.status(200).json({
            user
        })
    }
    catch(error){
        console.log(error);
    }
};

export const insertUser = async (req,res) => {
    try{
        const user = new User(req.body);
        await user.save();
        
        res.status(200).json({
            message: 'User Created successfully!',
            user
        })
    }
    catch(error){
        console.log(error);
    }
}

export const getUserbyID = async(req,res) => {
    try{
        const user = await User.findOne({ _id : req.params.id });
        res.status(200).json({
            message:'User fetched successfully',
            user
        });
    }
    catch(error){
        console.log(error);
    }
}

export const updateUserScore = async(req,res) => {
    try{
        const {id} = req.params;
        const {value} = req.body;
        const user = await User.findOneAndUpdate({_id:id},{
            $inc: {score: value},
            $push: {history: value}
        },{new:true});
        res.status(200).json({
            message:'User updated successfully',
            user
        });
    }
    catch(error){
        console.log(error);
    }
}

// export default userController;