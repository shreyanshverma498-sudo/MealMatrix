import mongoose from "mongoose";

const hotelSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
});

export default mongoose.model("Hotel", hotelSchema);