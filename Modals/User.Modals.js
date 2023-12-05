import mongoose, { Schema } from "mongoose";


const user=new Schema({
    email:String,
    password:String,
    name:String
})
export default mongoose.model("youtube-user",user)