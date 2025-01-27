import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{
        required: true,
        type: String
    },
    score:{
        type: Number,
        default: 0
    },
    history:{
        type: [Number],
        default: []
    }
});

export const User = mongoose.model('User',userSchema);