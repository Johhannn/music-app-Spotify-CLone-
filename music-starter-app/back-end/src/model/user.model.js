import mongoose from "mongoose";
const userSchema = new mongoose.Schema(
    {fullName:{
        type:String,
        required: true,
    }, email:{
        type: String,
        required: true,
        unique: true
    }, password:{
        type: String,
        required: true,
        minLength: 6
    }, 
    // favorites: [
    //     {
    //       musicId: { type: String, required: true }, // Unique ID for the song from the music API
    //       title: { type: String, required: true }, // Song title
    //       artist: { type: String, required: true }, // Artist name
    //       album: { type: String }, // Album name
    //       cover: { type: String }, // URL of the cover image
    //       addedAt: { type: Date, default: Date.now }, // Timestamp when the song was added to favorites
    //     },
    //   ],
},{timestamps: true}
);

const User = mongoose.model("User", userSchema);

export default User;