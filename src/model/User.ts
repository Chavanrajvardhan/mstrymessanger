import mongoose, { Schema, Document } from "mongoose";

export interface Message extends Document {
    content: string,
    createdAt: Date
}

const MessageSchema: Schema<Message> = new Schema({
    content: {
        type: String,
        required: true
    },

    createdAt: {
        type: Date,
        required: true,
        default: Date.now
    }
})


export interface User extends Document {
    username : string,
    email: string,
    password: string,
    verifyCode: string,
    verifyCodeExpiray: Date,
    isVerified: boolean
    isAcceptingMessage: boolean,
    messages: []
}


const UserSchema: Schema<User>  = new Schema({
    username: {
        type: String,
        required: [true , "User name is required"],
        unique: true,
        trim: true,
    },

    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true,
        match: [/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, "Please enter valid email address"]
    },

    password: {
        type: String,
        required: [true, "Password is required"],

    },

    verifyCode: {
        type: String,
        required: [true, "Verify code is required"],
    },

    verifyCodeExpiray: {
        type: Date,
        required: [true, "verify code expirey is requires"]
    },

    isVerified: {
        type: Boolean,
        default: false
    },

    isAcceptingMessage: {
        type: Boolean,
        default: true
    },

    messages: [MessageSchema]
})


const UserModel = (mongoose.models.User as mongoose.Model<User> || mongoose.model<User>("User", UserSchema))

export default UserModel;
